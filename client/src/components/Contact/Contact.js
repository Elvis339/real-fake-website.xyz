import React, { Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Centered from '../Layouts/Centered/Centered';
import './Contact.css';

const contact = ({ handler }) => (
    <Fragment>
        <Navigation handler={handler} />
        <Container>
            <Centered height='70vh'>
                <Card className='Contact-Card'>
                    <Card.Body className='Contact-Inner pt-4'>
                        <Row className='align-items-center'>
                            <Col><Card.Img className="img-fluid" src="/img/elva.jpg" /></Col>
                            <Col>
                                <p className='lead contact-paragraph'>Elvis</p>
                            </Col>
                            <Col>
                                <p className='lead contact-paragraph'>Sabanovic</p>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Row className='justify-content-center'>
                        <a className='mx-3' target="_blank" rel="noopener" href="https://github.com/Elvis339/">My GitHub account</a>
                        <a className='mx-3' target="_blank" rel="noopener" href="https://stackoverflow.com/users/10491778/elvis-s">StackOverflow</a>
                        <a className='mx-3' target="_blank" rel="noopener" href="https://www.linkedin.com/in/elvis-sabanovic/">LinkedIn</a>
                        <a className='mx-3' href="mailto:elvissabanovic3@gmail.com?subject=Contact from a website&body=I'll be happy to talk to you! :)">Mail</a>
                    </Row>
                </Card>
            </Centered>
        </Container>
    </Fragment>
)

export default contact;
