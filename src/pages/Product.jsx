import { useContext } from "react"
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrum/Breadcrum";
import { ShopContext } from "../context/ShopContext";
import ProductDisplay from "../components/producst_display/ProductDisplay";

const Product = () => {
  const{all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find ((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product = {product}/>
    </div>
  )
}

export default Product
