//CSS
import './ProjectItem.css';
// Utilities
import { useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Projects } from '../../../interface/interfaces';

type Prop = {
    project: Projects
}

export default function ProjectItem ({ project } :Prop) {
        
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Card className='projects'>
                <Carousel className='m-1 cardCarousel' activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={project.images[0]}
                        alt="Home Screen"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={project.images[1]}
                        alt="Account"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={project.images[2]}
                        alt="Cart View"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={project.images[3]}
                        alt="Product Detail"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={project.images[4]}
                        alt="Login"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={project.images[5]}
                        alt="Register"
                        />
                    </Carousel.Item>
                </Carousel>
                <Card.Body className='cardBody'>
                    <Card.Title as='h2' className='cardTitle'>{project.title}</Card.Title>
                    <Card.Text className="mb-2 text-muted projectTechs">
                        {project.techs.map((tech) => {
                            return (
                                <Card.Subtitle className='singleTech' key={tech}> {tech} </Card.Subtitle>
                            )
                        })}
                    </Card.Text>
                    <Card.Text className='cardText'>
                        {project.description}
                    </Card.Text>
                    <Button className='cardBtn' as='a' href={project.deploy} target='_blank' variant="outline-info">Go To Deploy</Button>
                    <Button className='cardBtn' as='a' href={project.repository} target='_blank' variant="outline-warning">GitHub Repository</Button>

                </Card.Body>
            </Card>
        </>
    )
}