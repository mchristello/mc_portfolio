// CSS
import './ProjectList.css';
// Utility
import ProjectItem from '../ProjectItem/ProjectItem';
import myProjects from '../../../utilities/projects.ts';

export default function ProjectList() {

    return (
        <section id='myProjects'>
            <h2 className='text-center fs-1'>Let me show you what I've been working on...</h2>
            {myProjects.map((project) => {
                return (
                    <ProjectItem key={project.id} project={project} />
                )
            })}
        </section>
    )
}