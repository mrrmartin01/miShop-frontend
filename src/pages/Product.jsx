import { useContext } from "react"
import ShopCategory from "./ShopCategory"
import { useParams } from "react-router-dom";

const Product = () => {
  const {all_products} = useContext(ShopCategory);
  const {productId} = useParams();
  const product = all_products.find ((e) => e.id === Number(productId))
  return (
    <div>
      
    </div>
  )
}

export default Product
