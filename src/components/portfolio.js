import React from 'react';

export const Portfolio = (props) => {
	return (
		<section
			id={props.name}
			className={'container-fluid' +
				(props.selected !== props.name ? ' hidden' : '')}>
			<h2>Portfolio</h2>
			<div className="portfolio-grid">

				{props.data.map((project) => (
					<div key={project.title}>
						<a
							href={project.url}
							target="_blank"
							rel="noreferrer noopener">
							<h4>{project.title}</h4>
						</a>
						<figure>
							<a
								href={project.url}
								target="_blank"
								rel="noreferrer noopener">
								<div className="img-container">
									<img src={project.img} />
								</div>
							</a>
							<figcaption>{project.caption}</figcaption>
						</figure>
					</div>
				))}

			</div>
		</section>
	);
};
