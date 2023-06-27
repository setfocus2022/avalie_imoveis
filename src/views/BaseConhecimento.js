import React, { useState, useEffect } from 'react';
import { Col, Card as BootstrapCard, Row, Container } from 'react-bootstrap';
import './styles.dashboard.scss';

const BaseConhecimento = () => {
  return (
    <>
      <Container fluid>        
        <Row>
          <Col>
            <BootstrapCard className="card-stats">
              <div className="iframe-container">
              <center><iframe width="560" height="315" src="https://www.youtube.com/embed/XmJXVXrYQyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>
              </div>
            </BootstrapCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BaseConhecimento;
