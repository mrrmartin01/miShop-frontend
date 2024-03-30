import { useContext } from "react";
import "./CartItems.scss";
import { ShopContext } from "../../context/ShopContext";
import { MdRemoveShoppingCart } from "react-icons/md";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-header">
        <p className="cartitems-column">Products</p>
        <p className="cartitems-column">Title</p>
        <p className="cartitems-column">Price</p>
        <p className="cartitems-column">Quantity</p>
        <p className="cartitems-column">Total</p>
        <p className="cartitems-column">Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="cartitems-item" key={e.id}>
              <div className="cartitems-row">
                <img className="cartitems-image" src={e.images[1]} alt="" />
                <p className="cartitems-column">{e.title}</p>
                <p className="cartitems-column">${e.price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p className="cartitems-column">{e.price * cartItems[e.id]}</p>
                <span
                  className="cartitems-remove"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                >
                  <MdRemoveShoppingCart />
                </span>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div className="">
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${0}</h3>
            </div>
          </div>
          <div className="btn">
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
