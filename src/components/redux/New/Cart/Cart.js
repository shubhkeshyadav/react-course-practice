import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {totalAmount > 0 && <h2>Total Amount {totalAmount}</h2>}
      {!(totalAmount > 0) && <h2>You cart is empty</h2>}
      <ul>
        {items.length > 0 &&
          items.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  qty: item.qty,
                  total: item.price * item.qty,
                  price: item.price,
                }}
              />
            );
          })}
      </ul>
    </Card>
  );
};

export default Cart;
