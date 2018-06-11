import React from 'react';

export const Nav = (props) => {
	return (
		<div className="nav-container">
			<nav className={ props.isOpen ? 'open' : 'closed'}>
				<ul>{props.navItems}</ul>
			</nav>
		</div>
	);
};
