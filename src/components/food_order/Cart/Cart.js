import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import GlobalContext from "../Store/GlobalContaxt";
import { useContext } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useState } from "react";
import Notiflix from "notiflix";

const Cart = (props) => {
  const ctx = useContext(GlobalContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalPrice = ctx.cartData.totalAmount.toFixed(2);
  const hasItemInCart = ctx.cartData.items.length > 0;

  const addToCart = (item) => {
    ctx.cartData.addItemToCart({ ...item, qty: 1 });
  };
  const removeFromCart = (id) => {
    ctx.cartData.removeItemFromCart(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.cartData.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          qty={item.qty}
          onAdd={addToCart.bind(null, item)}
          onRemove={removeFromCart.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const handleCloseCart = () => {
    ctx.setglobalData({ ...ctx.globalData, displayCart: false });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const checkoutBackHandler = () => {
    setIsCheckout(false);
  };

  const onOrderConfirm = async (userData) => {
    const response = await fetch(process.env.REACT_APP_API_URL + "/orders", {
      method: "post",
      body: JSON.stringify({ user: userData, orderData: ctx.cartData.items }),
      headers: {
        "Content-Type": "Application/Json",
      },
    });

    if (response.status === 201) {
      setIsCheckout(false);
      ctx.cartData.clearCart();
      Notiflix.Report.success("New Order", "Order Placed Successfully", "Ok");
      ctx.setglobalData({ ...ctx.setglobalData, displayCart: false });
    }
  };

  return (
    <Modal>
      {!isCheckout && cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalPrice}`}</span>
      </div>
      {isCheckout && (
        <Checkout
          checkoutBackHandler={checkoutBackHandler}
          onOrderConfirm={onOrderConfirm}
        />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={handleCloseCart}>
            Close
          </button>
          {hasItemInCart && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
