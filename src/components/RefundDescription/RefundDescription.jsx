import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppUrl from '../../RestAPI/AppUrl';
import RestClient from '../../RestAPI/RestClient';

class RefundDescription extends Component {
    constructor(){
        super();
        this.state={ refunddesc: "...." }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.Information).then(result => {
            this.setState({refunddesc:result[0]['refund']});
        });
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceName">Data Protection Principles</h1>
                            <hr />
                            <p className="serviceDescription">
                                {this.state.refunddesc}
                            </p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>

        )
    }
}

export default RefundDescription