import { useEffect, useState } from "react";

const useCounter = (isForward = false) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isForward) {
        setCounter((prev) => prev + 1);
      } else {
        setCounter((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return counter;
};

export default useCounter;
