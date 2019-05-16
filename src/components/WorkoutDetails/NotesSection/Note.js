import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteNote} from '../../../actions';
import './Note.css';

export class Note extends Component{
	constructor(props){
		super(props);
		this.state = {editing: false};
	}
	toggleEditing(){
		this.setState({editing: !this.state.editing});
	}
	render(){
		let li = this.state.editing ? 
		(<li>
			<form className="note-editing" onSubmit={()=>this.toggleEditing()}>
				<textarea name="note" id="note-input" rows="4" cols="50" value={this.props.content} required ref={input => this.noteInput = input}></textarea>
			</form>
		</li>) : 
		(<li>
			<p>{this.props.content}</p>
			<div className="notes-buttons">
				<button onClick={()=>this.toggleEditing()}>Edit</button>
				<button onClick={()=>this.props.dispatch(deleteNote(this.props.noteId, this.props.exercise))}>Delete</button>
			</div>
		</li>);

		return li;
	}
}

const mapStateToProps = state => ({
    exercise: state.selectedExercise
});

export default connect(mapStateToProps)(Note);
