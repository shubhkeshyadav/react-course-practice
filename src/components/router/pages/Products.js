//import MainHeader from "./../components/MainHeader";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <ul>
        <Link to="car001" state={{ age: 20 }}>
          Book
        </Link>
        <li>
          <Link to="car001">Car</Link>
        </li>
        <li>
          <Link to="laptop001">Laptop</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Products;
