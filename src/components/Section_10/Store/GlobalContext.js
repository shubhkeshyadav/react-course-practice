import { createContext } from "react";
import { useState } from "react";
const GlobalContext = createContext();

const GlobalState = (props) => {
  const [globalData, sGlobalData] = useState({});

  const setglobalData = (data) => {
    sGlobalData(data);
  };

  return (
    <GlobalContext.Provider value={{ globalData, setglobalData }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalState };
export default GlobalContext;
