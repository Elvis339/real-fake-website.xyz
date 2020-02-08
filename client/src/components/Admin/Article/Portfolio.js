import React from 'react';
import Aux from '../../hoc/Aux';
import { Form } from 'react-bootstrap';

const portfolio = props => (
    <Aux>
        <Form.Group controlId="short_description">
            <Form.Label>Short description</Form.Label>
            <Form.Control required name="short_description" onChange={props.change} type="text" />
        </Form.Group>
        <Form.Group controlId="dev_stack">
            <Form.Label>Dev Stack, separate by comma</Form.Label>
            <Form.Control required name="dev_stack" onChange={props.change} type="text" />
        </Form.Group>
        <Form.Group controlId="start_date">
            <Form.Label>Start date</Form.Label>
            <Form.Control required name="start_date" onChange={props.change} type="date" />
        </Form.Group>
        <Form.Group controlId="end_date">
            <Form.Label>End date</Form.Label>
            <Form.Control required name="end_date" onChange={props.change} type="date" />
        </Form.Group>
    </Aux>
)

export default portfolio;