import React, { Fragment } from 'react'
import Navigation from '../Navigation/Navigation';
import { Container, Row, Card, Col } from 'react-bootstrap';

const frame = ({ handler, row, children, globalWrapper, clousureWrapper }) => (
    <div className={globalWrapper}>
        <Navigation handler={handler} />
        <div className={clousureWrapper}>
            <Container>
                {row ? <Row>
                    <Col>
                        <Card body className="my-5">
                            {children}
                        </Card>
                    </Col>
                </Row> : children}
            </Container>
        </div>
    </div>
);

export default frame;