import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './Navbar';
import Form from './Form';
import WorkoutList from './WorkoutList';
import WorkoutDetails from './WorkoutDetails';
import './App.css';

function App() {
  return (
  	<Router>
	    <div className="App">
	      <Navbar/>
	      <Route exact path="/" render={props=>(<Form title="Login"/>)} />
	      <Route exact path="/workout-list" component={WorkoutList} />
	      <Route exact path="/workout-list/1" component={WorkoutDetails} />
	    </div>
    </Router>
  );
}

export default App;
