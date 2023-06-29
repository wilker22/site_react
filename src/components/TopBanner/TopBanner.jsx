import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

class TopBanner extends Component {

  componentDidMount() {
    

    // Faz uma requisição a um usuarío com um ID expecifico
    axios.get('http://127.0.0.1:8000/api/homepage/title')
      .then(function (response) {
        // manipula o sucesso da requisição
        console.log(response.data);
      })
      .catch(function (error) {
        // manipula erros da requisição
        console.error(error);
      })
  }


  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0" >
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <h1 className="topTitle">WTech Learning</h1>
                  <h4 className="topSubTitle">Cursos Tecnicos em Tecnologia da Informação</h4>
                  <Button variant="primary">Saiba mais...</Button>

                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    )
  }
}

export default TopBanner