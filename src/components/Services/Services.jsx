import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../assets/image/design.png';
import ecommerceIcon from '../../assets/image/ecommerce.png';
import webIcon from '../../assets/image/web.png';


class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>NOSSOS SERVIÇOS</h1>
                    <div className='bottom'></div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center' >
                                <img className='designIcon' src={designIcon} alt="" />
                                <h2 className='serviceName'>Web Design</h2>
                                <p className='serviceDescription'>Web Design qualificado com poder de atrair clientes!</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='ecommerceIcon' src={ecommerceIcon} alt="" />
                                <h2 className='serviceName'>Ecommerce</h2>
                                <p className='serviceDescription'>Desenvolvimento de Loja Web com as melhores práticas!</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='webIcon' src={webIcon} alt="" />
                                <h2 className='serviceName'>Desenvolviento Web</h2>
                                <p className='serviceDescription'>Desenvolvemos suas aplicações para Web!</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Services