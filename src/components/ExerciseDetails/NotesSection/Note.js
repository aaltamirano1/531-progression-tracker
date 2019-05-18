import React, {Component} from 'react';
import {connect} from 'react-redux';
import {putNote, deleteNote, getNotes} from '../../../actions';
import './Note.css';

export class Note extends Component{
	constructor(props){
		super(props);
		this.state = {editing: false};
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(e){
    e.preventDefault();

    const note = this.noteInput.value.trim();
    const id = this.props.noteId;
    if (note) {
      this.props.dispatch(putNote(note, id));
      this.props.dispatch(getNotes(this.props.exercise));
    }
    this.toggleEditing();
	}
	componentDidUpdate(){
    if(this.props.content && this.noteInput){
     this.noteInput.value = this.props.content;
    }
	}
	toggleEditing(){
		this.setState({editing: !this.state.editing});
	}
	render(){
		let li = this.state.editing ? 
		(<li>
			<form className="note-editing" onSubmit={this.onSubmit}>
				<input type="text" name="note" id="note-input" required ref={input => this.noteInput = input}/>
				<button type="submit">Submit</button>
			</form>
		</li>) : 
		(<li>
			<p>{this.props.content}</p>
			<div className="notes-buttons">
				<button id="edit-note-button" onClick={()=>this.toggleEditing()}>Edit</button>
				<button id="delete-note-button" onClick={()=>this.props.dispatch(deleteNote(this.props.noteId, this.props.exercise))}>Delete</button>
			</div>
		</li>);

		return li;
	}
}

const mapStateToProps = state => ({
    exercise: state.selectedExercise
});

export default connect(mapStateToProps)(Note);
