import React, { useContext, useEffect } from "react";
import classes from "./Navigation.module.css";
import GlobalContext from "../Store/GlobalContext";

const Navigation = (props) => {
  const gctx = useContext(GlobalContext);

  useEffect(() => {
    gctx.setglobalData({
      ...gctx.globalData,
      name: "Not Logged In",
    });
  }, []);

  return (
    <nav className={classes.nav}>
      <ul>
        {/* <HeaderDataContext.Consumer>
          {(ctx) => {
            return (
              <li>
                <a href="/">{ctx.email}</a>
              </li>
            );
          }}
        </HeaderDataContext.Consumer> */}

        <li>
          <a href="/">{gctx.globalData.email ?? ""}</a>
        </li>

        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
