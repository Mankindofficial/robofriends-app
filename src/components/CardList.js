import React from 'react';
import Card from './Card';

const CardList = (props) => {
	const {robots} = props;
	
	return(	
		(robots.length > 0) ?
			robots.map(robot => {	
				const {id, name, email} = robot;
				return <Card key={id} id={id} name={name} email={email} />
			}) : <h1 className="mt5 f3">No result found</h1>
	)
}

export default CardList;