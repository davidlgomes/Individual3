import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './Header.css'

function Header() {
  return (
      <Navbar className='navBarColor' variant="dark">
        <Container className='navBarColor'>
          <Navbar.Brand href="/"  className='navBarColor'>Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link href="/" className='textColor'>Home</Nav.Link>
            <Nav.Link href="/cardapio" className='textColor'>Cardápio</Nav.Link>
            <Nav.Link href="/pedido" className='textColor'>Pedidos</Nav.Link>
            <Nav.Link href="/nos" className='textColor'>Contato</Nav.Link>
            <Nav.Link href="/carrinho" className='textColor'><i class="fa fa-shopping-cart"></i><Badge bg="secondary">0</Badge></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;