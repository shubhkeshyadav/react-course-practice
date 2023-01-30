import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import react, { useContext, useState, useEffect } from "react";

import GlobalContext from "../Store/GlobalContaxt";

const HeaderCartButton = (props) => {
  const ctx = useContext(GlobalContext);
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const showCartHandler = () => {
    ctx.setglobalData({ ...ctx.setglobalData, displayCart: true });
  };

  const btnClass = `${classes.button} ${isButtonHighlighted && classes.bump}`;

  useEffect(() => {
    setIsButtonHighlighted(true);

    const interval = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);

    return () => {
      console.log("clean");
      clearTimeout(interval);
    };
  }, [ctx.cartData.items]);

  return (
    <button className={btnClass} onClick={showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctx.cartData.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
