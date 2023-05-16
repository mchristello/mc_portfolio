//CSS
import './ProjectItem.css';
// Utilities
import { Projects } from '../../../utilities/types';
import { Button, Card } from 'react-bootstrap';

export default function ProjectItem (prop: { project: Projects }) {
        
    return (
        <>
            <Card className='projects' style={{ width: '150rem' }}>
                <Card.Img variant="left" src="holder.js/100px180" />
                <Card.Body className='cardBody'>
                    <Card.Title as='h2' className='cardTitle'>{prop.project.title}</Card.Title>
                    <Card.Text className="mb-2 text-muted projectTechs">
                        {prop.project.techs.map((tech) => {
                            return (
                                <Card.Subtitle className='singleTech' key={tech}> {tech} </Card.Subtitle>
                            )
                        })}
                    </Card.Text>
                    <Card.Text className='cardText'>
                        {prop.project.description}
                    </Card.Text>
                    <Button className='cardBtn' as='a' href={prop.project.deploy} target='_blank' variant="outline-info">Go To Deploy</Button>
                    <Button className='cardBtn' as='a' href={prop.project.repository} target='_blank' variant="outline-warning">GitHub Repository</Button>

                </Card.Body>
            </Card>
        </>
    )
}