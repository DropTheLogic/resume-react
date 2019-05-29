import React from 'react';

export const Footer = (props) => {
	// Icons to allow. Must be both valid for Font Awesome class names
	// as well as object property names from given bioData props
	const iconNames = ['codepen', 'github', 'linkedin', 'twitter'];
	const iconEls = [];

	// Iterate through bio data for allowed icons, add element to iconEls array
	Object.keys(props.bio).forEach(prop => {
		if (iconNames.indexOf(prop) >= 0) {
			let cls = `fab fa-${prop}`; // Font Awesome icon class
			iconEls.push(
				<span key={prop} className="bio-icon">
					<a
						href={props.bio[prop].url}
						aria-label={prop}
						rel="noreferrer noopener"
						target="_blank">
						<i className={cls} />
					</a>
				</span>
			);
		}
	});

	return (
		<footer>
			<ul>{props.navItems}</ul>
			<div className="bio-icon-list">{iconEls}</div>
			<div>© 2018 Danny Márquez. All rights reserved.</div>
		</footer>
	);
};
