import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='footerSection'>
                    <Row>
                        <Col lg="3" md={6} sm={12} className="p-5 text-center">
                            <h2 className='footerName text-center'>Siga-nos</h2>

                            <div className='social-container'>
                                <a href="http://" className="facebook social">
                                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                                </a>

                                <a href="http://" className="youtube social">
                                    <FontAwesomeIcon icon={faYoutube} size='2x' />
                                </a>

                                <a href="http://" className="twitter social">
                                    <FontAwesomeIcon icon={faTwitter} size='2x' />
                                </a>
                            </div>

                        </Col>

                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName text-center">Address </h2>
                            <p className="footerDescription">
                                6522 Baltimore National Pike CatonsVille, Califonia USA <br></br>
                                <FontAwesomeIcon icon={faEnvelope} /> Email : Support@ele.com<br></br>
                                <FontAwesomeIcon icon={faPhone} /> Phone : 434343434<br></br>
                            </p>
                        </Col>


                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName text-center">Information </h2>
                        </Col>

                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName text-center">Policy  </h2>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Footer