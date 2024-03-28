import "./Breadcrum.scss";

const Breadcrum = (props) => {
  const { product } = props; // Corrected destructuring
  return (
    <div className="breadcrum">
      HOME <span></span> SHOP <span></span>
      {product && product.category} <span></span> {product && product.name}
    </div>
  );
};

export default Breadcrum;
