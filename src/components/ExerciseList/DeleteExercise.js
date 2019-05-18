import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteExercise, setSelectedExercise} from '../../actions';
import $ from 'jquery';
import './DeleteExercise.css';

export class DeleteExercise extends Component{
	clearSelectedExercise(){
		this.props.dispatch(setSelectedExercise(""));
	}
	areYouSure(){
		$(".delete-button").addClass("red-btn").text("Are you sure?");
		$(".delete-button.red-btn").on("click", ()=>{
			this.props.dispatch(deleteExercise(this.props.exercise));
			this.clearSelectedExercise();
		});
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

const mapStateToProps = state => ({
    exercise: state.selectedExercise
});

export default connect(mapStateToProps)(DeleteExercise);