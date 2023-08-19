// CSS
import './ProjectList.css';
// Utility
import ProjectItem from '../ProjectItem/ProjectItem';
import myProjects from '../../../utilities/projects.ts';

export default function ProjectList() {

    return (
        <section>
            <article id='myProjects'>
                <h2 className='text-center'>Hi! I'm Matias, and these are <span>my projects</span>, so far.</h2>
                {myProjects.map((project) => {
                    return (
                        <ProjectItem key={project.id} project={project} />
                    )
                })}
            
            </article>
        </section>
    )
}