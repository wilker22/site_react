import React, { Component, Fragment } from 'react'

import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestAPI/RestClient'
import AppUrl from '../../RestAPI/AppUrl'


class ContactSec extends Component {

    constructor() {
        super();
        this.state = {
            address: "....",
            email: "....",
            phone: "...."
        }

    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.FooterData).then(result => {
            this.setState({
                address: result[0]['address'],
                email: result[0]['email'],
                phone: result[0]['phone'],
            });
        })
    }

    sendContact(){
        let name = document.getElementById("name").valeu;
        let email = document.getElementById("email").valeu;
        let message = document.getElementById("message").valeu;
       // alert(name+"/"+email+"/"+message);
        let jsonObject = {name:name, email:email, message:message}

        RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(jsonObject)).then(result => {
            alert(result);
        }).catch(error => {
            alert("Error");
        })
    }


    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Form>
                                <Form.Group  >
                                    <Form.Label>Nome: </Form.Label>
                                    <Form.Control id="name" type="text" placeholder="Enter Your Name" />
                                </Form.Group>

                                <Form.Group  >
                                    <Form.Label>E-mail: </Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Enter Your email" />
                                </Form.Group>

                                <Form.Group  >
                                    <Form.Label>Menssagem  </Form.Label>
                                    <Form.Control id="message" as="textarea" rows={3} />
                                </Form.Group>

                                <br /><br />

                                <Button onClick={this.sendContact} variant="primary">
                                    Enviar
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Relatar Agora</h1>
                            <p className="serviceDescription">
                                {this.state.address}<br></br>
                                <FontAwesomeIcon icon={faEnvelope} /> Email : {this.state.email}<br></br>
                                <FontAwesomeIcon icon={faPhone} /> Telefone : {this.state.phone}<br></br>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment >
        )
    }
}

export default ContactSec