import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import GlobalContext from "../Store/GlobalContaxt";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(GlobalContext);

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

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${totalPrice}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={handleCloseCart}>
          Close
        </button>
        {hasItemInCart && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
