import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import $ from 'jquery';
import{setAuthToken} from '../actions';
import {connect} from 'react-redux';
import './Navbar.css';

export class Navbar extends Component{
	setAuthToken(token){		
		this.props.dispatch(setAuthToken(token));
	}
	showFaqs(){
		$(".modal-background.faqs").show();
	}
	render(){
		const path = this.props.history.location.pathname;
		let link = "";
		switch(path){
			case "/":
				link= (<li><Link target="_self" to="/sign-up">Sign Up</Link></li>);
				break;
			case "/sign-up":
				link= (<li><Link target="_self" to="/">Log In</Link></li>);
				break;
			default:
				link= ( <li onClick={()=>this.setAuthToken("")}>Log Out</li>);
		}

		return (
			<nav className="nav">
				<img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
				<ul>
					<li onClick={()=>this.showFaqs()}>FAQs</li>
					{link}				
				</ul>
			</nav>
		);
	}

}

export default connect()(withRouter(Navbar));