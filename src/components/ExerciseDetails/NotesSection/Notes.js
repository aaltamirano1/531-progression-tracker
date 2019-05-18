import React, {Component} from 'react';
import './Notes.css';
import Note from './Note';
const dragula = require('react-dragula');
const ReactDOM = require('react-dom');

export default class Notes extends Component{
	componentDidMount(){
		const container = ReactDOM.findDOMNode(this);
    dragula([container]);
	}
	render(){
		const notes = this.props.notes ? 
		this.props.notes.map(note=>(<Note content={note.content} noteId={note.id} />)) :
		"";

		return(				
			<ul className="notes">
				{notes}
			</ul>
		);
	}
}
