import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import{setAuthToken} from './actions';
import {connect} from 'react-redux';
import './Navbar.css';

export class Navbar extends Component{
	setAuthToken(token){
		this.props.dispatch(setAuthToken(token));
	}
	render(){
		const path = this.props.history.location.pathname;
		let links = "";
		if(path==="/"){
			links= (<li><Link target="_self" to="/sign-up">Sign Up</Link></li>);
		}else if(path==="/sign-up"){
			links= (<li><Link target="_self" to="/">Log In</Link></li>);
		}else{
			links= [<li>New</li>,<li>FAQs</li>,<li onClick={()=>this.setAuthToken("")}>Log Out</li>];
		}

		return (
			<div className="nav">
				<img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
				<ul>
					{links}				
				</ul>
			</div>
		);
	}

}

export default connect()(withRouter(Navbar));