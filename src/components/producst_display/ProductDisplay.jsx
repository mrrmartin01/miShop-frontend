import PropTypes from "prop-types";
import "./ProductDisplay.scss";
import { useState } from "react";

const ProductDisplay = (props) => {
  const { product } = props;
  const [image, setImage] = useState(product.thumbnail);

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => handleImageChange(img)}
            />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.title}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${Math.floor(
              (product.discountPercentage / 100) * product.price * 100
            ) / 100 + product.price}
          </div>
          <div className="productdisplay-right-prices-new">${product.price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
          placeat perferendis possimus excepturi consequuntur quisquam
          repudiandae, qui laboriosam nobis totam vero quasi deserunt ullam
          nulla beatae odit officia praesentium!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div className="">S</div>
            <div className="">M</div>
            <div className="">L</div>
            <div className="">XL</div>
            <div className="">XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Electronics, mobile, phones
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.object,
};

export default ProductDisplay;
