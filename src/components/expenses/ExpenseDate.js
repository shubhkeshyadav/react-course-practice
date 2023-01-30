import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = props.eDate.toLocaleString("default", { month: "long" });
  const day = props.eDate.toLocaleString("en-IN", { day: "2-digit" });
  const year = props.eDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_day">{day}</div>
      <div className="expense-date_year">{year}</div>
    </div>
  );
};
export default ExpenseDate;
