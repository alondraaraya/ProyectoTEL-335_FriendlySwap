import React from "react";
import { Card, Button, ListGroup, ListGroupItem, NavLink } from "react-bootstrap";
import '../ProductList.css'

const PostsComprador = (props,Product,index) => {
  return (

    <Card className="text-center">
    <Card.Header>Producto: {Product.nombre}</Card.Header>
      <Card.Body>
        <Card.Title>{Product.nombre}</Card.Title>
        <Card.Text>Categoria: {Product.categoria} </Card.Text>
      </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>Ciudad: </ListGroupItem>
    </ListGroup>
     <Card.Body>
    <NavLink href='/OfertarComprador'> <Button variant="danger" size="sm" >Hacer oferta</Button></NavLink>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );

};

export default PostsComprador;