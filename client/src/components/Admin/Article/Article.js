import React from 'react';
import Aux from '../../hoc/Aux';
import Portfolio from './Portfolio';
import { Form, Button } from 'react-bootstrap';
import Alert from '../../UserInterface/Alerts/Alert';

const article = props => (
    <Aux>
        { props.status ? <Alert 
            variant='info'
            title={props.status.err}
            message={props.status.message}
        /> : null }

        <Form className="w-100" onSubmit={props.handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control required name="title" onChange={props.change} type="text" placeholder="Add title" />
            </Form.Group>
            <Form.Group controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" required name="type" onChange={props.change}>
                    <option disabled>Select type</option>
                    <option value="About">About</option>
                    <option value="Portfolio">Portfolio</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Add description</Form.Label>
                <Form.Control required name="description" onChange={props.change} as="textarea" rows="3" />
            </Form.Group>
            {props.type === "Portfolio" ? <Portfolio change={props.change} /> : null }
            <Button type="submit">{props.type || "About"}</Button>
        </Form>
    </Aux>
)

export default article;