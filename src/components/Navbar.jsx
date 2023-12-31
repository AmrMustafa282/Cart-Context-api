
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useShoppingCartContext } from '../context/ShoppingCartContext';




function BasicExample() {
  const { openCart, cartItems } = useShoppingCartContext();
  const qnt = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity , 0);
  console.log(cartItems)
  return (
    <Navbar sticky='top' expand="lg" className="bg-body-tertiary shadow-sm mb-4">
      <Container>
        <Navbar.Brand href="#home">Cart-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
            <Nav.Link to="/store" as={NavLink} >Store</Nav.Link>
            <Nav.Link to="/about" as={NavLink} >About</Nav.Link>
          </Nav>
          <Button onClick={openCart} variant='outline-primary' className='rounded-circle' style={{width:'3rem', height:"3rem" , position:"relative"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor'  viewBox="0 0 576 512">
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
            <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{
              position: "absolute",
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              bottom: 0,
              right: 0,
              transform:"translate(25% , 25%)"
            }}>
              {qnt}
          </div>
          </Button>

        </Navbar.Collapse >
      </Container >
    </Navbar >
  );
}

export default BasicExample;