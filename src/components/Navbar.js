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
		let links = "";
		switch(path){
			case "/":
				links= 
				(<ul>
					<li onClick={()=>this.showFaqs()}>FAQs</li>
					<li><Link target="_self" to="/sign-up">Sign Up</Link></li>
					<li className="demo" onClick={()=>{this.props.onDemoLogin()}}>Demo</li>
				</ul>);
				break;
			case "/sign-up":
				links=
				(<ul>
					<li onClick={()=>this.showFaqs()}>FAQs</li>
					<li><Link target="_self" to="/">Log In</Link></li>
					<li className="demo" onClick={()=>{this.props.onDemoLogin()}}>Demo</li>
				</ul>);
				break;
			default:
				links= 
				(<ul>
					<li onClick={()=>this.showFaqs()}>FAQs</li>
					<li onClick={()=>this.setAuthToken("")}>Log Out</li>
				</ul>);
		}

		return (
			<nav className="nav">
				<img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
				{links}
			</nav>
		);
	}

}

export default connect()(withRouter(Navbar));