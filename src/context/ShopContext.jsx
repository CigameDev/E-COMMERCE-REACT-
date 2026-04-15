import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});//cartItems là object lồng nhau nên có thể for

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);//Deep copy
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    if (cartData[itemId]) { //ví dụ cartData["001"] (id)
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else {
        cartData[itemId][size] = 1;
      }

    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  }
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {

        }
      }
    }

    return totalCount;
  }


  const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart, getCartCount
  }

  return (
    <ShopContext value={value}>
      {props.children}
    </ShopContext>
  )
}

export default ShopContextProvider;

// {
//   "product_id_001": {
//     "S": 2,
//     "M": 1,
//     "XL": 5
//   },
//   "product_id_002": {
//     "L": 1
//   },
//   "product_id_003": {
//     "XL": 3
//   }
// }