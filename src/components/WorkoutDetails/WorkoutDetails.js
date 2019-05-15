import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './WorkoutDetails.css';
import SubNavbar from './SubNavbar';
import WeeklySchedule from './WeeklySchedule';
import WorkoutForm from '../WorkoutList/WorkoutForm';
import NotesSection from './NotesSection/NotesSection';
import {putExercise} from '../../actions';

export class WorkoutDetails extends Component{
	updateExercise(name, orm, id){
		this.props.dispatch(putExercise({name, orm}, id));
	}
	render(){
		if(!this.props.authToken){
			return <Redirect to="/" />;
		}else if(!this.props.selected){
			return <Redirect to="/workout-list" />;
		}
		const workout = this.props.exercises.filter(exercise=>{
			return exercise._id === this.props.selected;
		})[0];
		return (
			<div className="workout-details">
				<SubNavbar />
				<h1>{workout.name}</h1>
				<WeeklySchedule workoutId={workout._id} orm={workout.orm} week={workout.week}/>
				<NotesSection />
				<WorkoutForm title="Edit Exercise" 
					nameValue={workout.name} 
					ormValue={this.props.units==="kg." ? workout.orm/2.2046 : workout.orm}
					idValue={workout._id}
					requestHandler={(name, orm, id) => this.updateExercise(name, orm, id)}
				/>
			</div>
		);
	}

}

const mapStateToProps = state => ({
    authToken: state.authToken,
    units: state.units,
    exercises: state.exercises,
    selected: state.selectedExercise
});

export default connect(mapStateToProps)(WorkoutDetails);