import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "./ui/Card";
import ExpenseChart from "./chart/ExpenseChart";
import NewExpense from "./newExpense/NewExpense";
const INITIAL_ITEM = [
  {
    id: 1,
    eName: "Byke Service",
    ePrice: "300",
    eDate: new Date("2023-01-21"),
  },
  {
    id: 2,
    eName: "Home Clean",
    ePrice: "323",
    eDate: new Date("2023-02-21"),
  },
  {
    id: 3,
    eName: "Car Wash",
    ePrice: "321",
    eDate: new Date("2023-03-01"),
  },
  {
    id: 4,
    eName: "Home Rent",
    ePrice: "500",
    eDate: new Date("2023-04-21"),
  },
];

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [items, setItems] = useState(INITIAL_ITEM);

  const changeFilterHandler = (year) => {
    setSelectedYear(year);
  };

  let filteredData = items.filter((i) => {
    return i.eDate.getFullYear().toString() === selectedYear;
  });

  const onSaveExpense = (objExpense) => {
    let expenseItem = { ...objExpense, id: Math.random() };
    setItems([expenseItem, ...items]);
  };

  return (
    <>
      <NewExpense onSaveExpense={onSaveExpense} />

      <Card className="expenses">
        <ExpenseFilter
          selectedYear={selectedYear}
          changeFilterHandler={changeFilterHandler}
        />
        <ExpenseChart filteredData={filteredData} selectedYear={selectedYear} />
        <ExpensesList filteredData={filteredData} />
      </Card>
    </>
  );
};

export default Expenses;
