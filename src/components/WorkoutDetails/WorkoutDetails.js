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
		}else if(!this.props.workout){
			return <Redirect to="/workout-list" />;
		}
		console.log(this.props.authToken);
		return (
			<div className="workout-details">
				<SubNavbar />
				<h1>{this.props.workout.name}</h1>
				<WeeklySchedule orm={this.props.workout.orm} week={this.props.workout.week}/>
				<Notes />
				<WorkoutForm title="Edit Exercise" 
					nameValue={this.props.workout.name} 
					ormValue={this.props.workout.orm}
					idValue={this.props.workout._id}
					requestHandler={(name, orm, id) => this.updateExercise(name, orm, id)}
				/>
			</div>
		);
	}

}

const mapStateToProps = state => ({
    workout: state.selectedWorkout,
    authToken: state.authToken
});

export default connect(mapStateToProps)(WorkoutDetails);