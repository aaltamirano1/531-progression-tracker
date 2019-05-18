import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './ExerciseDetails.css';
import SubNavbar from './SubNavbar';
import WeeklySchedule from './WeeklySchedule';
import ExerciseForm from '../ExerciseList/ExerciseForm';
import NotesSection from './NotesSection/NotesSection';
import {putExercise} from '../../actions';

export class ExerciseDetails extends Component{
	updateExercise(name, orm, id){
		this.props.dispatch(putExercise({name, orm}, id));
	}
	render(){
		if(!this.props.authToken){
			return <Redirect to="/" />;
		}else if(!this.props.selected){
			return <Redirect to="/exercise-list" />;
		}
		const exercise = this.props.exercises.filter(exercise=>{
			return exercise._id === this.props.selected;
		})[0];
		
		return (
			<div className="exercise-details">
				<SubNavbar />
				<h1>{exercise.name}</h1>
				<WeeklySchedule exerciseId={exercise._id} orm={exercise.orm} week={exercise.week}/>
				<NotesSection notes={exercise.notes}/>
				<ExerciseForm title="Edit Exercise" 
					nameValue={exercise.name} 
					ormValue={this.props.units==="kg." ? Math.round(exercise.orm/2.2046) : Math.round(exercise.orm)}
					idValue={exercise._id}
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

export default connect(mapStateToProps)(ExerciseDetails);