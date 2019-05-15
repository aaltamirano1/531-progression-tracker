import React, {Component} from 'react';
import './NotesSection.css';
import Notes from './Notes';

export default class NotesSection extends Component{
	render(){
		return(				
			<div className="notes-section">
			<div className="notes-heading">
				<div className="notes-heading-text">
					<h3>Notes:</h3>				
					<p><em>This is a great place to include any accessories you are incorporating or reminders about your form.</em></p>
				</div>
				<button className="new-note">+</button>		
			</div>
				<Notes />
			</div>
		);
	}
}