import "./CategoryHolder.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";

const CategoryHolder = (props) => {
  const renderStars = () => {
    const fullStars = Math.floor(props.rating);
    const remainder = props.rating - fullStars;
    let halfStars = 0;

    if (remainder >= 0.2 && remainder > 0.5) {
      halfStars = 1;
    }

    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star filled" />);
    }

    if (halfStars === 1) {
      stars.push(<FaStar key="half" className="star half" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star" />);
    }

    return stars;
  };

  return (
    <div className="category">
      <Link to={`/product/${props.id}`}>
        <img src={props.images[1]} alt="" />
      </Link>
      <p>{props.brand}</p>
      <p>{props.title}</p>
      <div className="stars">{renderStars()}<span>{props.rating}</span></div>
      <div className="category--prices">
        <div className="category--price--brand">
          {props.discountPercentage ? props.discountPercentage + "%" : null}  
          <span>-${Math.floor((props.discountPercentage / 100) * props.price * 100) / 100}</span>
        </div>
        <div className="category--price"> ${props.price}
        </div>
      </div>
    </div>
  );
};

CategoryHolder.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  brand: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  discountPercentage: PropTypes.number,
  id: PropTypes.string.isRequired,
};

export default CategoryHolder;
