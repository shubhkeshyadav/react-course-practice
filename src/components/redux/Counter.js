import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../../store/counter";

const Counter = () => {
  const reduxStates = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  const increment = () => {
    //dispatch({ type: "increment" });
    dispatch(counterAction.increment());
  };

  const increaseHandler = () => {
    dispatch(counterAction.increase(5));
  };

  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  const toggle = () => {
    dispatch(counterAction.toggle());
  };
  return (
    <>
      <div className="row">
        <div className="col">
          <button className="btn btn-success" onClick={increment}>
            increment
          </button>
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={increaseHandler}>
            increased by 5
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          {reduxStates.showCounter && <h1>{reduxStates.counter}</h1>}
        </div>
      </div>

      <div className="row my-4">
        <div className="col">
          <button className="btn btn-success" onClick={decrement}>
            decrement
          </button>
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={toggle}>
            Toggle Counter
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
