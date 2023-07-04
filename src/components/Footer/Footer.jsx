import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'

class Footer extends Component {

    constructor() {
        super();
        this.state = {
            address: "...",
            email: "...",
            phone: "...",
            facebook: "...",
            youtube: "...",
            twitter: "...",
            footer_credit: "..."
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.FooterData).then(result => {
            this.setState({
                address: result[0]['address'],
                email: result[0]['email'],
                phone: result[0]['phone'],
                facebook: result[0]['facebook'],
                youtube: result[0]['youtube'],
                twitter: result[0]['twitter'],
                footer_credit: result[0]['footer_credit']

            });
        })
    }




    render() {
        return (
            <Fragment>
                <Container fluid={true} className='footerSection'>
                    <Row>
                        <Col lg="3" md={6} sm={12} className="p-5 text-center">
                            <h2 className='footerName text-center'>Siga-nos</h2>

                            <div className='social-container'>
                                <a className="facebook social" href={this.state.facebook}>
                                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                                </a>

                                <a href={this.state.youtube} className="youtube social">
                                    <FontAwesomeIcon icon={faYoutube} size='2x' />
                                </a>

                                <a href={this.state.twitter} className="twitter social">
                                    <FontAwesomeIcon icon={faTwitter} size='2x' />
                                </a>
                            </div>

                        </Col>

                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Address </h2>
                            <p className="footerDescription">
                                {this.state.address} <br></br>
                                <FontAwesomeIcon icon={faEnvelope} /> Email : {this.state.email}<br></br>
                                <FontAwesomeIcon icon={faPhone} /> Phone : {this.state.phone}<br></br>
                            </p>
                        </Col>


                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Informações </h2>
                            <Link className="footerLink" to="/about">Sobre Nós </Link> <br></br>
                            <Link className="footerLink" to="/about">Nosso Perfil </Link> <br></br>
                            <Link className="footerLink" to="/contact">Contato   </Link> <br></br>
                        </Col>

                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Policy  </h2>
                            <Link className="footerLink" to="/refund">Refund Policy  </Link> <br></br>
                            <Link className="footerLink" to="/terms">Termos e Condições  </Link> <br></br>
                            <Link className="footerLink" to="/privacy">Política de Privacidade   </Link> <br></br>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                <a className="copyrightlink" href="#">{this.state.footer_credit}</a>
                </Container>
            </Fragment>
        )
    }
}

export default Footer