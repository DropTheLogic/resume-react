import React from 'react';

export const Portfolio = (props) => {
	return (
		<section id={props.name} className={"container" + (props.selected != props.name ? ' hidden'  : '')}>
			<h2>Portfolio</h2>
			<div className="container">
				<div className="row">

					{props.data.map((project) =>
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
