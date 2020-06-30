import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faStackOverflow, faLinkedin, faApple } from '@fortawesome/free-brands-svg-icons';

import { Container, Row, Col, Card } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Centered from '../Layouts/Centered/Centered';
import './Contact.css';

const contact = ({ handler }) => (
    <>
        <Navigation handler={handler} />
        <Container>
            <Centered height='60vh'>
                <Card className='Contact-Card'>
                    <Card.Body className='Contact-Inner pt-4'>
                        <Row className='align-items-center'>
                            <Col><Card.Img className="img-fluid" src="/img/elva.jpg" /></Col>
                            <Col>
                                <p className='lead contact-paragraph'>Elvis</p>
                                <a className='mr-3' target="_blank" rel="noopener" href="https://github.com/Elvis339/">
                                    <FontAwesomeIcon icon={faGithub} size={'lg'} />
                                </a>
                                <a className='ml-3' target="_blank" rel="noopener" href="https://stackoverflow.com/users/10491778/elvis-s">
                                    <FontAwesomeIcon icon={faStackOverflow} size={'lg'} />
                                </a>
                            </Col>
                            <Col>
                                <p className='lead contact-paragraph'>Sabanovic</p>
                                <a className='mr-3' target="_blank" rel="noopener" href="https://www.linkedin.com/in/elvis-sabanovic/">
                                    <FontAwesomeIcon icon={faLinkedin} size={'lg'} />
                                </a>
                                <a className='ml-3' href="mailto:elvissabanovic3@gmail.com?subject=Contact from a website&body=I'll be happy to talk to you! :)">
                                    <FontAwesomeIcon icon={faApple} size={'lg'} />
                                </a>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Centered>
        </Container>
    </>
)

export default contact;
