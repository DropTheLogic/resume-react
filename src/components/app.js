import React, { Component } from 'react';

import { Header } from './header';
import { Body } from './body';

const App = (props) => {
	return (
		<div id="app">
			<Header />
			<Body />
		</div>
	);
};

export default App;
