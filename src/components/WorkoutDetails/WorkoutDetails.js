import React, {Component} from 'react';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './WorkoutDetails.css';
import SubNavbar from './SubNavbar';
import WeeklySchedule from './WeeklySchedule';
import WorkoutForm from '../WorkoutList/WorkoutForm';
import Notes from './Notes';
import {putExercise} from '../../actions';

export class WorkoutDetails extends Component{
	updateExercise(name, orm, id){
		this.props.dispatch(putExercise(name, orm, id));
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
				<WeeklySchedule orm={workout.orm} week={workout.week}/>
				<Notes />
				<WorkoutForm title="Edit Exercise" 
					nameValue={workout.name} 
					ormValue={workout.orm}
					idValue={workout._id}
					requestHandler={(name, orm, id) => this.updateExercise(name, orm, id)}
				/>
			</div>
		);
	}

}

const mapStateToProps = state => ({
    authToken: state.authToken,
    exercises: state.exercises,
    selected: state.selectedExercise
});

export default connect(mapStateToProps)(WorkoutDetails);