import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Layout from "../../components/Layouts/Layout";
import { useCart } from "../../context/CartContext";
import "../../styles/ShopStyle.css";

const Shop = () => {
  const { cartItems, updateQuantity, removeItem, subTotal } = useCart();

  return (
    <Layout>
      <section className="shop_page_section pt-5 pb-5 mt-5">
        <Container>
          <Row className="mt-5 mb-5">
            <Col lg={8}>
              <h2 className="mb-4 text-uppercase">Seu Carrinho</h2>
              {cartItems.length === 0 ? (
                <p className="text-muted">O seu carrinho está vazio.</p>
              ) : (
                <div className="table-responsive">
                  <Table className="align-middle">
                    <thead>
                      <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Qtd</th>
                        <th>Subtotal</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id}>
                          <td><strong>{item.name}</strong></td>
                          <td>R$ {item.price.toFixed(2).replace('.', ',')}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                              <span className="mx-2">{item.quantity}</span>
                              <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                            </div>
                          </td>
                          <td>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</td>
                          <td>
                            <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>
                              <i className="bi bi-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </Col>
            <Col lg={4}>
              <div className="shop_summary bg-light p-4 rounded">
                <h4 className="text-uppercase mb-4">Resumo do Pedido</h4>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal:</span>
                  <span>R$ {subTotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Taxa de Entrega:</span>
                  <span>R$ {subTotal > 0 ? "5,00" : "0,00"}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total:</strong>
                  <strong>R$ {(subTotal > 0 ? subTotal + 5 : 0).toFixed(2).replace('.', ',')}</strong>
                </div>
                <Button variant="warning" className="w-100 rounded-0 text-uppercase fw-bold" disabled={cartItems.length === 0}>
                  Finalizar Compra
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Shop;
