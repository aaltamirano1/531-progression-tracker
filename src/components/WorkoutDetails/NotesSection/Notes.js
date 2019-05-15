import React, {Component} from 'react';
import './Notes.css';
const dragula = require('react-dragula');
const ReactDOM = require('react-dom');


export default class Notes extends Component{
	componentDidMount(){
		const container = ReactDOM.findDOMNode(this);
    dragula([container]);
	}
	render(){
		const notes = this.props.notes ? 
		this.props.notes.map(note=>(
			<li>
				<p>{note.content}</p>
				<div className="notes-buttons">
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</li>
		)) :
		"";

		return(				
			<ul className="notes">
				{notes}
			</ul>
		);
	}
}
