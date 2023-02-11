import { useState, useEffect } from "react";
import useCounter from "./hooks/use-counter";
const ForwardCounter = () => {
  const counter = useCounter(true);

  return (
    <>
      <h1>{counter}</h1>
    </>
  );
};

export default ForwardCounter;
