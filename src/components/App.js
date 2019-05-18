import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Navbar from './Navbar';
import Form from './Form';
import ExerciseList from './ExerciseList/ExerciseList';
import ExerciseDetails from './ExerciseDetails/ExerciseDetails';
import Faqs from './Faqs';

import './App.css';
import {registerUser, getAuthToken, getUserId} from '../actions';

export class App extends React.Component{
	addUser(username, password){
		this.props.dispatch(registerUser(username, password));
	}
	getAuthToken(username, password){
		this.props.dispatch(getAuthToken(username, password));
		this.props.dispatch(getUserId(username));
	}

	render(){
	  return (
	  	<Router>
		    <div className="App">
		      <Navbar/>
		      <Route exact path="/sign-up" render={props=>(<Form 
		      	title="Sign Up" 
		      	onAdd={(username, password) => this.addUser(username, password)}
		      />)} />
		      <Route exact path="/" render={props=>(<Form 
		      	title="Login" 
		      	onAdd={(username, password) => this.getAuthToken(username, password)}
		      />)} />
		      <Route exact path="/exercise-list" component={ExerciseList} />
		      <Route exact path="/exercise-details" component={ExerciseDetails} />
		      <Faqs />
		    </div>
	    </Router>
	  );
	}
}

const mapStateToProps = state => ({
    authToken: state.authToken
});

export default connect(mapStateToProps)(App);
