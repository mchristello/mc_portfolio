import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from 'react';
// CSS
import './Contact.css'


export default function Contact () {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event:any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    
        setValidated(true);
    };


    return (
        <Container id="contactMe" className="contact" as={"section"}>
            <h2><u>Do you wanna <span>get in touch</span> with me?</u></h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-5 contact_form">
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter your name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom03">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="example@email.com" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom04">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" type="text" placeholder="Type here..." required />
                            <Form.Control.Feedback type="invalid">
                                Please write me a message.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <div className="d-grid gap-2">
                        <Button variant="info" type="submit">
                            Send
                        </Button>
                    </div>
                </Form>
        </Container>
    )
}