import React, { Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faReact, faAws } from '@fortawesome/free-brands-svg-icons';
import Navigation from '../Navigation/Navigation';
import Centered from '../Layouts/Centered/Centered';
import Social from '../Social/Social';

const contact = props => (
    <Fragment>
        <Navigation handler={props.handler} />
        <Container>
            <Centered height='70vh'>
                <Card>
                    <Card.Body>
                        <Row className='align-items-center'>
                            <Col><Card.Img className="img-fluid" src="/img/elva.jpg" /></Col>
                            <Col>
                                <p className='lead'>Elvis</p>
                            </Col>
                            <Col>
                                <p className='lead'>Sabanovic</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Centered>
            <div className="mt-2">
                <Social />
            </div>
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
