import { createContext, useReducer } from "react";
import { useState } from "react";
import ExpenseItems from "./../../expenses/ExpenseItems";
const GlobalContext = createContext();

const defaultCartState = {
  totalAmount: 0,
  items: [],
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let totalAmount = state.totalAmount + action.value.price * action.value.qty;
    let updatedItems;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      const newItem = {
        ...existingCartItem,
        qty: existingCartItem.qty + action.value.qty,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = newItem;
    } else {
      updatedItems = state.items.concat(action.value);
    }

    return {
      totalAmount: totalAmount,
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    let updatedTotalAmount = state.totalAmount;

    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingItem = state.items[existingCartItemIndex];

    if (existingItem) {
      updatedTotalAmount = updatedTotalAmount - existingItem.price;
      if (existingItem.qty === 1) {
        updatedItems = state.items.filter((item) => item.id != action.id);
      } else {
        let updatedItem = { ...existingItem, qty: existingItem.qty - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const GlobalState = (props) => {
  const [globalData, sGlobalData] = useState({
    displayCart: false,
  });

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", value: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
  };

  const setglobalData = (data) => {
    sGlobalData(data);
  };

  const output = { globalData, setglobalData, cartData };

  return (
    <GlobalContext.Provider value={output}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalState };
export default GlobalContext;
