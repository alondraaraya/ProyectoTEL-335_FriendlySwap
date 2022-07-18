import React,{useState} from "react";
import { Card, Button, ListGroup, ListGroupItem,Modal } from "react-bootstrap";
import './ProductList.css'

const PostsVendedor = (props,Product,index) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  
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
        Aceptar
      </Button>{'  '}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oferta Aceptada</Modal.Title>
        </Modal.Header>
        <Modal.Body>Aceptaste esta oferta, puedes ponerte en contacto para concretar el trueque</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar 
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Contactar
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="danger" onClick={handleShow1}>
       Rechazar
      </Button>{'  '}

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Oferta rechazada</Modal.Title>
        </Modal.Header>
        <Modal.Body>Oferta Rechazada, notificaremos al interesado</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancelar 
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );

};

export default PostsVendedor;