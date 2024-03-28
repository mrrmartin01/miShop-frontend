import "./CategoryHolder.scss";
import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";


const CategoryHolder = (props) => {
  return (
    <div className="category">
      <img src={props.images[1]} alt="" />
      <p>{props.brand}</p>
      <p>{props.title}</p>
    <span><FaRegStar/>{ Math.floor(props.rating)} </span>
      <div className="category--prices">
        <div className="category--price--brand">{props.discountPercentage ? props.discountPercentage + '%': null}</div>
        <div className="category--price">
        ${props.price}
        </div>
      </div>
    </div>
  );
};

CategoryHolder.propTypes = {
  images: PropTypes.string,
  title: PropTypes.string,
  brand: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  discountPercentage: PropTypes.number,

}

export default CategoryHolder;
