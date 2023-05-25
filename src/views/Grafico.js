import React, { useState, useEffect } from 'react';
import { Col, Card as BootstrapCard, Row, Container } from 'react-bootstrap';
import './styles.dashboard.scss';

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    handleOpenClick('verGraficos');
  }, []);

  const handleOpenClick = (contentType) => {
    setIsExpanded(!isExpanded);

    // Define o conteúdo da coluna expandida com base no tipo de conteúdo
    switch (contentType) {
      case 'verGraficos':
        setContent(
          <div>
            <center>
              <iframe
                title="Graficos"
                width="900"
                height="536"
                src="https://app.powerbi.com/view?r=eyJrIjoiNDg2NzAxYzUtMzhhOC00OWQ5LWE4ZDUtOTRlNTA0YmFlYWE4IiwidCI6ImMxNTk2NDVkLTM3ZjUtNDg5Ny1hNTQ5LTNhZDIzMDkyZTdjNyJ9"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </center>
            <p>Conteúdo específico para Ver Gráficos</p>
          </div>
        );
        break;
      default:
        setContent(null);
        break;
    }
  };

  const handleCloseClick = () => {
    setIsExpanded(false);
    setContent(null);
  };

  return (
    <>
      <Container fluid>
        <Row>
        <Col lg="2" sm="2" className="text-center">
          <BootstrapCard className="card-stats">
            <BootstrapCard.Body>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://imgur.com/50PTOzr.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px' }}>
                  Graficos
                </BootstrapCard.Title>
              </div>
            </BootstrapCard.Body>
            <BootstrapCard.Footer>
              <hr />
              <div className="stats">
                {isExpanded ? (
                  <button className="btn btn-link" onClick={handleCloseClick}>
                    <span className="ml-1">Fechar</span>
                  </button>
                ) : (
                  <button className="btn btn-link" onClick={() => handleOpenClick('verGraficos')}>
                    <span className="ml-1">Abrir</span>
                  </button>
                )}
              </div>
            </BootstrapCard.Footer>
          </BootstrapCard>
        </Col>

        <Col lg="2" sm="2" className="text-center">
          <BootstrapCard className="card-stats">
            <BootstrapCard.Body>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://imgur.com/50PTOzr.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px' }}>
                  Graficos
                </BootstrapCard.Title>
              </div>
            </BootstrapCard.Body>
            <BootstrapCard.Footer>
              <hr />
              <div className="stats">
                {isExpanded ? (
                  <button className="btn btn-link" onClick={handleCloseClick}>
                    <span className="ml-1">Fechar</span>
                  </button>
                ) : (
                  <button className="btn btn-link" onClick={() => handleOpenClick('verGraficos')}>
                    <span className="ml-1">Abrir</span>
                  </button>
                )}
              </div>
            </BootstrapCard.Footer>
          </BootstrapCard>
        </Col>

        <Col lg="2" sm="2" className="text-center">
          <BootstrapCard className="card-stats">
            <BootstrapCard.Body>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://imgur.com/50PTOzr.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px' }}>
                  Graficos
                </BootstrapCard.Title>
              </div>
            </BootstrapCard.Body>
            <BootstrapCard.Footer>
              <hr />
              <div className="stats">
                {isExpanded ? (
                  <button className="btn btn-link" onClick={handleCloseClick}>
                    <span className="ml-1">Fechar</span>
                  </button>
                ) : (
                  <button className="btn btn-link" onClick={() => handleOpenClick('verGraficos')}>
                    <span className="ml-1">Abrir</span>
                  </button>
                )}
              </div>
            </BootstrapCard.Footer>
          </BootstrapCard>
        </Col>

        <Col lg="2" sm="2" className="text-center">
          <BootstrapCard className="card-stats">
            <BootstrapCard.Body>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://imgur.com/50PTOzr.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px' }}>
                  Graficos
                </BootstrapCard.Title>
              </div>
            </BootstrapCard.Body>
            <BootstrapCard.Footer>
              <hr />
              <div className="stats">
                {isExpanded ? (
                  <button className="btn btn-link" onClick={handleCloseClick}>
                    <span className="ml-1">Fechar</span>
                  </button>
                ) : (
                  <button className="btn btn-link" onClick={() => handleOpenClick('verGraficos')}>
                    <span className="ml-1">Abrir</span>
                  </button>
                )}
              </div>
            </BootstrapCard.Footer>
          </BootstrapCard>
        </Col>


          {/* Restante das colunas omitidas por brevidade */}
        </Row>
        <Row>
          {/* Restante das colunas omitidas por brevidade */}
        </Row>
        <Row>
          <Col lg="12" className={`text-center expanded ${isExpanded ? 'show' : ''}`}>
            <BootstrapCard className="card-stats">
              <div className="iframe-container">
                {isExpanded && content}
              </div>
            </BootstrapCard>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
