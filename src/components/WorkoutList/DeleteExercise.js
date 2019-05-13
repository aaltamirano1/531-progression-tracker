import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import './DeleteExercise.css';

export default class DeleteExercise extends Component{
	areYouSure(){
		$(".delete-button").addClass("red-btn").text("Are you sure?");
	}
	render(){
		return (
			<div className="delete-section">
				<hr />
				<button className="delete-button" onClick={()=>this.areYouSure()}>Delete</button>
			</div>
		);
	}
}