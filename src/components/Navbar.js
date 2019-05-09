import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import{setAuthToken} from '../actions';
import {connect} from 'react-redux';
import './Navbar.css';

export class Navbar extends Component{
	setAuthToken(token){
		
		this.props.dispatch(setAuthToken(token));
	}
	render(){
		const path = this.props.history.location.pathname;
		let links = "";
		switch(path){
			case "/":
				links= (<li><Link target="_self" to="/sign-up">Sign Up</Link></li>);
				break;
			case "/sign-up":
				links= (<li><Link target="_self" to="/">Log In</Link></li>);
				break;
			default:
				links= [<li>FAQs</li>, <li onClick={()=>this.setAuthToken("")}>Log Out</li>];
		}

		return (
			<nav className="nav">
				<img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
				<ul>
					{links}				
				</ul>
			</nav>
		);
	}

}

export default connect()(withRouter(Navbar));