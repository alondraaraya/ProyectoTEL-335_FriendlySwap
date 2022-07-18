import React,{useState} from "react";
import { Form,Card, Button, ListGroup, ListGroupItem,Modal } from "react-bootstrap";
import './ProductList.css'

const MisPublicaciones = (props,Product,index) => {
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
     <Button variant="success" onClick={handleShow}>
        Editar
      </Button>{'  '}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edite su publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="nombreD">
            <Form.Label>Titulo</Form.Label>
            <Form.Control type="text" placeholder="Ingrese un titulo para su publicación" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="descriptionID">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Ingrese una breve descripción del producto que ofrece" />
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar 
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="danger" onClick={handleShow1}>
       Eliminar
      </Button>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>¿Esta seguro que quiere borrar esta publicación?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta acción no se podrá deshacer</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancelar 
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );

};

export default MisPublicaciones;