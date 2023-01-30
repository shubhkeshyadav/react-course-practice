import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import GlobalContext from "../Store/GlobalContext";

const Home = (props) => {
  const ctx = useContext(GlobalContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back! ({ctx.globalData.email ?? ""})</h1>
    </Card>
  );
};

export default Home;
