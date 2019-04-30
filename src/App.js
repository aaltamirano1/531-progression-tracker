import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import WorkoutList from './WorkoutList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WorkoutList />
    </div>
  );
}

export default App;
