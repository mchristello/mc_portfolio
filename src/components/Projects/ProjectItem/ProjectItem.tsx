//CSS
import './ProjectItem.css';
// Utilities
import { useState } from 'react';
import { Projects } from '../../../utilities/types';
import { Button, Card, Carousel } from 'react-bootstrap';

export default function ProjectItem (prop: { project: Projects }) {
        
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Card className='projects'>
                {/* <Card.Img variant="top" src={prop.project.images[0]} /> */}
                <Carousel className='m-1 cardCarousel' activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={prop.project.images[0]}
                        alt="Home Screen"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={prop.project.images[1]}
                        alt="Account"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={prop.project.images[2]}
                        alt="Cart View"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={prop.project.images[3]}
                        alt="Product Detail"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={prop.project.images[4]}
                        alt="Login"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={prop.project.images[5]}
                        alt="Register"
                        />
                    </Carousel.Item>
                </Carousel>
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