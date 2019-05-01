import React, {Component} from 'react';
import Workout from './Workout';
import './WorkoutList.css';

export default class WorkoutList extends Component{

	render(){
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