// CSS
import './ProjectList.css';
// Utility
import { Container } from 'react-bootstrap';
import ProjectItem from '../ProjectItem/ProjectItem';
import myProjects from '../../../utilities/projects.ts';

export default function ProjectList() {

    return (
        <Container>
            <article id='myProjects'>
                <h2>Hi! I'm Matias, and these are my projects, so far.</h2>
                {myProjects.map((project) => {
                    return (
                        <ProjectItem key={project.id} project={project} />
                    )
                })}
            
            </article>
        </Container>
    )
}