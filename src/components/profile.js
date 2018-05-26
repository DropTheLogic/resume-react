import React from 'react';

export const Profile = (props) => {
	// Populate rows of profile info
	let rows = [];
	for (let listing in props.bio) {
		const data = props.bio[listing];
		let dataEl = data;
		if (typeof data === 'object') {
			dataEl = <a href={data.url} target="_blank">
					{data.name}</a>;
		}
		rows.push(
			<div key={rows.length} className="row">
				<div className="col-xs-3 text-right bio-prop">{listing}:</div>
				<div className="bio-listing">{dataEl}</div>
			</div>);
	}

	return (
		<section id={props.name}
			className={"container-fluid" + (props.selected != props.name ? ' hidden'  : '')}>

			<div className="row">
				<div className="profile-pic col-md-12"></div>
			</div>
			<div className="row">
				<div className="col-md-2"></div>
				<h2 className="col-md-8">Profile</h2>
				<div className="col-md-2"></div>
			</div>
			{rows}
		</section>
    );
};
