import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './Navbar';
import Form from './Form';
import WorkoutList from './WorkoutList';
import './App.css';

function App() {
  return (
  	<Router>
	    <div className="App">
	      <Navbar/>
	      <Route exact path="/" render={props=>(<Form title="Login"/>)} />
	      <Route exact path="/workout-list" component={WorkoutList} />
	    </div>
    </Router>
  );
}

export default App;
