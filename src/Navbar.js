import React, {Component} from 'react';
import './Navbar.css';

export default class Navbar extends Component{
	render(){
		return (
			<div className="nav">
				<img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
				<ul>
					<li>Login</li>
					<li>Sign Up</li>
				</ul>
			</div>
		);
	}

}