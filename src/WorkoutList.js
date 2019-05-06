import React, {Component} from 'react';
import Workout from './Workout';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './WorkoutList.css';

export class WorkoutList extends Component{

	render(){
		console.log(this.props.authToken);
		if(!localStorage.authToken){
			return <Redirect to="/" />;
		}

		const workouts = [
			{name: 'squats', orm: 150, notes: [], week: 1},
			{name: 'deadlifts', orm: 200, notes: [], week: 1}
		];

		const workoutsHTML = workouts.map(workout=>(<Workout name={workout.name} orm={workout.orm} />));
		return (
			<ul className="workout-list">
				{workoutsHTML}
			</ul>
		);
	}

}

const mapStateToProps = state => ({
    authToken: state.authToken
});

export default connect(mapStateToProps)(WorkoutList);