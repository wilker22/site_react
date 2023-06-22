import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pageone from '../../assets/image/page1.png';
import pagetwo from '../../assets/image/page2.png';
import pagethree from '../../assets/image/page3.png';
import imgone from '../../assets/image/19.png';
import imgtwo from '../../assets/image/20.png';
import imgthree from '../../assets/image/21.png';

class Welcome extends Component {
    render() {
        return (

            <Container className="text-center mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <img src={pageone} />
                        <h1 className="serviceName">Easy As it Gets </h1>
                        <p className="serviceDescription">Lorem ipsum dolor</p>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <img src={pagetwo} />
                        <h1 className="serviceName">Teach The way you want </h1>
                        <p className="serviceDescription">Lorem ipsum dolor</p>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                        <img src={pagethree} />
                        <h1 className="serviceName">The small matter  </h1>
                        <p className="serviceDescription">Lorem ipsum dolor</p>
                    </Col>
                </Row>


                {/* // Intro Footer Start  */}
                <Row className="intro-footer bg-base text-center mt-5">
                    <Col lg={4} md={6} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="sideImg" src={imgone} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify homeIntro">Development</h5>
                                <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                            </Col>
                        </Row>
                    </Col>


                    <Col lg={4} md={6} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="sideImg" src={imgtwo} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify homeIntro">Web Design</h5>
                                <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                            </Col>
                        </Row>
                    </Col>
  
                    <Col lg={4} md={6} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="sideImg" src={imgthree} />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify homeIntro">Ecommerce</h5>
                                <p className="text-justify serviceDescription">Lorem ipsum dolor</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Welcome