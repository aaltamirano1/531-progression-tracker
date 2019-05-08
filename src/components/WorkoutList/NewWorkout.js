import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import $ from 'jquery';
import './NewWorkout.css';
import {postExercise} from '../../actions';

export class NewWorkout extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    closeForm(){
        $(".modal-background").hide();
    }
    onSubmit(e) {
        e.preventDefault();
        const name = this.nameInput.value.trim();
        const orm = this.ormInput.value.trim();
        if (name && orm) {
            this.props.dispatch(postExercise(this.nameInput.value, this.ormInput.value));
        }
        this.nameInput.value = '';
        this.ormInput.value = '';
        console.log(this.props.exercises);
        this.closeForm();
    }

	render(){
	    return (
          <div className="modal-background">  
              <div className="modal">
                  <form className="new-workout" onSubmit={this.onSubmit}>
                    <p className="close-form" onClick={()=>this.closeForm()}><i className="fas fa-times"></i></p>
                    <h1>New Workout</h1>
                    <p className="error">{this.props.formErrors}</p>
                    <label htmlFor="name-input">Name:</label>
                    <input type="text" name="name" id="name-input" required ref={input => this.nameInput = input}/>
                    <br/>
                    <label htmlFor="orm-input">ORM:</label>
                    <input type="number" name="orm" id="orm-input" required ref={input => this.ormInput = input}/>
                    <br/>
                    <button type="submit">Submit</button>
                  </form>
              </div>
          </div>
		);
	}

}
const mapStateToProps = state => ({
    formErrors: state.formErrors,
    exercises: state.exercises
});

export default connect(mapStateToProps)(NewWorkout);