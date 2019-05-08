import React, {Component} from 'react';
import $ from 'jquery';
import './WeeklySchedule.css';

export default class WeeklySchedule extends Component{
	componentDidMount(){
		$("tbody").on("click", "tr", function(){
			if(!$(this).children().hasClass("table-panel")){
				$("tr").removeClass("selected");
				$(this).addClass("selected");
				//save week selected to state;
			}			
		});
		$(`#${this.props.week}`).addClass("selected");
	}
	render(){
		const ninetyPercent = this.props.orm * 0.9;
		return (
				<div className="weekly-schedule">
					<table>
					<tbody>
						<tr>
						<th className="table-panel" colSpan={4}>
						<div>
						<p>ORM: {this.props.orm}lbs.</p>
						<a href="https://www.w3schools.com/howto/howto_css_switch.asp" target="_blank">Toggle Switch</a>
						</div>
						</th>
						</tr>
					  <tr id="1">
					    <th>Week 1</th>
					    <td>5 x {Math.round(ninetyPercent*.65)} lbs.</td>
					    <td>5 x {Math.round(ninetyPercent*.75)} lbs.</td> 
					    <td>5+ x {Math.round(ninetyPercent*.85)} lbs.</td>
					  </tr>
					  <tr id="2">
					  	<th>Week 2</th> 
					    <td>3 x {Math.round(ninetyPercent*.7)} lbs.</td>
					    <td>3 x {Math.round(ninetyPercent*.8)} lbs.</td> 
					    <td>3+ x {Math.round(ninetyPercent*.9)} lbs.</td>
					  </tr>
					  <tr id="3">
					    <th>Week 3</th>
					    <td>5 x {Math.round(ninetyPercent*.75)} lbs.</td> 
					    <td>3 x {Math.round(ninetyPercent*.85)} lbs.</td>
					    <td>1+ x {Math.round(ninetyPercent*.95)} lbs.</td>
					  </tr>
					  <tr id="4">
					    <th>Week 4</th>
					    <td>5 x {Math.round(ninetyPercent*.4)} lbs.</td> 
					    <td>5 x {Math.round(ninetyPercent*.5)} lbs.</td>
					    <td>5 x {Math.round(ninetyPercent*.6)} lbs.</td>
					  </tr>
					</tbody>
					</table>
				</div>
		);
	}
}
