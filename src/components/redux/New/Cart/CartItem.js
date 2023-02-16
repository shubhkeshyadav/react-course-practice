import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "./../../../../store/cart";

const CartItem = (props) => {
  const { title, qty, total, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    const item = { ...props.item, qty: 1 };
    dispatch(cartAction.addToCart(item));
  };

  const removeFromCart = () => {
    dispatch(cartAction.removeFromCart(props.item.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{qty}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCart}>-</button>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
