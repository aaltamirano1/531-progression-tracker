import React, {Component} from 'react';
//import './Notes.css';

export default class Note extends Component{
	constructor(props){
		super(props);
		this.state = {editing: false};
	}
	render(){
		return(				
			<li>
				<p>{this.props.content}</p>
				<div className="notes-buttons">
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</li>
		);
	}
}
