import React, {Component} from 'react';
import './Form.css';

export default class Form extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const username = this.usernameInput.value.trim();
        const password = this.passwordInput.value.trim();
        if (username && password && this.props.onAdd) {
            this.props.onAdd(this.usernameInput.value, this.passwordInput.value);
        }
        this.usernameInput.value = '';
        this.passwordInput.value = '';
    }

	render(){
	    return (
          <div className="landing">
              <div className="landing-content">
              <p>I will be on vacation next week and there will be no video, just reminding everyone again.  Thanks for allowing me to show our process so far and how everything is going, I have gotten wonderful advice and reassurance from so many of you and I'm so so grateful</p>
              </div>
              <form onSubmit={this.onSubmit}>
                <h1>{this.props.title}</h1>
                <label for="username-input">Username:</label>
                <input type="text" name="username" id="username-input" required ref={input => this.usernameInput = input}/>
                <br/>
                <label for="password-input">Password:</label>
                <input type="password" name="password" id="password-input" required ref={input => this.passwordInput = input}/>
                <br/>
                <button type="submit">Submit</button>
              </form>
          </div>
		);
	}

}