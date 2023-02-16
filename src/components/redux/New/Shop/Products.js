import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "1",
    title: "Product 1",
    description: "This is a first Product 1 - amazing!",
    price: 10,
  },
  {
    id: "2",
    title: "Product 2",
    description: "This is a first Product 2 - amazing!",
    price: 20,
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.length > 0 &&
          DUMMY_PRODUCTS.map((element) => {
            return <ProductItem key={element.id} item={element} />;
          })}
      </ul>
    </section>
  );
};

export default Products;
