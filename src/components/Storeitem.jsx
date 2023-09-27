import { Button, Card } from "react-bootstrap"
import formatCurrency from "./FormatCurrency"
import { useShoppingCartContext } from "../context/ShoppingCartContext";

const Storeitem = ({ id, price, title, image }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart
  } = useShoppingCartContext();
  const quantity = getItemsQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} style={{height:"200px" , objectFit:"contain"}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{formatCurrency(price)}</Card.Text>
        <div className="mt-auto ">
          {quantity === 0
            ?
            <Button className="w-100" onClick={()=>increaseCartQuantity(id)}>Add to Cart</Button>
            :
            <div className="d-flex align-items-center flex-column gap-2" >
              <div className="d-flex align-items-center justify-content-center gap-2">
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className="fs-3 ">{quantity} in cart</span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" size="sm" onClick={() => removeItemFromCart(id)}>Remove</Button>
            </div>
          }
        </div>
      </Card.Body>
    </Card>
  )
}

export default Storeitem