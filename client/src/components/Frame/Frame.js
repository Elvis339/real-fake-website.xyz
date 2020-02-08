import React from 'react'
import Aux from '../hoc/Aux';
import Navigation from '../Navigation/Navigation';
import { Container, Row, Card, Col } from 'react-bootstrap';

const frame = props => (
    <Aux>
        <Navigation handler={props.handler} />
        <Container>
            <Row>
                <Col>
                    <Card body className="my-5">
                        {props.children}
                    </Card>
                </Col>
            </Row>
        </Container>
    </Aux>
);

export default frame;