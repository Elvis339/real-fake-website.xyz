import React, { Fragment } from 'react';
import Resource from '../../containers/Resource/Resource';
import PortfolioCard from './PortfolioCard';
import Spinner from '../UserInterface/Spinner/Spinner';
import Alert from '../UserInterface/Alerts/Alert';
import Navigation from '../Navigation/Navigation';

import { Container, Row } from 'react-bootstrap';
import Social from '../Social/Social';

const portfolio = props => (
    <Fragment>
        <Navigation handler={props.handler} />
        <Container>
            <Row>
                <Resource
                    path="/api/v1/articles?article=portfolio"
                    render={
                        data => {
                            if (data.error) {
                                return <Alert variant='danger' title='Ooops, something went wrong...' />
                            } else if (data.loading === true) {
                                return <Spinner animation='grow' size='lg' centered={true} />
                            } else if (typeof (data.payload.article) !== "undefined") {
                                return data.payload.article.map((val, index) => {
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
                    }
                />
            </Row>
            <Social />
        </Container>
    </Fragment>
);

export default portfolio;
