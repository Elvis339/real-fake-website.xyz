import React from 'react'
import { Container, Row, Form, Button, Card } from 'react-bootstrap';

const login = props => (
    <Container>
        <div className="w-100" style={{ height: "100vh" }}>
            <Row className="mt-5 pt-5 justify-content-center">
                <Card style={{ width: "20em" }}>
                    <Card.Body style={{ width: "20em" }}>
                        <Form onSubmit={props.handleSubmit}>
                            <Form.Group controlId="formBasicText">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" required placeholder="Enter name" name="name" onChange={props.change} />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" required placeholder="Enter email" name="email" onChange={props.change} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required placeholder="Password" name="password" onChange={props.change} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    </Container>
)

export default login;