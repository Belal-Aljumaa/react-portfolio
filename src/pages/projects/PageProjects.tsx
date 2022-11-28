import { ProjectCard } from '../../components/Index';
import projects  from '../../data/projects.json';
import './PageProjects.scss';


const PageProjects = () => {
  return (
    <div className='projects'>
      <h2>Some Of My Projects I've Built</h2>
      <div className="container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PageProjects;
