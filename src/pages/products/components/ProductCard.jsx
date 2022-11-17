import image from "../../../assets/images/image.jpg";

const ProductCard = () => {
  return (
    <div className="ProductCard">
      <div className="image">
        <img src={image} />
      </div>
      <div className="text">
        <h3>Hoodie</h3>
        <p>Kshs 2500</p>
      </div>
    </div>
  );
};

export default ProductCard;
