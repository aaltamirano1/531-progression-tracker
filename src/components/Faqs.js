import React, {Component} from 'react';
import $ from 'jquery';
import './Faqs.css';

export default class Faqs extends Component{
	closeModal(){
        $(".modal-background.faqs").hide();
    }
	render(){
		console.log("FAQs");
		return (
			<div className="modal-background faqs">  
	      <div className="modal">
	      	<div className="faqs-text">
	      		<p className="close-modal" onClick={()=>this.closeModal()}><i className="fas fa-times"></i></p>
		      	<p><em>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition?</em></p>
		      	<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
		      	<p><em>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</em></p>
		      	<p>Leverage agile frameworks to provide a robust synopsis for high level overviews?</p>
		      	<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
	      	</div>
	      </div>
	     </div>
		);
	}

}