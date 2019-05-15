import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import './WorkoutForm.css';
import DeleteExercise from './DeleteExercise';

export class WorkoutForm extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    closeForm(){
        $(".modal-background.exercise-form").hide();
    }
    onSubmit(e) {
        e.preventDefault();
        const name = this.nameInput.value.trim();
        const orm = this.ormInput.value.trim();
        if (name && orm && this.props.idValue) {
            this.props.requestHandler(this.nameInput.value, this.ormInput.value, this.props.idValue);
        } else if (name && orm) {
            this.props.requestHandler(this.nameInput.value, this.ormInput.value);
        }
        this.closeForm();
    }
    componentDidMount(){
        if(this.props.ormValue && this.props.nameValue){
            this.nameInput.value = this.props.nameValue;
            this.ormInput.value = this.props.ormValue;
        }
    }

	render(){
	    return (
          <div className="modal-background exercise-form">  
              <div className="modal">
                  <form className="workout-form" onSubmit={this.onSubmit}>
                    <p className="close-form" onClick={()=>this.closeForm()}><i className="fas fa-times"></i></p>
                    <h1>{this.props.title}</h1>
                    <p className="error">{this.props.formErrors}</p>
                    <label htmlFor="name-input">Name:</label>
                    <input type="text" name="name" id="name-input" required ref={input => this.nameInput = input}/>
                    <br/>
                    <label htmlFor="orm-input">ORM:</label>
                    <p style={{"color": "grey", "margin": "0"}}>(in {this.props.units})</p>
                    <input type="number" name="orm" id="orm-input" required ref={input => this.ormInput = input}/>
                    <br/>
                    <button className="red-btn" type="submit">Submit</button>
                  </form>
                  {this.props.idValue ? <DeleteExercise /> : ""}
              </div>
          </div>
		);
	}

}
const mapStateToProps = state => ({
    formErrors: state.formErrors,
    exercises: state.exercises,
    units: state.units
});

export default connect(mapStateToProps)(WorkoutForm);