import React, {Component} from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';

import{setSelectedWorkout} from '../../actions';
import './SubNavbar.css';

export class SubNavbar extends Component{
	clearSelectedWorkout(){
		this.props.dispatch(setSelectedWorkout(""));
	}
	editExercise(){
		$(".modal-background").show();
	}
	render(){
		return (
				<nav className="workout-details-nav">
					<ul>
						<li onClick={()=>this.clearSelectedWorkout()}>All Workouts</li>
						<li onClick={()=>this.editExercise()}>Edit</li>
						<li>Delete</li>
						<li>Unit: lbs.</li>
						</ul>
				</nav>
		);
	}
}

export default connect()(SubNavbar)
