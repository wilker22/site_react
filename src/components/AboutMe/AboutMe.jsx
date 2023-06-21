import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../assets/image/face.png'
import { init } from 'ityped'

class AboutMe extends Component {


    componentDidMount(){
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Desenvolvedor Web!', 'Instrutor Online', 'Engenharia de Sistemas!']})
    }


    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">ABOUT ME</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="aboutMeImage">
                                <img className="aboutImg" src={face} />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="aboutMeBody">
                                <h2 className="aboutMeDetails">Olá, Me chamo</h2>
                                <h2 className="aboutMeTitle">Wilker Alves</h2>
                                <h3 className="aboutMeDetails">Habilidades: <span id="myElement"> </span> </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AboutMe