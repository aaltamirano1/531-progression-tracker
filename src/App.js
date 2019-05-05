import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Navbar from './Navbar';
import Form from './Form';
import WorkoutList from './WorkoutList';
import WorkoutDetails from './WorkoutDetails';

import './App.css';
import {addUser} from './actions';

export class App extends React.Component{
	addUser(username, password){
		this.props.dispatch(addUser(username, password));
	}
	render(){
	  return (
	  	<Router>
		    <div className="App">
		      <Navbar/>
		      <Route exact path="/" render={props=>(<Form 
		      	title="Login" 
		      	onAdd={(username, password) => this.addUser(username, password)}
		      />)} />
		      <Route exact path="/workout-list" component={WorkoutList} />
		      <Route exact path="/workout-list/1" component={WorkoutDetails} />
		    </div>
	    </Router>
	  );
	}
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps)(App);
