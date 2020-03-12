import React from 'react';
import { faGithub, faLinkedin, faStackOverflow, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';


const social = () => (
    <Container>
        <Row className="justify-content-center my-3">
            <a target="_blank" rel="noopener" href="https://github.com/Elvis339/"><FontAwesomeIcon className="mx-3" icon={faGithub} size="lg" /></a>
            <a target="_blank" rel="noopener" href="https://stackoverflow.com/users/10491778/elvis-s"><FontAwesomeIcon className="mx-3" icon={faStackOverflow} size="lg" /></a>
            <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/elvis-sabanovic/"><FontAwesomeIcon className="mx-3" icon={faLinkedin} size="lg" /></a>
            <a href="mailto:elvissabanovic3@gmail.com?subject=Contact from a website&body=I'll be happy to talk to you! :)"><FontAwesomeIcon className="mx-3" icon={faGoogle} size="lg" /></a>
        </Row>
    </Container>
);

export default social;
