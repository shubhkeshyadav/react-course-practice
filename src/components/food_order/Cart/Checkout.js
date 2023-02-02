import classes from "./Checkout.module.css";
import { useState } from "react";

const Checkout = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    postal: "",
    city: "",
  });
  const confirmHandler = (event) => {
    event.preventDefault();
    props.onOrderConfirm(formData);
  };

  const inputChangeHandler = (event) => {
    setFormData((prev) => {
      const obj = { ...prev };
      obj[event.target.name] = event.target.value;
      return obj;
    });
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" onChange={inputChangeHandler} required />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          onChange={inputChangeHandler}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          name="postal"
          onChange={inputChangeHandler}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" name="city" onChange={inputChangeHandler} required />
      </div>
      <div className={classes.actions}>
        <button
          className={classes.submit}
          onClick={props.checkoutBackHandler}
          onChange={inputChangeHandler}
        >
          Back
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
