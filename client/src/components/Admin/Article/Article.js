import React, { Fragment } from 'react';
import { Form, Alert } from 'react-bootstrap';

const article = props => (
    <Fragment>
        { props.status ? <Alert 
            variant='info'
            title={props.status.err}
        /> : null }

        <Form className="w-100 my-5" onSubmit={props.handleSubmit}>
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
            <Form.Group>
                {props.children}
            </Form.Group>
        </Form>
    </Fragment>
)

export default article;