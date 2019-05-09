import React, {Component} from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';

import{setSelectedExercise} from '../../actions';
import './SubNavbar.css';

export class SubNavbar extends Component{
	clearSelectedExercise(){
		this.props.dispatch(setSelectedExercise(""));
	}
	editExercise(){
		$(".modal-background").show();
	}
	render(){
		return (
				<nav className="workout-details-nav">
					<ul>
						<li onClick={()=>this.clearSelectedExercise()}>All Workouts</li>
						<li onClick={()=>this.editExercise()}>Edit</li>
						<li>Delete</li>
						<li>Unit: {this.props.units}</li>
						</ul>
				</nav>
		);
	}
}
const mapStateToProps = state => ({
    units: state.units
});

export default connect(mapStateToProps)(SubNavbar)
