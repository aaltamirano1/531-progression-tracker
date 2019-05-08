import React, {Component} from 'react';
import Workout from './Workout';
import NewWorkout from './NewWorkout';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './WorkoutList.css';
import {setSelectedWorkout} from '../../actions';

export class WorkoutList extends Component{
	newExercise(){
		$(".modal-background").show();
	}
	selectWorkout(workout){
		this.props.dispatch(setSelectedWorkout(workout));
	}
	render(){
		if(!localStorage.authToken){
			return <Redirect to="/" />;
		}else if(this.props.selectedWorkout){
			return <Redirect to="/workout-details" />;
		}

		const workoutsHTML = 
			this.props.exercises 
			? this.props.exercises.map(workout=>(<Workout key={workout.id} name={workout.name} orm={workout.orm} select={()=>this.selectWorkout(workout)}/>)) 
			: <p className="no-workouts"><em>You have added no workouts yet. Please press the button to add one.</em></p>;
			
		return (
			<ul className="workout-list">
				<li><NewWorkout /></li>
				{workoutsHTML}
				<li><button className="new-exercise" onClick={()=>this.newExercise()}>+</button></li>
			</ul>
		);
	}

}

const mapStateToProps = state => ({
    authToken: state.authToken,
    exercises: state.exercises,
    selectedWorkout: state.selectedWorkout
});

export default connect(mapStateToProps)(WorkoutList);