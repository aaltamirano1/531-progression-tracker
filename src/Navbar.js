import React, {Component} from 'react';
import './Navbar.css';

export default class Navbar extends Component{
	render(){
		return (
			<div className="nav">
				<h1>531 Progression Tracker</h1>
				<ul>
					<li>Login</li>
					<li>Sign Up</li>
				</ul>
			</div>
		);
	}

}