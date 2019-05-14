import React, {Component} from 'react';
import $ from 'jquery';
import './WeeklySchedule.css';
import {connect} from 'react-redux';
import {putExercise} from '../../actions';

export class WeeklySchedule extends Component{
	constructor(props) {
      super(props);
      this.onSelectWeek = this.onSelectWeek.bind(this);
  }
	updateExercise(week){
		this.props.dispatch(putExercise({week}, this.props.selected));
	}
	onSelectWeek(week){
    this.updateExercise(week);
	}
	render(){
		let orm = this.props.orm;
		if(this.props.units === "kg."){
			orm = this.props.orm * (1/2.2046);
		}
		const ninetyPercent = orm * 0.9;
		const units = this.props.units;
		
		return (
				<div className="weekly-schedule">
					<table>
					<tbody>
						<tr>
						<th className="table-panel" colSpan={4}>
						<div>
						<p>ORM: {Math.round(orm)}{units}</p>
						<a href="https://www.w3schools.com/howto/howto_css_switch.asp" target="_blank">Toggle Switch</a>
						</div>
						</th>
						</tr>
					  <tr onClick={e=>this.onSelectWeek(1)} className={this.props.week===1 ? "selected" : ""}>
					    <th>Week 1</th>
					    <td>5 x {Math.round(ninetyPercent*.65)} {units}</td>
					    <td>5 x {Math.round(ninetyPercent*.75)} {units}</td> 
					    <td>5+ x {Math.round(ninetyPercent*.85)} {units}</td>
					  </tr>
					  <tr onClick={e=>this.onSelectWeek(2)} className={this.props.week===2 ? "selected" : ""}>
					  	<th>Week 2</th> 
					    <td>3 x {Math.round(ninetyPercent*.7)} {units}</td>
					    <td>3 x {Math.round(ninetyPercent*.8)} {units}</td> 
					    <td>3+ x {Math.round(ninetyPercent*.9)} {units}</td>
					  </tr>
					  <tr onClick={e=>this.onSelectWeek(3)} className={this.props.week===3 ? "selected" : ""}>
					    <th>Week 3</th>
					    <td>5 x {Math.round(ninetyPercent*.75)} {units}</td> 
					    <td>3 x {Math.round(ninetyPercent*.85)} {units}</td>
					    <td>1+ x {Math.round(ninetyPercent*.95)} {units}</td>
					  </tr>
					  <tr onClick={e=>this.onSelectWeek(4)} className={this.props.week===4 ? "selected" : ""}>
					    <th>Week 4</th>
					    <td>5 x {Math.round(ninetyPercent*.4)} {units}</td> 
					    <td>5 x {Math.round(ninetyPercent*.5)} {units}</td>
					    <td>5 x {Math.round(ninetyPercent*.6)} {units}</td>
					  </tr>
					</tbody>
					</table>
				</div>
		);
	}
}

const mapStateToProps = state => ({
    units: state.units,
    selected: state.selectedExercise
});

export default connect(mapStateToProps)(WeeklySchedule);