import React from 'react';
import { coverBlurb } from '../cover_blurb';

// Import cover blurb, split by newline
// TODO: have this import directly from .txt file
let blurb = coverBlurb.split('/n');

export const Profile = (props) => {
	// Populate rows of bio-stat elements
	let rows = [];
	for (let listing in props.bio) {
		const data = props.bio[listing];
		let dataEl = data;
		if (data.hasOwnProperty('url')) {
			dataEl = <a href={data.url} target="_blank">
					{data.name}</a>;
		}
		else dataEl = data.name;

		rows.push(
			<div key={rows.length}>
				<div className="bio-prop"><i className={data.faclass}></i>{listing}:</div>
				<div className="bio-listing">{dataEl}</div>
			</div>);
	}

	return (
		<section
			id={props.name}
			className={'container-fluid' +
				(props.selected !== props.name ? ' hidden'  : '')}>

			<div className="profile-pic row" />

			<h2>Profile</h2>

			<div className="about-me row">
				<h4 className="col-xs-3" >About me</h4>
				<div className="col-xs-9 cover-blurb">
					{blurb.map(p => (<p key="p">{p}</p>))}
				</div>
			</div>

			<div className="at-a-glance row">
				<h4 className="col-xs-3">At a glance</h4>
				<div className="bio-stats col-xs-9">{rows}</div>
			</div>

		</section>
    );
};
