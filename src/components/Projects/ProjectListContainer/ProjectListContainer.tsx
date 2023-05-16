// CSS 
import ProjectList from '../ProjectList/ProjectList';
import './ProjectListContainer.css'
// Utility
import { Container } from "react-bootstrap";


function ProjectListContainer (prop: {greeting: string}) {


    return (
        <Container className='cardContainer'>
            <h1 className="title">{prop.greeting}</h1>
            <ProjectList />
        </Container>
    )
}


export default ProjectListContainer;