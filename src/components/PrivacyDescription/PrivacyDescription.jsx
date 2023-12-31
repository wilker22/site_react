import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class PrivacyDescription extends Component {

     constructor(){
          super();
          this.state = {
               privacydesc:"...."
          }
     }


     componentDidMount(){
          RestClient.GetRequest(AppUrl.Information).then(result => {
               this.setState({privacydesc:result[0]['privacy']})
          });
     }

     render() {
          return (
               <Fragment>
                    <Container className="mt-5">
                         <Row>
                              <Col lg={12} md={12} sm={12}>
                                   <h1 className="serviceName">Política de Privacidade</h1>
                                   <hr />
                                   <p className="serviceDescription">

                                             {this.state.privacydesc}                                        

                                   </p>

                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default PrivacyDescription