import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import GlobalContext from "../../Store/GlobalContaxt";
import { useContext } from "react";

const MealItem = (props) => {
  const ctx = useContext(GlobalContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (enteredQty) => {
    ctx.cartData.addItemToCart({
      id: props.id,
      name: props.name,
      descriptio: props.description,
      price: props.price,
      qty: enteredQty,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
