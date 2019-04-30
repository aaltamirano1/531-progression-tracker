import React, {Component} from 'react';
import './Workout.css';


export default class Workout extends Component{
	render(){
		return (
			<li className="workout">
				<h3>{this.props.name}</h3>
				<div className="buttons">
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</li>
		);
	}

}