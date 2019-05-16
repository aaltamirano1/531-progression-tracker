import React, {Component} from 'react';
import $ from 'jquery';
import './Faqs.css';

export default class Faqs extends Component{
	closeModal(){
        $(".modal-background.faqs").hide();
    }
	render(){
		return (
			<div className="modal-background faqs">  
	      <div className="modal">
	      	<div className="faqs-text">
	      		<p className="close-modal" onClick={()=>this.closeModal()}><i className="fas fa-times"></i></p>
		      	<p className="question"><em>What is ORM?</em></p>
		      	<p>This is your one rep maximum. It is the most weight you can lift in an exercise while maintaining controlled movement and proper form.</p>
		      	<p className="question"><em>Why should I use a 5/3/1 progression or program?</em></p>
		      	<p>It is a way many have found to efficiently increase the amount of weight they can lift and overcome their plateaus. There are many other progressions and programs that are also effective.</p>
		      	<p className="question"><em>Where can I find out more about 5/3/1 programs?</em></p>
		      	<p>The most detailed source of information would be Jim Wendler’s various books on 5/3/1. If you are looking for more summarized information, an internet search will yield many fitness websites and online fitness communities with plenty of information.</p>
	      	</div>
	      </div>
	     </div>
		);
	}

}