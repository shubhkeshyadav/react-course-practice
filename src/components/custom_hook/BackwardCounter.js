import useCounter from "./hooks/use-counter";
const BackwardCounter = () => {
  const counter = useCounter();
  return (
    <>
      <h1>{counter}</h1>
    </>
  );
};

export default BackwardCounter;
