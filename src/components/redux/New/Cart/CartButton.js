import classes from "./CartButton.module.css";
import { catUiAction } from "../../../../store/cartui";
import { useDispatch } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const showCartHander = () => {
    dispatch(catUiAction.toggle());
  };
  return (
    <button className={classes.button} onClick={showCartHander}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
