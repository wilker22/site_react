import React, { Component } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';


class Courses extends Component {

    constructor() {
        super();
        this.state = {
            myData: []
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseHome).then(result => {
            this.setState({ myData: result });
        })
    }

    render() {
        const MyList = this.state.myData;
        const MyView = MyList.map(MyList => {

            return <Col lg={6} md={12} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-2" >
                                <img className="courseImg" src={MyList.small_img} />
                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify serviceName">{MyList.short_title}  </h5>
                                <p className="text-justify serviceDescription">{MyList.short_description}</p>
                                <Link className="courseViewMore float-left" to="/coursedetails" >Leia mais...</Link>
                            </Col>
                        </Row>
                    </Col>
        })

        return (
            
                <Container className="text-center">
                    <h1 className="serviceMainTitle">CURSOS</h1>
                    <div className="bottom"></div>
                    <Row>
                        {MyView}
                    </Row>
                </Container >
            
        )
    }
}

export default Courses