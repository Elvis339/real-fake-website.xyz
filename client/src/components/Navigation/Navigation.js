import React from 'react';
import { Nav } from 'react-bootstrap'

const navigation = props => (
    <Nav justify defaultActiveKey="/">
        <Nav.Item>
            <Nav.Link onClick={props.handler} data-state="home">Terminal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={props.handler} data-state="about">About me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1" data-state="portfolio" onClick={props.handler}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2" data-state="contact" onClick={props.handler}>Contact</Nav.Link>
        </Nav.Item>
    </Nav> 
)

export default navigation;
