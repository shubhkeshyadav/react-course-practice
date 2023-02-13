import Cart from "./Cart/Cart";
import Layout from "./Layout/Layout";
import Products from "./Shop/Products";
import { useSelector } from "react-redux";

function RNewRoot() {
  const showCart = useSelector((state) => state.cartUi.showCart);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default RNewRoot;
