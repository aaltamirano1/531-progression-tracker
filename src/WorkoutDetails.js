import React, {Component} from 'react';
import './WorkoutDetails.css';


export default class WorkoutDetails extends Component{
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
					  <tr>
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
				<ul className="notes">
					<li>
						<p>Keep your should-blades back. Push up with your traps and down through the floor with you feet.</p>
						<div className="notes-buttons">
							<button>Edit</button>
							<button>Move</button>
							<button>Delete</button>
						</div>
					</li>
				</ul>
			</div>
		);
	}

}