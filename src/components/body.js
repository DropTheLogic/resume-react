import React, { Component } from 'react';

import { navItems, bioData, resumeData, portfolioData } from '../resume_data';

import { Nav } from './nav';
import { Profile } from './profile';
import { Resume } from './resume';
import { Portfolio } from './portfolio';
import { Footer } from './footer';

export class Body extends React.Component {
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

		// Initial check for window size
		this.updateWindowSize();
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
		}, () => document.scrollingElement.scrollTop = 0);
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
				<div className={menuCls} role="button" onClick={this.handleDrawer}></div>

				<div>
					<Profile bio={bioData} name="Profile" selected={this.state.selectedSection} />
					<Resume resume={resumeData} name="Resume" selected={this.state.selectedSection} />
					<Portfolio data={portfolioData} name="Portfolio" selected={this.state.selectedSection} />
				</div>

				<Footer navItems={this.navEls}/>
			</main>
		);
	}
}
