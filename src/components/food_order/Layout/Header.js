import { Fragment } from "react";
import mealsImage from "../../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import GlobalContext from "../Store/GlobalContaxt";
import { useContext } from "react";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const ctx = useContext(GlobalContext);
  return (
    <Fragment>
      {ctx.globalData.displayCart == true && <Cart />}
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
