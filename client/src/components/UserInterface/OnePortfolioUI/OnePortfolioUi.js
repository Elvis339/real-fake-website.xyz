import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Aux from '../../hoc/Aux';
import Paragraph from '../Paragraph/Paragraph';
import Social from '../../Social/Social';
import { Container, Col } from 'react-bootstrap';

const onePortfolioUi = props => (
    <Aux>
        <Container className='text-center'>
            <div className='justify-content-center my-5'>
                <h1 className="text-center">{props.title}</h1> <br />
                <Col className="text-center">
                    Start date: {props.start_date} || 
                    End date: {props.end_date}
                </Col>
            </div>
            <Paragraph data={`Skills: ${props.skills}`} />
            <hr />
            <div className='my-4'>
                <Paragraph data={ReactHtmlParser(props.text)} />
            </div>
            <Social />
        </Container>
    </Aux>
);

export default onePortfolioUi;
