import React, {Component} from 'react';
import Exercise from './Exercise';
import ExerciseForm from './ExerciseForm';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './ExerciseList.css';
import {setSelectedExercise, postExercise, getNotes, getExercises} from '../../actions';

export class ExerciseList extends Component{
	newExercise(){
		$(".modal-background.exercise-form").show();
	}
	addExercise(name, orm){
		this.props.dispatch(postExercise(name, orm));
	}
	selectExercise(id){
		this.props.dispatch(setSelectedExercise(id));
		this.props.dispatch(getNotes(id));
	}
	componentWillMount(){
		if(!this.props.exercises){
			this.props.dispatch(getExercises(this.props.userId));
		}
	}
	render(){
		if(!this.props.authToken){
			return <Redirect to="/" />;
		}else if(this.props.selectedExercise){
			return <Redirect to="/exercise-details" />;
		}

		const exercisesHTML = 
			this.props.exercises
			? this.props.exercises.map(exercise=>(<Exercise key={exercise._id} name={exercise.name} orm={exercise.orm} select={()=>this.selectExercise(exercise._id)}/>)) 
			: <p className="no-exercises"><em>You have added no exercises yet. Please press the button to add one.</em></p>;
			
		return (
			<ul className="exercise-list">
				<li><ExerciseForm title="New exercise" requestHandler={(name, orm) => this.addExercise(name, orm)}/></li>
				{exercisesHTML}
				<li><button className="new-exercise" onClick={()=>this.newExercise()}>+</button></li>
			</ul>
		);
	}

}

const mapStateToProps = state => ({
    authToken: state.authToken,
    exercises: state.exercises,
    selectedExercise: state.selectedExercise,
    userId: state.userId
});

export default connect(mapStateToProps)(ExerciseList);