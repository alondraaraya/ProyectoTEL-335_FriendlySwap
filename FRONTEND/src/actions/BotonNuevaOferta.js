import React,{useState} from "react";
import { Modal,Form, Button} from "react-bootstrap";

const NuevaOferta = (props,Product,index) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
<>
      <Button variant="success" onClick={handleShow}>
        Crear oferta
      </Button>{'   '}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nueva oferta</Modal.Title>
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
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

};

export default NuevaOferta;