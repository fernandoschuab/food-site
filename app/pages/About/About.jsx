import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout";
import AboutImage from "../../assets/about/about-1.jpg";
import "../../styles/AboutStyle.css";

const About = () => {
  return (
    <Layout>
      <section className="about_page_section pt-5 pb-5 mt-5">
        <Container>
          <Row className="align-items-center mt-5 mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img src={AboutImage} alt="Sobre Nós" className="img-fluid rounded" />
            </Col>
            <Col lg={6}>
              <h2 className="mb-4 text-uppercase">Nossa História</h2>
              <p className="about_text text-muted">
                Nascemos da paixão por hambúrgueres autênticos. Desde 2010, nossa missão tem sido 
                entregar a melhor experiência gastronômica, combinando ingredientes frescos e artesanais 
                com um ambiente acolhedor.
              </p>
              <p className="about_text text-muted">
                Cada hambúrguer é preparado com atenção aos detalhes, garantindo que o blend de carne 
                perfeito encontre os queijos mais saborosos e o pão sempre macio.
              </p>
            </Col>
          </Row>
          <Row className="mt-5 text-center about_values pt-4 border-top">
            <Col md={4} className="mb-4">
              <i className="bi bi-star-fill text-warning fs-1"></i>
              <h4 className="mt-3 text-uppercase">Qualidade Premium</h4>
              <p className="text-muted">Trabalhamos apenas com fornecedores selecionados e carne fresca todos os dias.</p>
            </Col>
            <Col md={4} className="mb-4">
              <i className="bi bi-heart-fill text-danger fs-1"></i>
              <h4 className="mt-3 text-uppercase">Feito com Amor</h4>
              <p className="text-muted">Nossa equipe é treinada para colocar carinho e dedicação em cada pedido.</p>
            </Col>
            <Col md={4} className="mb-4">
              <i className="bi bi-clock-fill text-primary fs-1"></i>
              <h4 className="mt-3 text-uppercase">Entrega Rápida</h4>
              <p className="text-muted">Seu lanche quente e delicioso na sua porta no menor tempo possível.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default About;
