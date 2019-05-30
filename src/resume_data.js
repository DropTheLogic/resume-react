export const navItems = ['Profile', 'Resume', 'Portfolio'];

export const bioData = {
	name: {name: 'Danny Márquez', faclass: 'fas fa-user'},
	phone: {name: '(917) 399-5264', faclass: 'fas fa-phone'},
	email: {name: 'DannyBrianMarquez@gmail.com', url: 'mailto:DannyBrianMarquez@gmail.com', faclass: 'fas fa-envelope'},
	website: {name: 'danny-marquez.com', url: 'https://www.danny-marquez.com', faclass: 'fas fa-home'},
	github: {name: 'DropTheLogic', url: 'https://github.com/DropTheLogic', faclass: 'fab fa-github'},
	codepen: {name: 'DropTheLogic', url: 'https://www.codepen.io/DropTheLogic', faclass: 'fab fa-codepen'},
	linkedin: {name: 'dannymarquez', url: 'https://www.linkedin.com/in/dannymarquez/', faclass: 'fab fa-linkedin'},
	twitter: {name: '@DropTheLogic', url: 'https://www.twitter.com/DropTheLogic', faclass: 'fab fa-twitter'}
};

export const resumeData = {
	Jobs: [
		{
			title: 'Full Stack Engineer Student',
			employer: 'Fullstack Academy of Code',
			dates: '2019',
			location: '5 Hanover Sq., New York City',
			description: [
				'Worked with teams and alone to deliver full stack applications under strict deadlines',
				'Peer-programed through critical points to insure healthy codebase',
				'Participated in code reviews to maintain focus and clarity within large projects'
				],
			url: 'https://www.fullstackacademy.com/software-engineering-immersive'
		},
		{
			title: 'Manager',
			employer: "Nick's Family-Style Restaurant and Pizzeria",
			dates: '2003-2019',
			location: '1814 2nd Ave, New York City',
			description: [
				'Oversaw and managed mid-size restaurant and staff of over 30 workers',
				'Measured inventory and ordered all restaurant dry-goods, food and alcohol based on sales',
				'Hired and retained crews of prep workers, cooks, cleaners and servers',
				'Administered technical support for all Micros POS sales terminals, server and software'
				],
			url: 'http://www.nicksnyc.com'
		},
		{
			title: 'Art Director',
			employer: 'Foul Magazine',
			dates: '2001-2002',
			location: '12 St Marks Place, New York City',
			description: [
				'Designed, laid-out and prepared all elements for a video-game/lifestyle print magazine',
				'Coordinated with staff to prepare design, art, editorial and advertising for print',
				'Worked under tight deadlines to push issues out on-time',
				'Delegated and managed art and design to subordinates as needed'
				],
			url: 'http://www.villagevoice.com/best-of/2008/arts-and-entertainment/best-video-game-magazine-6445513'
		}
	],
	'University Study': [
		{
			name: 'New York University',
			dates: '1997-2001',
			location: '1 Washington Place, New York City',
			department: 'Gallatin School of Individualized Study',
			degree: 'Bachelor of Arts',
			majors: ['Concentration: Technology in the Arts'],
			url: 'http://gallatin.nyu.edu/'
		}
	],
	'Online Courses': [
		{
			title: 'Software Engineering Immersive Bootcamp',
			date: '2019',
			school: 'Fullstack Academy of Code',
			url: 'https://www.fullstackacademy.com/software-engineering-immersive'
		},
		{
			title: 'Front-End Web Developer Nanodegree',
			date: '2015-2016',
			school: 'Udacity',
			url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		}
	],
	Skills: ['Javascript', 'Git/GitHub', 'React.js', 'HTML & CSS', 'Responsive Web Design', 'Redux', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'jQuery', 'Knockout.js', 'Google Maps API', 'Bootstrap', 'Wordpress', 'Graphic Design', 'Adobe Photoshop', 'Adobe Illustrator', 'Management']
};

export const portfolioData = [
	{
		title: 'Memory Match',
		caption: 'Multiplayer online tile matching game built using React.js, Firebase realtime database and Adorable Avatars API.',
		img: './images/danny-marquez-memory-screen.jpg',
		url: 'https://memory-match-app.web.app/'
	},
	{
		title: 'The Geber Girls',
		caption: 'Single page band website using vanilla Javascript, HTML5 and CSS.',
		img: './images/geber-screen-opt.png',
		url: 'https://www.gebergirls.com'
	},
	{
		title: 'Time Calculator (beta)',
		caption: 'Web app to aid in time-based arithmetic calculations. Built with React.js and LESS.',
		img: './images/danny-marquez-time-calculator-opt.png',
		url: 'https://codepen.io/DropTheLogic/full/WEzRPZ'
	},
	{
		title: 'Schedulizer (alpha)',
		caption: 'Spreadsheet inspired web app for scheduling employee work shifts. Built using Javascript and Knockout.js two-way binding.',
		img: './images/schedulizer-screenshot-opt.png',
		url: 'https://github.com/DropTheLogic/schedulizer'
	},
	{
		title: 'The Williamsburger',
		caption: 'Responsive web mapping app using Google Maps and Foursquare APIs to map a curated list of burger restaurants in Williamsburg.',
		img: './images/danny-marquez-williamsburger-screen.png',
		url: 'https://www.danny-marquez.com/williamsburger/'
	},
	{
		title: 'Bug Run! - OOP Javascript Game',
		caption: 'Simple arcade game made using Javascript and HTML5 canvas.',
		img: './images/danny-marquez-game-screen.png',
		url: 'https://danny-marquez.com/BugRun/'
	},
];
