import React, {Component} from 'react';
import $ from 'jquery';
import './NotesSection.css';
import Notes from './Notes';
import NoteForm from './NoteForm';

export default class NotesSection extends Component{
	newNote(){
		$(".modal-background.note-form").show();
	}
	render(){
		return(				
			<div className="notes-section">
				<div className="notes-heading">
					<div className="notes-heading-text">
						<h3>Notes:</h3>				
						<p><em>This is a great place to include any accessories you are incorporating or reminders about your form.</em></p>
					</div>
					<button className="new-note" onClick={()=>this.newNote()}>+</button>		
				</div>
				{this.props.notes.length>0 ? 
					<Notes notes={this.props.notes}/> :
					<p style={{"marginTop": "-10px"}}><em>This exercise has no notes yet.</em></p>
				}
				<NoteForm />
			</div>
		);
	}
}