import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Social from '../../Social/Social';
import { Container, Col } from 'react-bootstrap';

const portfolioLayoutView = props => (
    <Fragment>
        <Container className='text-center'>
            <div className='justify-content-center my-5'>
                <h1 className="text-center">{props.title}</h1> <br />
                <Col className="text-center">
                    Start date: {props.start_date} ||
                    End date: {props.end_date}
                </Col>
            </div>
            <p className='lead'>Skills: {props.skills}</p>
            <hr />
            <div className='my-4'>
                { ReactHtmlParser(props.text) }
            </div>
            <Social />
        </Container>
    </Fragment>
);

export default portfolioLayoutView;
