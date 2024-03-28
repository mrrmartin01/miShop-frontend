import PropTypes from "prop-types"
import "./Breadcrum.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Breadcrum = (props) => {
  const { product } = props; // Corrected destructuring
  return (
    <div className="breadcrum">
      HOME <span><MdOutlineKeyboardArrowRight/></span> SHOP <span><MdOutlineKeyboardArrowRight/></span>
      {product && product.category} <span><MdOutlineKeyboardArrowRight/></span> {product && product.name}
    </div>
  );
};

Breadcrum.propTypes = {
  product: PropTypes.any.isRequired,
}

export default Breadcrum;
