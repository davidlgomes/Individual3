import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom';
import './Header.css'

function Header() {
  return (
      <Navbar className='navBarColor' variant="dark">
        <Container className='navBarColor'>
          <Navbar.Brand href="/"  className='navBarColor'>Navbar</Navbar.Brand>
          <Nav>
            <Nav><Link to="/" className='textColor'>Home</Link></Nav>
            <Nav><Link to="/cardapio" className='textColor'>Cardápio</Link></Nav>
            <Nav><Link to="/pedido" className='textColor'>Pedidos</Link></Nav>
            <Nav><Link to="/nos" className='textColor'>Contato</Link></Nav>
            <Nav><Link to="/carrinho" className='textColor'><i className="fa fa-shopping-cart"></i><Badge bg="secondary">0</Badge></Link></Nav>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;
