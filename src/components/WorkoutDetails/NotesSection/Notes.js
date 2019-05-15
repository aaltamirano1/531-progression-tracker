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
		return(				
			<ul className="notes">
				<li>
					<p>Keep your should-blades back. Push up with your traps and down through the floor with you feet.</p>
					<div className="notes-buttons">
						<button>Edit</button>
						<button>Delete</button>
					</div>
				</li>
				<li>
					<p>Your stance should be wide enough to keep you knees above you ankles.</p>
					<div className="notes-buttons">
						<button>Edit</button>
						<button>Delete</button>
					</div>
				</li>
			</ul>
		);
	}
}
