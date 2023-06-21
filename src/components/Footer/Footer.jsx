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
                            <h2 className="footerName">Address </h2>
                            <p className="footerDescription">
                                Rua Lucas Roberto de Araújo, Petrolina PE <br></br>
                                <FontAwesomeIcon icon={faEnvelope} /> Email : wtech@wtech.com<br></br>
                                <FontAwesomeIcon icon={faPhone} /> Phone : 434343434<br></br>
                            </p>
                        </Col>


                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Informações </h2>
                            <a className="footerLink" href="#">Sobre Nós </a> <br></br>
                            <a className="footerLink" href="#">Perfil da Companhia </a> <br></br>
                            <a className="footerLink" href="#">Contato  </a> <br></br>
                        </Col>

                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Policy  </h2>
                            <a className="footerLink" href="#">Política de Reembolso  </a> <br></br>
                            <a className="footerLink" href="#">Termos e Condições  </a> <br></br>
                            <a className="footerLink" href="#">Política de Privaciade   </a> <br></br>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightlink" href="#">© Copyright 2016 by WTech Learning, todos os direitos reservados</a>
                </Container>
            </Fragment>
        )
    }
}

export default Footer