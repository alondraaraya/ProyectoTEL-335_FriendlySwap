import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import './ProductList.css'

const Respuestas = (props,Product,index) => {
  return (
    <Card className="text-center">
    <Card.Header>{Product.nombre}</Card.Header>
      <Card.Body>
        <Card.Title>{Product.nombre}</Card.Title>
        
    
      </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>Estado: </ListGroupItem>
    </ListGroup>
     
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );

};

export default Respuestas;