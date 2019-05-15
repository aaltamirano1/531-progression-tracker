import React, {Component} from 'react';
import Workout from './Workout';
import WorkoutForm from './WorkoutForm';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './WorkoutList.css';
import {setSelectedExercise, postExercise, getNotes} from '../../actions';

export class WorkoutList extends Component{
	newExercise(){
		$(".modal-background.exercise-form").show();
	}
	addExercise(name, orm){
		this.props.dispatch(postExercise(name, orm));
	}
	selectExercise(id){
		this.props.dispatch(setSelectedExercise(id));
		this.props.dispatch(getNotes(id));
	}
	render(){
		if(!this.props.authToken){
			return <Redirect to="/" />;
		}else if(this.props.selectedExercise){
			return <Redirect to="/workout-details" />;
		}

		const workoutsHTML = 
			this.props.exercises 
			? this.props.exercises.map(workout=>(<Workout key={workout._id} name={workout.name} orm={workout.orm} select={()=>this.selectExercise(workout._id)}/>)) 
			: <p className="no-workouts"><em>You have added no workouts yet. Please press the button to add one.</em></p>;
			
		return (
			<ul className="workout-list">
				<li><WorkoutForm title="New Workout" requestHandler={(name, orm) => this.addExercise(name, orm)}/></li>
				{workoutsHTML}
				<li><button className="new-exercise" onClick={()=>this.newExercise()}>+</button></li>
			</ul>
		);
	}

}

const mapStateToProps = state => ({
    authToken: state.authToken,
    exercises: state.exercises,
    selectedExercise: state.selectedExercise
});

export default connect(mapStateToProps)(WorkoutList);