import { Button, Offcanvas } from "react-bootstrap"
import { useShoppingCartContext } from "../context/ShoppingCartContext"
import CartItem from "./CartItem";


const ShoppingCart = ({isOpen}) => {
  const { cartItems , closeCart  } = useShoppingCartContext();
  
  return (
    <Offcanvas show={isOpen} onHide={closeCart } placement="end"  >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Cart
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
      ))}
      </Offcanvas.Body>
      <Button className="mb-5 mx-2">Checkout</Button>
    </Offcanvas>
  )
}

export default ShoppingCart