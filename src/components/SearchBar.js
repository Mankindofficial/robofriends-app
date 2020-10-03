import React from 'react';

const SearchBar = ({update}) => {
	return(
		<div>
			<input 
			className="bg-light-blue pa3 mb3"
			type="search" 
			placeholder="search Robots"
			onChange={update}/>
		</div>
	);
}

export default SearchBar;
