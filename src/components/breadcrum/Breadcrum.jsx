import "./Breadcrum.scss";

const Breadcrum = (props) => {
  const { product } = props.product;
  return (
    <div className="breadcrum">
      HOME <span></span> SHOP <span></span>
      {product.category}
    </div>
  );
};

export default Breadcrum;
