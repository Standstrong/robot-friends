import React from 'react';

import './search-box.style.css';

//use functional components if you know you dont need access to state , life cycle method
//react does one way data flow

export const SearchBox = ({placeholder, handleChange}) => (
	<input 
		className = 'search-box'
        type = 'search' 
        placeholder = {placeholder} 
        onChange = {handleChange}
    />

);


