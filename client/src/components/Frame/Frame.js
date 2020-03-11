import React, { Fragment } from 'react'
import Navigation from '../Navigation/Navigation';
import { Container, Row, Card, Col } from 'react-bootstrap';

const frame = props => (
    <Fragment>
        <Navigation handler={props.handler} />
        <Container>
            {props.row ? <Row>
                <Col>
                    <Card body className="my-5">
                        {props.children}
                    </Card>
                </Col>
            </Row> : props.children}
        </Container>
    </Fragment>
);

export default frame;