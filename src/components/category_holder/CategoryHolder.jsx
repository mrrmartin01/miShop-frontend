import "./CategoryHolder.scss";
import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";


const CategoryHolder = (props) => {
  return (
    <div className="item">
      <img src={props.images[0]} alt="" />
      <p>{props.title}</p>
    <span><FaRegStar/> * {Math.floor(props.rating)} </span>
      <div className="item--prices">
        <div className="item--price--brand">{props.old_price ? `$${props.old_price}` : null}</div>
        <div className="item--price">
        ${props.price}
        </div>
      </div>
    </div>
  );
};

CategoryHolder.propTypes = {
  images: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  old_price: PropTypes.number,

}

export default CategoryHolder;
