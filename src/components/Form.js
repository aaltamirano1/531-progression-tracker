import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './Form.css';
import {setFormErrors} from '../actions';

export class Form extends Component{
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

  componentDidMount(){
      this.props.dispatch(setFormErrors(""));
  }

	render(){
        if(this.props.authToken){
            return <Redirect to="/exercise-list"/>;
        }
	    return (
          <div className="landing">
              <div className="landing-content">
              <p>This is a tool for people running a 5/3/1 progression on a lift or following a 5/3/1 program. Now you can stay on track without pulling out your calculator and taking notes!</p>
              <p style={{"textAlign": "center"}}>Happy lifting.</p>
              </div>
              <form onSubmit={this.onSubmit}>
                <h1>{this.props.title}</h1>
                <p className="error">{this.props.formErrors}</p>
                <label htmlFor="username-input">Username:</label>
                <input type="text" name="username" id="username-input" required ref={input => this.usernameInput = input}/>
                <br/>
                <label htmlFor="password-input">Password:</label>
                <input type="password" name="password" id="password-input" required ref={input => this.passwordInput = input}/>
                <br/>
                <button className="red-btn" type="submit">Submit</button>
              </form>
          </div>
		);
	}

}
const mapStateToProps = state => ({
    authToken: state.authToken,
    formErrors: state.formErrors
});

export default connect(mapStateToProps)(Form);