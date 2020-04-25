import React from 'react';
import {Nav} from 'react-bootstrap'

const navigation = ({ handler }) => (
    <Nav variant="pills" className="justify-content-center">
        <Nav.Item>
            <Nav.Link className='navigation-item' onClick={handler} data-state="home">Terminal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className='navigation-item' onClick={handler} data-state="about">About me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className='navigation-item' onClick={handler} data-state="portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className='navigation-item' onClick={handler} data-state="contact">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className='navigation-item' href="/img/Elvis_Sabanovic_CV.pdf">
                View my CV
            </Nav.Link>
        </Nav.Item>
    </Nav>
);

export default navigation;
