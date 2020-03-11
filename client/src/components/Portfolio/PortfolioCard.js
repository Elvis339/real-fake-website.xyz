import React, { Fragment } from 'react'
import { Row } from 'react-bootstrap'
import './PortfolioCard.css';

import Card from '../Layouts/Card/Card';

const portfolioCard = props => {
    return (
        <Fragment>
            <Row className='justify-content-center'>
                <Card
                    title={props.title}
                    start_date={props.start_date}
                    end_date={props.end_date}
                    skills={props.skills}
                    body={props.body}
                    uri={props.uri}
                />
            </Row>
        </Fragment>
    )
}

export default portfolioCard;