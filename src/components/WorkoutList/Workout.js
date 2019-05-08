import React, {Component} from 'react';
import './Workout.css';

export default class Workout extends Component{
	render(){
		return (
			<li className="workout" onClick={()=>this.props.select()}>
				<div>
					<h3>{this.props.name}</h3>
					<p>ORM: {this.props.orm}</p>
				</div>
			</li>
		);
	}

}