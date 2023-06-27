import React from 'react';
import { Col, Card as BootstrapCard, Row, Container } from 'react-bootstrap';
import './styles.dashboard.scss';

const BaseConhecimento = () => {
  return (
    <>
      <Container fluid>        
        <Row className="justify-content-center">
          <Col md={10}>
          <p><center>TESTE 123</center></p>
            <BootstrapCard className="card-stats">
              <div className="iframe-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
                <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/QCB01i2ze-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </BootstrapCard>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
          <p><center>TESTE 123</center></p>
            <BootstrapCard className="card-stats">
              <div className="iframe-container" style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
                <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} src="https://www.youtube.com/embed/QCB01i2ze-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </BootstrapCard>
          </Col>
        </Row>
      </Container>
    </>
    
  );
};

export default BaseConhecimento;
