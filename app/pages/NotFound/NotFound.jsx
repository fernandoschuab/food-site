import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="d-flex align-items-center justify-content-center text-center" style={{ minHeight: "60vh", paddingTop: "100px" }}>
        <Container>
          <div className="mb-4">
            <i className="bi bi-exclamation-circle text-warning" style={{ fontSize: "6rem" }}></i>
          </div>
          <h1 className="mb-3">Página não encontrada!</h1>
          <p className="text-muted mb-4">A página que você está procurando não existe ou foi removida.</p>
          <Link to="/">
            <Button variant="warning" className="px-4 py-2 rounded-0 text-uppercase fw-bold">
              Voltar para a Home
            </Button>
          </Link>
        </Container>
      </section>
    </Layout>
  );
};

export default NotFound;
