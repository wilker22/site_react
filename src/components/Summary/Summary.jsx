import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid="true" className='summaryBanner p-0' >
                    <div className="summaryBannerOverlay">
                        <Container>
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row>
                                        <Col>
                                            <h1>1</h1>
                                        </Col>
                                        <Col>
                                            <h1>2</h1>
                                        </Col>
                                        <Col>
                                            <h1>3</h1>
                                        </Col>

                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <h1>4  </h1>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </Container>
            </Fragment>
        )
    }
}

export default Summary