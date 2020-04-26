import React from 'react';
import { Row } from 'react-bootstrap';

const centered = ({ children, height }) => (
    <Row className='justify-content-center align-items-center' style={{ height: `${height}` }}>
        {children}
    </Row>
);

export default centered;
