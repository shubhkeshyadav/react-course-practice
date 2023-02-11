import { NavLink, Outlet } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink to="welcome">Welcome</NavLink>
            </li>
            <li>
              <NavLink to="products">Products</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default MainHeader;
