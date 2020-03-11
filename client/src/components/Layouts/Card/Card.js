import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './Card.css'

const card = props => {
    return (
        <Fragment>
            <Card className='Card mx-4 mt-5 mb-2'>
                <Card.Title className='text-center'>
                    {props.title}
                </Card.Title>
                <small>Start date: {props.start_date}</small><br />
                <small>End date: {props.end_date}</small><br />
                <small>Skills: <strong>{props.skills}</strong></small> <br />
                <Card.Body>
                    {props.body}
                </Card.Body>
                {props.uri ? <Link className='text-center btn btn-primary' target="_blank" to={`/portfolio/${props.uri}`}>Go</Link> : null}
            </Card>
        </Fragment>
    )
}

export default card;