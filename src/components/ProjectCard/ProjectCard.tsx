import './ProjectCard.scss';

const ProjectCard = ({ project }: any) => {
	return (
		<div className="project-card">
			<div className="box-card">
				<img
					src={project.image}
					max-height={300}
					max-width={600}
					alt={project.name}
				/>
				<div className="card-content">
					<h3>{project.name}</h3>
					<p>{project.description}</p>
					<div className="tags">
						{project.tags.map((tag: string) => (
							<span key={tag} className={tag}>
								{tag}
							</span>
						))}
					</div>
					<div className="live">
						{project.source_code && (
							<a
								href={project.source_code}
								target="_blank"
								className="underline"
							>
								Source Code
							</a>
						)}
						<a href={project.demo} target="_blank" className="underline">
							Live Demo
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
