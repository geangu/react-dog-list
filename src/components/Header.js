import { Container, Nav, Navbar } from 'react-bootstrap';
import BreedSelector from './BreedSelector';
import Title from './Title';

const Header = ({ onChangeBreed }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Title />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <BreedSelector onChangeBreed={onChangeBreed} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
