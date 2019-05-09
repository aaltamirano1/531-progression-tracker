import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Workout.css';

export class Workout extends Component{
	render(){
		return (
			<li className="workout" onClick={()=>this.props.select()}>
				<div>
					<h3>{this.props.name}</h3>
					<p>ORM: {this.props.orm} {this.props.units}</p>
				</div>
			</li>
		);
	}

}

const mapStateToProps = state => ({
    units: state.units
});

export default connect(mapStateToProps)(Workout);