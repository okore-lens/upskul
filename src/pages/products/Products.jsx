import ProductCard from "./components/ProductCard";

import "./products.scss";

const Products = () => {
  return (
    <div className="Products">
      <div className="left">Left</div>
      <div className="right">
        <div className="product-cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
