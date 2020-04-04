import React, { Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faReact, faAws } from '@fortawesome/free-brands-svg-icons';
import Navigation from '../Navigation/Navigation';
import Centered from '../Layouts/Centered/Centered';
import Social from '../Social/Social';
import './Contact.css';

const contact = props => (
    <Fragment>
        <Navigation handler={props.handler} />
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
                            <Social />
                        </Row>
                    </Card.Body>
                </Card>
            </Centered>
            <p className="lead text-center">Built with</p>
            <Row className="justify-content-center mb-3">
                Backend: <FontAwesomeIcon className="mx-3" icon={faNodeJs} size="lg" />
                Frontend: <FontAwesomeIcon className="mx-3" icon={faReact} size="lg" />
                Hosted on: <FontAwesomeIcon className="mx-3" icon={faAws} size="lg" />
            </Row>
        </Container>
    </Fragment>
)

export default contact;
