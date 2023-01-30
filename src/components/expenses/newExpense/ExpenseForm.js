import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({
    eName: "",
    ePrice: "",
    eDate: "",
  });

  const changeHaneHandler = (event) => {
    setFormData((prevState) => {
      const obj = {
        ...prevState,
      };

      if (event.target.name === "eDate") {
        obj[event.target.name] = new Date(event.target.value);
      } else {
        obj[event.target.name] = event.target.value;
      }

      return obj;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpense(formData);
    setFormData({ eName: "", ePrice: "", eDate: "" });
    props.setShowForm(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.new_expense__controls}>
        <div className={styles.new_expense__control}>
          <label>Title</label>
          <input
            type="text"
            name="eName"
            value={formData.eName}
            required
            onChange={changeHaneHandler}
          />
        </div>
        <div className={styles.new_expense__control}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="ePrice"
            required
            value={formData.ePrice}
            onChange={changeHaneHandler}
          />
        </div>
        <div className={styles.new_expense__control}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            name="eDate"
            required
            onChange={changeHaneHandler}
          />
        </div>
      </div>
      <div className={styles.new_expense__actions}>
        <button
          type="button"
          onClick={() => {
            props.setShowForm(false);
          }}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
