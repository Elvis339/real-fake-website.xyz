import React, { Fragment } from 'react';
import Resource from '../../containers/Resource/Resource';
import PortfolioCard from './PortfolioCard';
import Navigation from '../Navigation/Navigation';

import { Container, Row } from 'react-bootstrap';
import Social from '../Social/Social';

const portfolio = props => (
    <Fragment>
        <Navigation handler={props.handler} />
        <Container>
            <Row className='justify-content-center'>
                <Resource
                    path="/api/v1/portfolios"
                    render={
                        data => {
                            return data.payload.map((val, index) => {
                                let abc = "";
                                val.dev_stack.forEach(skill => abc += skill)
                                return (
                                    <Fragment key={index}>
                                        <PortfolioCard
                                            title={val.title}
                                            start_date={val.start_date.slice(0, 10)}
                                            end_date={val.end_date.slice(0, 10)}
                                            body={val.short_description}
                                            skills={abc}
                                            uri={val._id}
                                        />
                                    </Fragment>
                                )
                            })
                        }
                    }
                />
            </Row>
            <Social />
        </Container>
    </Fragment>
);

export default portfolio;
