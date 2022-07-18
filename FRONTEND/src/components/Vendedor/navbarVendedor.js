import { Navbar, Container, Nav} from 'react-bootstrap'
import BotonBusqueda from '../../actions/BotonBusqueda'
import BotonNuevaPublicacion from '../../actions/BotonNuevaPublicacion'
function barra(){
return (
<Navbar bg="dark" variant="dark">
  <Container fluid>
    <Navbar.Brand href="/home">FriendlySwap</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
    <Nav.Link href="/Ofertas">Ofertas</Nav.Link>
    <Nav.Link href="/Publicaciones">Mis publicaciones</Nav.Link>
    </Nav>
    <BotonNuevaPublicacion/>{' '}
    <BotonBusqueda/>
    
    
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default barra