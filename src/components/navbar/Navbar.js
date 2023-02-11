import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="expenses">Manage Expenses</Link>
        </li>
        <li>
          <Link to="users">Users</Link>
        </li>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="food-order">Food Order</Link>
        </li>
        <li>
          <Link to="movies">Movies</Link>
        </li>
        <li>
          <Link to="router">React Router</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
