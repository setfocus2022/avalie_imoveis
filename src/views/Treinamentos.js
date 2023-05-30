import React, { useState, useEffect } from 'react';
import { Col, Card as BootstrapCard, Row, Container } from 'react-bootstrap';
import './styles.dashboard.scss';

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    handleOpenClick('Avaliação');
  }, []);

  const handleOpenClick = (contentType) => {
    setIsExpanded(!isExpanded);

    // Define o conteúdo da coluna expandida com base no tipo de conteúdo
    switch (contentType) {
      case 'Avaliação':
        setContent(
          <div>
            <center>
              <iframe
                title="Avaliação"
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
      
        case 'ListaPresença':
        setContent(
          <div>
            <center>
              <iframe
                title="ListaPresença"
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
        case 'Certificados':
        setContent(
          <div>
            <center>
              <iframe
                title="Certificados"
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
        case 'Protocolo':
        setContent(
          <div>
            <center>
              <iframe
                title="Protocolo"
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
                  src="https://imgur.com/fOHHIWC.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px' }}>
                <a href="https://forms.zohopublic.com/juliana15/form/ComercialQualitySegEngenhariadeSeguranaeMedicinado/formperma/iKxe7-5DD6rWrFM_duryGABo0x1oPTqqlnpafECN11w" target="_blank">Avaliação</a>
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
                  <button className="btn btn-link" onClick={() => handleOpenClick('Avaliação')}>
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
                  src="https://imgur.com/j0KMEj9.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px' }}>
                <a href="https://forms.zohopublic.com/juliana15/form/ComercialQualitySegEngenhariadeSeguranaeMedicinado/formperma/iKxe7-5DD6rWrFM_duryGABo0x1oPTqqlnpafECN11w" target="_blank">Lista de Presença</a>
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
                  <button className="btn btn-link" onClick={() => handleOpenClick('ListaPresença')}>
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
                  src="https://imgur.com/MyO5N40.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px' }}>
                <a href="https://forms.zohopublic.com/juliana15/form/ComercialQualitySegEngenhariadeSeguranaeMedicinado/formperma/iKxe7-5DD6rWrFM_duryGABo0x1oPTqqlnpafECN11w" target="_blank">Certificado</a>
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
                  <button className="btn btn-link" onClick={() => handleOpenClick('Certificados')}>
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
                  src="https://imgur.com/kapSCA4.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px' }}>
                <a href="https://forms.zohopublic.com/juliana15/form/ComercialQualitySegEngenhariadeSeguranaeMedicinado/formperma/iKxe7-5DD6rWrFM_duryGABo0x1oPTqqlnpafECN11w" target="_blank">Protocolo</a>
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
                  <button className="btn btn-link" onClick={() => handleOpenClick('Protocolo')}>
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
