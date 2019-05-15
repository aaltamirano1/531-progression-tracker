import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
//import './NoteForm.css';
//import {postNote} from '../../actions';

export class NoteForm extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    closeForm(){
        $(".modal-background").hide();
    }
    onSubmit(e) {
        e.preventDefault();
        const text = this.noteInput.value.trim();

        //this.props.dispatch(postNote(note, this.props.selected));

        this.closeForm();
    }
    componentDidMount(){
        if(this.props.value){
            this.noteInput.value = this.props.value;
        }
    }

	render(){
	    return (
          <div className="modal-background">  
              <div className="modal">
                  <form className="workout-form" onSubmit={this.onSubmit}>
                    <p className="close-form" onClick={()=>this.closeForm()}><i className="fas fa-times"></i></p>
                    <h1>Edit Note</h1>
                    <p className="error">{this.props.formErrors}</p>
                    <input type="text" name="note" id="note-input" required ref={input => this.noteInput = input}/>
                  </form>
              </div>
          </div>
		);
	}

}
const mapStateToProps = state => ({
    selected: state.selectedExercise
});

export default connect(mapStateToProps)(NoteForm);