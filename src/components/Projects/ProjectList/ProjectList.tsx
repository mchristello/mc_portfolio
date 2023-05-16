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
                {myProjects.map((project) => {
                    return (
                        <ProjectItem key={project.id} project={project} />
                    )
                })}
            
            </article>
        </Container>
    )
}