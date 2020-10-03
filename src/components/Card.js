import React from 'react';

const Card = (props) => {

	const {id, name, email} = props;
	return (
		<div className="tc dib bg-light-green br3 ma2 pa3 grow shadow-5">
			<img alt="robotImage" src={`https://robohash.org/${id}?size=200x200`}/>
			<div>
				<h2 className="">{name}</h2>
				<h5>{email}</h5>
			</div>
		</div>
	)
}

export default Card;
