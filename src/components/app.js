import React, { Component } from 'react';
import { bioData, resumeData, portfolioData } from '../resume_data';

const navItems = ['Profile', 'Resume', 'Portfolio'];

const Nav = (props) => {
	return (
		<nav className={ props.isOpen || props.leaveNavOpen ? 'open' : 'hidden closed'}>
			<h1 className="text-center">Danny Márquez</h1>
			<ul>{props.navItems}</ul>
		</nav>
	);
};

const Header = (props) => {
	return (
		<header>
			<h1 className="text-center">Danny Márquez</h1>
			<h4>Front End Web Developer</h4>
		</header>
	);
};

const Profile = (props) => {
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
			className={"container" + (props.selected != props.name ? ' hidden'  : '')}>

			<div className="row">
				<div className="col-md-2"></div>
				<div className="profile-pic col-md-8"></div>
				<div className="col-md-2"></div>
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

const Resume = (props) => {
	let jobs = [];

	// Build Jobs section
	for (let i = 0; i < props.resume.Jobs.length; i++) {
		const job = props.resume.Jobs[i];
		// Get job description
		const descriptions = job.description.map((bullet) =>
			<li key={bullet}>{bullet}</li>
		);

		jobs.push(
			<div key={i}>
				<h4>{job.title}</h4>
				<div className="job-stats">
					<a href={job.url} target="_blank">
						<div>{job.employer}</div></a>
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
				<a href={crs.url} target="_blank">
					<div>{crs.title}</div></a>
				<div>{crs.date}</div>
			</div>
			<h4>{ed.name}</h4>
			<div className="job-stats">
				<a href={ed.url} target="_blank">
					<div>{ed.department}</div></a>
				<div>{ed.degree}</div>
				<div>{ed.majors[0]}</div>
				<div>{ed.dates}</div>
				<div>{ed.location}</div>
			</div>
		</div>
	);

	return (
		<section id={props.name}
			className={"container" + (props.selected != props.name ? ' hidden'  : '')}>
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

const Portfolio = (props) => {
	return (
		<section id={props.name} className={"container" + (props.selected != props.name ? ' hidden'  : '')}>
			<h2>Portfolio</h2>
			<div className="container">
				<div className="row">

					{portfolioData.map((project) =>
						<div className="col-sm-6 col-lg-4" key={project.title}>
							<a href={project.url} target="_blank">
								<h4>{project.title}</h4></a>
							<figure>
								<a href={project.url} target="_blank">
									<div  className="img-container">
										<img src={project.img} />
									</div>
								</a>
								<figcaption>{project.caption}</figcaption>
							</figure>
						</div>
					)}


				</div>
			</div>
		</section>
	);
};

class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedSection : navItems[0],
			leaveNavOpen : false,
			navIsOpen : false
		};

		this.handleDrawer = this.handleDrawer.bind(this);
		this.selectSection = this.selectSection.bind(this);

		this.windowBreak = 600;
		this.navEls = navItems.map((navItem) =>
			<li key={navItem} onClick={this.selectSection}>{navItem}</li>);
	}

	componentDidMount() {
		// Add listener for screen width on resize
		window.addEventListener('resize', this.updateWindowSize.bind(this));
	}

	componentWillUnmount() {
		// Remove window resize listener
		window.removeEventListener('resize', this.updateWindowSize.bind(this));
	}

	updateWindowSize() {
		this.setState({
			leaveNavOpen :
				window.innerWidth >= this.windowBreak});
	}

	selectSection(e) {
		e.preventDefault();
		this.setState({
			selectedSection : e.target.innerHTML,
			navIsOpen : false
		}, () => document.body.scrollTop = 0);
	}

	handleDrawer(e) {
		e.preventDefault();
		this.setState({navIsOpen : this.state.navIsOpen ? false : true })
	}

	render() {
		let menuCls = 'menu-button' +
			(this.state.navIsOpen ? ' close-icon' : ' ham-icon') +
			(this.state.leaveNavOpen ? ' hidden' : '');

		return (
			<main>
				<Nav
					isOpen={this.state.navIsOpen}
					leaveNavOpen={this.state.leaveNavOpen}
					navItems={this.navEls}/>
				<div className={menuCls} onClick={this.handleDrawer}></div>

				<div>
					<Profile bio={bioData} name="Profile" selected={this.state.selectedSection} />
					<Resume resume={resumeData} name="Resume" selected={this.state.selectedSection} />
					<Portfolio name="Portfolio" selected={this.state.selectedSection} />
				</div>

				<Footer navItems={this.navEls}/>
			</main>
		);
	}
}

const Footer = (props) => {
	return (
		<footer>
			<h4>Danny Márquez</h4>
			<ul>{props.navItems}</ul>
		</footer>
	);
};

const App = (props) => {
	return (
		<div id="app">
			<Header />
			<Body />
		</div>
	);
};

export default App;
