import { Outlet, useParams, useLocation } from "react-router-dom";
import MainHeader from "./../components/MainHeader";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const params = useParams();
  const dt = useLocation();

  console.log(dt.state.age);
  return (
    <>
      <section>
        <h1>Product Detail</h1>
        <p>{params.pid}</p>
      </section>
      <Outlet />
    </>
  );
};

export default ProductDetail;
