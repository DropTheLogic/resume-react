import React from 'react';

export const Nav = (props) => {
	return (
		<nav className={ props.isOpen || props.leaveNavOpen ? 'open' : 'hidden closed'}>
			<h1 className="text-center">Danny Márquez</h1>
			<ul>{props.navItems}</ul>
		</nav>
	);
};
