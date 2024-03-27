import "./Items.scss";
import PropTypes from "prop-types"

const Items = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item--prices">
        <div className="item--price--new">${props.new_price}</div>
        <div className="item--price--old">
          {props.old_price ? `$${props.old_price}` : null}
        </div>
      </div>
    </div>
  );
};

Items.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  new_price: PropTypes.number,
  old_price: PropTypes.number,

}

export default Items;
