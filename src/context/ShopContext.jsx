import PropTypes from "prop-types";
import { createContext } from "react";
import all_products from "../components/assets/products.js";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  

  const ContextValue = { all_products };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ShopContextProvider;
