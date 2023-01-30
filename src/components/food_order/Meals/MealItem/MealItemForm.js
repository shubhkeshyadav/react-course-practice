import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [isInputValid, setInputValid] = useState(true);

  const qtyInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredQty = +qtyInput.current.value; // convert string into number

    if (enteredQty < 1 || enteredQty > 5) {
      setInputValid(false);
    } else {
      props.addToCart(enteredQty);
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={qtyInput}
        label="Qty."
        input={{
          id: "qty_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!isInputValid && <p>Enter Valid Quantity</p>}

      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
