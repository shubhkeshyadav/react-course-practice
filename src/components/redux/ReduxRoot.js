import React from "react";
import { authAction } from "../../store/auth";
import { useSelector } from "react-redux";
import Counter from "./Counter";
import Login from "./Login";
import Nav from "./Nav";
import Profile from "./Profile";

const ReduxRoot = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="container">
      {isAuth && <Nav />}
      {isAuth && <Profile />}
      <div className="col-md-6">{!isAuth && <Login />}</div>
      <Counter />
    </div>
  );
};

export default ReduxRoot;
