import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'

class Video extends Component {

    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose = () => this.setState({show:false})
    modalOpen = () => this.setState({show:true})

    render() {
        return (
            <Fragment>

                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>VÍDEOS</h1>
                    <div className='bottom'></div>
                    <Row>
                        <Col lg={6} md={6} sm={12} className='videoText'>
                            <p className='serviceDescription text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quis, omnis! Consequatur laboriosam laborum culpa obcaecati
                                libero, fugit omnis. Doloribus consequatur deleniti rerum
                                earum temporibus! Repellat id alias dignissimos laboriosam
                                excepturi!.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quis, omnis! Consequatur laboriosam laborum culpa obcaecati
                                libero, fugit omnis. Doloribus consequatur deleniti rerum
                                earum temporibus! Repellat id alias dignissimos laboriosam
                                excepturi!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quis, omnis! Consequatur laboriosam laborum culpa obcaecati
                                libero, fugit omnis. Doloribus consequatur deleniti rerum
                                earum temporibus! Repellat id alias dignissimos laboriosam
                                excepturi!
                            </p>
                        </Col>

                        <Col lg={6} md={6} sm={12} className='videoCard'>
                            <FontAwesomeIcon onClick={this.modalOpen} className="iconProject" icon={faVideoSlash} />
                        </Col>
                    </Row>
                </Container>

                <Modal show={this.state.show} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>
                       
                    </Modal.Footer>
                </Modal>

            </Fragment>
        )
    }
}

export default Video