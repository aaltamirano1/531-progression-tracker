import React, {Component} from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';

import{putUserUnits, setSelectedExercise} from '../../actions';
import './SubNavbar.css';

export class SubNavbar extends Component{
	updateUnits(){
		if(this.props.units==="lbs."){
			this.props.dispatch(putUserUnits(this.props.userId, "kg."));	
		}else if(this.props.units==="kg."){
			this.props.dispatch(putUserUnits(this.props.userId, "lbs."));	
		}
	}
	clearSelectedExercise(){
		this.props.dispatch(setSelectedExercise(""));
	}
	editExercise(){
		$(".modal-background.exercise-form").show();
		$(".delete-button").removeClass("red-btn").text("Delete");
	}
	render(){
		return (
				<nav className="workout-details-nav">
					<ul>
						<li onClick={()=>this.clearSelectedExercise()}><i className="fas fa-arrow-left"></i> All Workouts</li>
						<li onClick={()=>this.editExercise()}>Edit</li>
						<li onClick={()=>this.updateUnits()}>Unit: {this.props.units}</li>
						</ul>
				</nav>
		);
	}
}
const mapStateToProps = state => ({
    units: state.units,
    userId: state.userId
});

export default connect(mapStateToProps)(SubNavbar)
