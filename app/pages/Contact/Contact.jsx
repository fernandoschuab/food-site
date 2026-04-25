import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout";
import "../../styles/ContactStyle.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <Layout>
      <section className="contact_page_section pt-5 pb-5 mt-5">
        <Container>
          <Row className="mt-5 mb-5 justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h2 className="text-uppercase">Fale Conosco</h2>
                <p className="text-muted">Dúvidas, sugestões ou reclamações? Preencha o formulário abaixo e entraremos em contato.</p>
              </div>
              
              <div className="contact_form_wrapper bg-light p-5 rounded shadow-sm">
                {submitted && (
                  <div className="alert alert-success text-center">
                    Mensagem enviada com sucesso! Obrigado pelo contato.
                  </div>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Seu nome" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="rounded-0 p-3"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="seu@email.com" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="rounded-0 p-3"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Como podemos ajudar?" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      className="rounded-0 p-3"
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="warning" type="submit" className="rounded-0 px-5 py-3 text-uppercase fw-bold border-0">
                      Enviar Mensagem
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
