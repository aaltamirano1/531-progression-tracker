import React, {Component} from 'react';
import './Workout.css';


export default class Workout extends Component{
	handleClick(e){
		e.currentTarget.style.marginBottom = "-2px";
		e.currentTarget.style.marginTop = "2px";
	}

	render(){
		return (
			<li className="workout" onClick={this.handleClick}>
				<div>
					<h3>{this.props.name}</h3>
					<p>ORM: {this.props.orm}</p>
				</div>
			</li>
		);
	}

}