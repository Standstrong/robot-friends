import React from 'react';

import './card.styles.css';

/*   <img 
		  //alt = 'monster' 
		  //src = {'https://robohash.org/$(props.monster.id)?set=set2&size=180*180'} 
		  /*src = {'https://robohash.org/PC4.png/$98000?set=set2&size=180*180'}*/
		  /*src = {'https://robohash.org/PC4.png/${props.monster.id}?set=set2&size=180*180'}*/
		///> */


export const Card = props => (

	<div className = 'card-container'>	

		<img alt='robots' src={`https://robohash.org/${props.monster.id}?size=180x180`} />
		<h2> {props.monster.name} </h2>
		<p>{ props.monster.email }</p>
	</div>

);


