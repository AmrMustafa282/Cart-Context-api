import { Button, Stack } from "react-bootstrap"
// import storeitems from '../data/storeItems.json'
import formatCurrency from "./FormatCurrency";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { useEffect, useState } from "react";

const CartItem = ({ id, quantity }) => {
  const { removeItemFromCart } = useShoppingCartContext();
  const [storeitems, setStoreitems] = useState([])


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setStoreitems(data))
  },[])




  const item = storeitems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex  align-items-center my-2">
      <img src={item.image} alt="cart-image"
        style={{ width: '50px', height: '75px', objectFit: "contain" }}
        className="rounded  "
      />
      <div className="me-auto">
        <div  >
          {item.title}{" "}
          {quantity > 1 && <span className="text-muted fs-5" style={{ fontSize: '0.65rem' }}>x{quantity}</span>}
          <div className="text-muted" style={{ fontSize: '0.75rem' }}>
            {formatCurrency(Number(item.price))}
          </div>
        </div>

      </div>
      <div>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button variant="outline-danger" size="sm" onClick={() => removeItemFromCart(id)}>&times;</Button>
    </Stack>
  )
}

export default CartItem