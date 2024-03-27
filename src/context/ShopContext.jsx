import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_products, setAll_products] = useState("");

  useEffect(() => {
    fetch("http://localhost:5173/src/components/products.json")
      .then((res) => res.json())
      .then((res) => setAll_products(res))
      .catch((err) => {
        alert("failed to fetch " + err.message);
      });
  }, []);

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
