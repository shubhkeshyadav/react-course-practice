//import MainHeader from "../components/MainHeader";

import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>Welcome page here..</h1>
      <Outlet />
    </>
  );
};

export default Welcome;
