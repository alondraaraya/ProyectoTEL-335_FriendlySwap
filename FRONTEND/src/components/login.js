import {Button,NavLink} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dirección de correo</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su correo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <NavLink href='/home'><Button variant="primary">Ingresar</Button></NavLink>
    </Form>
  );
}

export default Login;