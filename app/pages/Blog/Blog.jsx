import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout";
import "../../styles/BlogStyle.css";
import BlogImage1 from "../../assets/menu/burger-11.jpg";
import BlogImage2 from "../../assets/menu/burger-12.jpg";
import BlogImage3 from "../../assets/menu/burger-13.jpg";

const blogPosts = [
  { id: 1, image: BlogImage1, title: "Os segredos do nosso blend", date: "10 Out 2026", extract: "Descubra o que torna a nossa carne tão suculenta e saborosa." },
  { id: 2, image: BlogImage2, title: "A história do Bacon Artesanal", date: "15 Out 2026", extract: "Tudo o que você precisa saber sobre o bacon perfeito para hambúrgueres." },
  { id: 3, image: BlogImage3, title: "Molhos que transformam", date: "20 Out 2026", extract: "Como os nossos molhos exclusivos são preparados diariamente." },
];

const Blog = () => {
  return (
    <Layout>
      <section className="blog_page_section pt-5 pb-5 mt-5">
        <Container>
          <Row className="mt-5 mb-5 text-center">
            <Col>
              <h2 className="text-uppercase mb-4">Nosso Blog</h2>
              <p className="text-muted">Acompanhe as novidades, receitas e curiosidades do mundo dos hambúrgueres.</p>
            </Col>
          </Row>
          <Row>
            {blogPosts.map(post => (
              <Col md={4} key={post.id} className="mb-4">
                <Card className="h-100 border-0 shadow-sm blog_card">
                  <Card.Img variant="top" src={post.image} className="rounded-0" />
                  <Card.Body>
                    <small className="text-muted">{post.date}</small>
                    <Card.Title className="mt-2 text-uppercase font-weight-bold">{post.title}</Card.Title>
                    <Card.Text className="text-muted">{post.extract}</Card.Text>
                    <Button variant="link" className="text-warning p-0 text-decoration-none font-weight-bold">Leia Mais <i className="bi bi-arrow-right"></i></Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Blog;
