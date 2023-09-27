import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";


const ShoppingCartContext = createContext({});



const ShoppingCartProvider = ({ children }) => {

  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])


  const openCart = () => {
    setIsOpen(true);
  }
  const closeCart = () => {
    setIsOpen(false);
  }



  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        })
      }
    })
  }
  const decreaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find(item => item.id === id) == null) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
      }
    })
  }

  const removeItemFromCart = (id) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    })
  }

  return (
    <ShoppingCartContext.Provider value={{ cartItems, getItemsQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart, openCart, closeCart }}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider;


export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
}