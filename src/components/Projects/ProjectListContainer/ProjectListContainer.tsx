// CSS 
import ProjectList from '../ProjectList/ProjectList';
import './ProjectListContainer.css'
// Utility
import { Container } from "react-bootstrap";


function ProjectListContainer () {


    return (
        <Container className='cardContainer'>
            <ProjectList />
        </Container>
    )
}


export default ProjectListContainer;