import React, {useState} from "react";
import { Modal,Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import './ProductList.css'

const PostsOfertar = (props,Product,index) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card className="text-center">
    <Card.Header>{Product.nombre}</Card.Header>
      <Card.Body>
        <Card.Title>{Product.nombre}</Card.Title>
        <Card.Text>descripcion</Card.Text>
      </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>ciudad</ListGroupItem>
    </ListGroup>
     <Card.Body>
     <Button variant="primary" onClick={handleShow}>
       Ofrecer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oferta enviada con exito</Modal.Title>
        </Modal.Header>
        
      </Modal>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );

};

export default PostsOfertar;