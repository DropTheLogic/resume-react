import React from 'react';

export const Nav = (props) => {
	return (
		<nav className={ props.isOpen || props.leaveNavOpen ? 'open' : 'closed'}>
			<ul>{props.navItems}</ul>
		</nav>
	);
};
