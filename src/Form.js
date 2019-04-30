import React, {Component} from 'react';
import './Form.css';

export default class Form extends Component{
	render(){
		return (
      <form>
        <h1>{this.props.title}</h1>
        <label for="username-input">Username:</label>
        <input type="text" name="username" id="username-input" required />
        <br/>
        <label for="password-input">Password:</label>
        <input type="password" name="password" id="password-input" required />
        <br/>
        <button type="submit">Submit</button>
      </form>
		);
	}

}