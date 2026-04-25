import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout";
import Cards from "../../components/Layouts/Cards";
import "../../styles/MenuStyle.css";

import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";

const mockData = [
  { id: "0001", image: Image1, title: "Crispy Chicken", paragraph: "Frango crocante, molho chili, tomates, picles e coleslaw artesanal.", rating: 5, price: 34.90, category: "frango" },
  { id: "0002", image: Image2, title: "Ultimate Bacon", paragraph: "Blend da casa, queijo cheddar, bacon crocante, cebola e mostarda.", rating: 4.5, price: 38.50, category: "carne" },
  { id: "0003", image: Image3, title: "Black Sheep", paragraph: "Queijo prato, relish de tomate, abacate fresh, alface e cebola roxa.", rating: 4.5, price: 42.00, category: "veggie" },
  { id: "0004", image: Image4, title: "Vegan Burger", paragraph: "Hambúrguer de grão-de-bico, queijo vegano, alface, tomate e maionese de ervas.", rating: 4, price: 36.90, category: "veggie" },
  { id: "0005", image: Image5, title: "Double Burger", paragraph: "Dois blends de 160g, dobro de cheddar, picles e molho especial.", rating: 5, price: 45.90, category: "carne" },
  { id: "0006", image: Image6, title: "Turkey Burger", paragraph: "Hambúrguer de peru suculento, cheddar, cebola caramelizada e alface.", rating: 4, price: 32.00, category: "frango" },
  { id: "0007", image: Image7, title: "Smokey House", paragraph: "Blend defumado, queijo provolone, cebola crispy e molho barbecue.", rating: 4.5, price: 39.90, category: "carne" },
  { id: "0008", image: Image8, title: "Classic Burger", paragraph: "O clássico: carne, queijo, ketchup, mostarda, picles e cebola branca.", rating: 4, price: 28.50, category: "carne" },
];

const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

const Menu = () => {
  const [filter, setFilter] = useState("all");

  const filteredData = filter === "all" ? mockData : mockData.filter(item => item.category === filter);

  return (
    <Layout>
      <section className="menu_page_section pt-5 pb-5 mt-5">
        <Container>
          <Row>
            <Col className="text-center mb-5 mt-5">
              <h2 className="text-uppercase">Cardápio Completo</h2>
              <div className="menu_filters mt-4">
                <Button variant={filter === "all" ? "warning" : "outline-warning"} className="m-1 rounded-0" onClick={() => setFilter("all")}>Todos</Button>
                <Button variant={filter === "carne" ? "warning" : "outline-warning"} className="m-1 rounded-0" onClick={() => setFilter("carne")}>Carne</Button>
                <Button variant={filter === "frango" ? "warning" : "outline-warning"} className="m-1 rounded-0" onClick={() => setFilter("frango")}>Frango</Button>
                <Button variant={filter === "veggie" ? "warning" : "outline-warning"} className="m-1 rounded-0" onClick={() => setFilter("veggie")}>Veggie</Button>
              </div>
            </Col>
          </Row>
          <Row>
            {filteredData.map((cardData, index) => (
              <Cards
                key={index}
                id={cardData.id}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                renderRatingIcons={renderRatingIcons}
              />
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Menu;
