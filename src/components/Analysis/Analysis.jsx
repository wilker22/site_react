import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    
    componentDidMount(){
        RestClient.GetRequest(AppUrl.ChartData).then(result=>{
             this.setState({data:result});
             
        }) 
   }

    render() {
        var blue = "#051b35" 
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>TECNOLOGIAS UTILIZADAS</h1>
                    <div className='bottom'></div>
                    <Row>
                        <Col style={{ width: '100%', height: '300px' }} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="technology" />
                                    <Tooltip />
                                    <Bar dataKey="projects" fill={blue}>
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>

                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className='text-justify serveceDescription'>
                                Where does it come from?
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                                and going through the cites of the word in classical literature, discovered the undoubtable source.
                                <br /><br />Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                                ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. <br /><br />

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                                exact original form, accompanied by English versions from the 1914 translation by H. Rackham. <br /><br />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Analysis