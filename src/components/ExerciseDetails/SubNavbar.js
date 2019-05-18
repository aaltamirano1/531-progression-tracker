import React, {Component} from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';

import {putUserUnits, setSelectedExercise} from '../../actions';
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
				<nav className="exercise-details-nav">
					<ul>
						<li id="all-exercises-link" onClick={()=>this.clearSelectedExercise()}>
							<i className="fas fa-arrow-left"></i> Back to All
						</li>
						<li id="edit-exercise-link" onClick={()=>this.editExercise()}>Edit</li>
						<li id="toggle-units-link" onClick={()=>this.updateUnits()}>Unit: {this.props.units}</li>
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
