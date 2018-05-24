import React from 'react';

export const Footer = (props) => {
	return (
		<footer>
			<h4>Danny Márquez</h4>
			<ul>{props.navItems}</ul>
		</footer>
	);
};
