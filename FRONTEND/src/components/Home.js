import {Button, NavLink} from 'react-bootstrap';


function TypesExample() {
  return (
    <>
    <NavLink href='/Vendedor'><Button variant="secondary">Vendedor</Button></NavLink>
    <NavLink href='/Comprador'><Button variant="warning">Comprador</Button></NavLink>
    </>
  );
}

export default TypesExample;