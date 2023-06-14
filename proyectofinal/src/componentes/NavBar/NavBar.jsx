import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Haku Studio</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#mesas">Mesas</Nav.Link>
                    <Nav.Link href="#sillas">Sillas</Nav.Link>
                    <Nav.Link href="#accesorios">Accesorios</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar

