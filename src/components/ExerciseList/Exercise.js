import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Exercise.css';

export class Exercise extends Component{
	render(){
		let orm = this.props.orm;
		if(this.props.units === "kg."){
			orm = this.props.orm * (1/2.2046);
		}

		return (
			<li className="exercise" onClick={()=>this.props.select()}>
				<div>
					<h3>{this.props.name}</h3>
					<p>ORM: {Math.round(orm)} {this.props.units}</p>
				</div>
			</li>
		);
	}

}

const mapStateToProps = state => ({
    units: state.units
});

export default connect(mapStateToProps)(Exercise);