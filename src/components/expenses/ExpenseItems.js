import ExpenseDate from "./ExpenseDate";
import Card from "./ui/Card";
import "./ExpenseItem.css";
import { React, useState } from "react";

const ExpenseItems = (props) => {
  const [eName, seteName] = useState(props.eName);

  const ePrice = props.ePrice;

  const clickHandler = () => {
    seteName(eName + " updated");
    console.log(eName);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate eDate={props.eDate} />
        <div className="expense-item__description">
          <h2>{eName}</h2>
          <div className="expense-item__price">${ePrice}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItems;
