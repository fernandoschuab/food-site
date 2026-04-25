import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cards({ id, image, rating, title, paragraph, price, renderRatingIcons }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({ id, name: title, price: price });
  };

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden h-100">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        
        <Card.Body className="d-flex flex-column">
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          
          <Card.Text className="flex-grow-1">
            {paragraph}
          </Card.Text>

          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="menu_price">
              <h5 className="mb-0">R${Number(price).toFixed(2).replace('.', ',')}</h5>
            </div>
            <div className="add_to_card">
              <Button variant="link" className="p-0 text-decoration-none" onClick={handleAddToCart}>
                <i className="bi bi-bag me-2"></i>
                Adicionar
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;