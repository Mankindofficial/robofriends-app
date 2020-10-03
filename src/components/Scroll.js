import React from 'react';

const Scroll = ({children}) => {
	return(
		<div style={{ overflowY:'scroll', height:'75vh', border:'2px solid black' }}>
			{children}
		</div>
	)
}

export default Scroll;
