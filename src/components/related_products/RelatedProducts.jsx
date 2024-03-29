import PropTypes from "prop-types";
import "./RelatedProducts.scss";
import { useContext} from "react";
import { ShopContext } from "../../context/ShopContext";
import CategoryHolder from "../category_holder/CategoryHolder";

const RelatedProducts = ({ family }) => {
  const { all_products } = useContext(ShopContext);

   

  const relatedProducts = all_products.filter(
    (item) => item.family === family
  );

  return (
    <div className="relatedproducts">
      <div className="headers">
        <h1>RELATED PRODUCTS</h1>
        <hr />
      </div>
      <div className="relatedproducts-item">
        {/* Map through filtered products */}
        {relatedProducts.map((item,i) => (
          <CategoryHolder key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

RelatedProducts.propTypes = { 
    family: PropTypes.string,
} 

export default RelatedProducts;
