import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

class TopBanner extends Component {
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