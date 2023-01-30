import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  let [showForm, setShowForm] = useState(false);

  return (
    <div className="new-expense">
      {showForm === true && (
        <ExpenseForm
          onSaveExpense={props.onSaveExpense}
          setShowForm={setShowForm}
        />
      )}

      {showForm === false && (
        <button
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
