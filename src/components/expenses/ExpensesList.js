import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredData.length < 1) {
    return (
      <h2 className="expenses-list__fallback text-red">Found no expenses.</h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.filteredData.map((item) => {
        return (
          <ExpenseItems
            key={item.id}
            eName={item.eName}
            ePrice={item.ePrice}
            eDate={item.eDate}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
