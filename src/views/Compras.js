import React, { useState, useEffect } from 'react';
import { Col, Card as BootstrapCard, Row, Container } from 'react-bootstrap';
import './styles.dashboard.scss';

const Compras = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState(null);
  const [lastContent, setLastContent] = useState('verGraficos');

  useEffect(() => {
    handleOpenClick('verGraficos');
  }, []);

  const handleOpenClick = (contentType) => {
    setIsExpanded(true);
    setLastContent(contentType);

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
      case 'realizarOS':
        setContent(
          <iframe
            title="OS 20"
            width="900"
            height="536"
            src="https://forms.zohopublic.com/juliana15/form/ComercialQualitySegEngenhariadeSeguranaeMedicinado/formperma/iKxe7-5DD6rWrFM_duryGABo0x1oPTqqlnpafECN11w"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
        break;
      default:
        setContent(null);
        break;
    }
  };

  const handleCardClick = () => {
    if (!isExpanded) {
      handleOpenClick('realizarOS');
    } else {
      if (lastContent === 'realizarOS') {
        handleOpenClick('verGraficos');
      } else {
        handleOpenClick('realizarOS');
      }
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
        <Col lg="2" sm="2" className="text-center mx-auto">
          <BootstrapCard 
            className="card-stats"
            onClick={handleCardClick}
          >
            <BootstrapCard.Body>
              <div className="d-flex align-items-center justify-content-center" style={{ marginBottom: '15px' }}>
                <img
                  src="https://imgur.com/AtpGO1b.png"
                  alt="Ícone"
                  style={{ width: '50px', height: '50px' }}
                />
                <BootstrapCard.Title as="h4" style={{ fontSize: '15px', marginLeft: '10px' }}>
                  <a href="https://forms.zohopublic.com/juliana15/form/ComercialQualitySegEngenhariadeSeguranaeMedicinado/formperma/iKxe7-5DD6rWrFM_duryGABo0x1oPTqqlnpafECN11w" target="_blank">
                    Realizar OS
                  </a>
                </BootstrapCard.Title>
              </div>
            </BootstrapCard.Body>
          </BootstrapCard>
        </Col>
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

export default Compras;
