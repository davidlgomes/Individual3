import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './Header.css'

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cardapio">Cardápio</Nav.Link>
            <Nav.Link href="/pedido">Pedidos</Nav.Link>
            <Nav.Link href="/carrinho">Carrinho</Nav.Link>
            <Nav.Link href="/nos">Contato</Nav.Link>
            <Button variant="primary">
              Vasco <Badge bg="secondary">9</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;