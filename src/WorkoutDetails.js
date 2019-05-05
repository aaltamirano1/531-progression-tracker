import React, {Component} from 'react';

import $ from 'jquery';
import './WorkoutDetails.css';
import Notes from './Notes';

export default class WorkoutDetails extends Component{
	componentDidMount(){
		$("tbody").on("click", "tr", function(){
			if(!$(this).children().hasClass("table-panel")){
				$("tr").removeClass("selected");
				$(this).addClass("selected");
				//save week selected to state;
			}
			
		});

	}
	render(){
		return (
			<div className="workout-details">
				<div className="weekly-schedule">
					<table>
					<tbody>
						<tr>
						<th className="table-panel" colSpan={4}>
						<div>
						<p>ORM: 200lbs.</p>
						<a href="https://www.w3schools.com/howto/howto_css_switch.asp" target="_blank">Toggle Switch</a>
						</div>
						</th>
						</tr>
					  <tr className="selected">
					    <th>Week 1</th>
					    <td>3 x 99</td>
					    <td>3 x 99</td> 
					    <td>3+ x 99</td>
					  </tr>
					  <tr>
					  	<th>Week 2</th> 
					    <td>3 x 99</td>
					    <td>3 x 99</td> 
					    <td>3+ x 99</td>
					  </tr>
					  <tr>
					    <th>Week 3</th>
					    <td>3 x 99</td> 
					    <td>3 x 99</td>
					    <td>3+ x 99</td>
					  </tr>
					  <tr>
					    <th>Week 4</th>
					    <td>3 x 99</td> 
					    <td>3 x 99</td>
					    <td>3+ x 99</td>
					  </tr>
					</tbody>
					</table>
				</div>
				<Notes />
			</div>
		);
	}

}