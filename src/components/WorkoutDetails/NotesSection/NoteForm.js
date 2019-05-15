import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import {postNote} from '../../../actions';

export class NoteForm extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    closeForm(){
        $(".modal-background.note-form").hide();
    }
    onSubmit(e) {
        e.preventDefault();
        const note = this.noteInput.value.trim();
        this.props.dispatch(postNote(note, this.props.selected));

        this.closeForm();
    }
	render(){
	    return (
          <div className="modal-background note-form">  
              <div className="modal">
                  <form className="workout-form" onSubmit={this.onSubmit}>
                    <p className="close-form" onClick={()=>this.closeForm()}><i className="fas fa-times"></i></p>
                    <h1>New Note</h1>
                    <p className="error">{this.props.formErrors}</p>
                    <textarea name="note" id="note-input" rows="4" cols="50" required ref={input => this.noteInput = input}></textarea>
                    <button className="red-btn" type="submit" style={{"marginTop":"10px"}}>Submit</button>
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