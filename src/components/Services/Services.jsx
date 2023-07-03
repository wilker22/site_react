import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../assets/image/design.png';
import ecommerceIcon from '../../assets/image/ecommerce.png';
import webIcon from '../../assets/image/web.png';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';



class Services extends Component {

    constructor() {
        super();
        this.state = {
            myData: []
        }
    }


    componentDidMount() {
        RestClient.GetRequest(AppUrl.Services).then(result => {
            this.setState({ myData: result });
        })


    }


    render() {

        const MyList = this.state.myData;
        const MyView = MyList.map(MyList => {

            return <Col lg={4} md={6} sm={12}>
                <div className='serviceCard text-center' >
                    <img className='designIcon' src={MyList.service_logo} alt="" />
                    <h2 className='serviceName'>{MyList.service_name}</h2>
                    <p className='serviceDescription'>{MyList.service_description}</p>
                </div>
            </Col>


        })



        return (



            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>NOSSOS SERVIÇOS</h1>
                    <div className='bottom'></div>
                    <Row>
                       {MyView}

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Services