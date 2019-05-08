import React, {Component} from 'react';
import $ from 'jquery';

import './WorkoutDetails.css';
import SubNavbar from './SubNavbar';
import WeeklySchedule from './WeeklySchedule';
import Notes from './Notes';

import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export class WorkoutDetails extends Component{
	render(){
		if(!this.props.workout){
			return <Redirect to="/workout-list" />;
		}
		return (
			<div className="workout-details">
				<SubNavbar />
				<h1>{this.props.workout.name}</h1>
				<WeeklySchedule orm={this.props.workout.orm} week={this.props.workout.week}/>
				<Notes />
			</div>
		);
	}

}

const mapStateToProps = state => ({
    workout: state.selectedWorkout
});

export default connect(mapStateToProps)(WorkoutDetails);