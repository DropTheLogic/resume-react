import React, { Component } from 'react';

import { navItems, bioData, resumeData, portfolioData } from '../resume_data';

import { Nav } from './nav';
import { Profile } from './profile';
import { Resume } from './resume';
import { Portfolio } from './portfolio';
import { Footer } from './footer';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedSection : navItems[0],
			navIsOpen : false
		};

		this.handleDrawer = this.handleDrawer.bind(this);
		this.selectSection = this.selectSection.bind(this);

		this.navEls = navItems.map((navItem) =>
			<li key={navItem} role="button" onClick={this.selectSection}>{navItem}</li>);
	}

	selectSection(e) {
		e.preventDefault();
		this.setState({
			selectedSection : e.target.innerHTML,
			navIsOpen : false
		}, () => document.getElementsByClassName('panel-right')[0].scrollTop = 0);
	}

	handleDrawer(e) {
		e.preventDefault();
		this.setState({navIsOpen : this.state.navIsOpen ? false : true })
	}

	render() {
		let menuCls = 'menu-button' +
			(this.state.navIsOpen ? ' close-icon' : ' ham-icon');

		return (
			<main>

				<header>
					<h1 className="text-center">Danny Márquez</h1>
					<h4>Front End Web Developer</h4>
				</header>

				<div className={menuCls} role="button" onClick={this.handleDrawer}></div>

				<Nav isOpen={this.state.navIsOpen} navItems={this.navEls} />

				<div className="panels">
					<div className="panel-left">
						<div className="panel-image"></div>
					</div>

					<div className="panel-right">
						<Profile bio={bioData} name="Profile" selected={this.state.selectedSection} />
						<Resume resume={resumeData} name="Resume" selected={this.state.selectedSection} />
						<Portfolio data={portfolioData} name="Portfolio" selected={this.state.selectedSection} />
						<Footer navItems={this.navEls} bio={bioData}/>
					</div>
				</div>

			</main>
		);
	}
}
