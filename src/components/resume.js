import React from 'react';

export const Resume = (props) => {
	let jobs = [];

	// Build Jobs section
	for (let i = 0; i < props.resume.Jobs.length; i++) {
		const job = props.resume.Jobs[i];
		// Get job description
		const descriptions = job.description.map((bullet) =>
			<li key={bullet}>{bullet}</li>);

		jobs.push(
			<div key={i}>
				<h4>{job.title}</h4>
				<div className="job-stats">
					<a
						href={job.url}
						target="_blank"
						rel="noreferrer noopener">
						<div>{job.employer}</div>
					</a>
					<div>{job.dates}</div>
					<div>{job.location}</div>
				</div>
				<ul>{descriptions}</ul>
			</div>
		);
	}

	// Build Education section
	let crs = props.resume['Online Courses'][0];
	let ed = props.resume['University Study'][0];
	let education = (
		<div>
			<h4>{crs.school}</h4>
			<div className="job-stats">
				<a
					href={crs.url}
					target="_blank"
					rel="noreferrer noopener">
					<div>{crs.title}</div>
				</a>
				<div>{crs.date}</div>
			</div>
			<h4>{ed.name}</h4>
			<div className="job-stats">
				<a
					href={ed.url}
					target="_blank"
					rel="noreferrer noopener">
					<div>{ed.department}</div>
				</a>
				<div>{ed.degree}</div>
				<div>{ed.majors[0]}</div>
				<div>{ed.dates}</div>
				<div>{ed.location}</div>
			</div>
		</div>
	);

	return (
		<section
			id={props.name}
			className={'container-fluid' +
				(props.selected !== props.name ? ' hidden' : '')}>
			<h2>Resume</h2>
			<div>
				<h3>Work Experience</h3>
				{jobs}
			</div>
			<div>
				<h3>Education</h3>
				{education}
			</div>
			<div>
				<h3>Skills</h3>
				<div className="job-stats">
				{props.resume['Skills'].map((skill) => <div key={skill}>{skill}</div>)}
				</div>
			</div>
		</section>
	);
};
