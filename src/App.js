import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Navbar from './Navbar';
import Form from './Form';
import WorkoutList from './WorkoutList';
import WorkoutDetails from './WorkoutDetails';

import './App.css';
import {addUser, getAuthToken} from './actions';

export class App extends React.Component{
	addUser(username, password){
		this.props.dispatch(addUser(username, password));
	}
	getAuthToken(username, password){
		this.props.dispatch(getAuthToken(username, password));
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
		      <Route exact path="/workout-list" component={WorkoutList} />
		      <Route exact path="/workout-list/1" component={WorkoutDetails} />
		    </div>
	    </Router>
	  );
	}
}

const mapStateToProps = state => ({
    authToken: state.authToken
});

export default connect(mapStateToProps)(App);
