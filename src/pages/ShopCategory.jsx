import PropTypes from "prop-types";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useContext } from 'react';
import './scss/ShopCategory.scss';
import { ShopContext } from '../context/ShopContext';
import CategoryHolder from "../components/category_holder/CategoryHolder";



const ShopCategory = (props) => {
  const{all_products} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 100 products
        </p>
        <div className="shopcategory-sort">
        Sort by <span><IoIosArrowDropdownCircle/></span>
      </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item) =>{
          if (props.category === item.category){
            return <CategoryHolder key={item.key} {...item}/>
          }
        else{
          return null
        }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
ShopCategory.propTypes = {
  banner: PropTypes.any,
  category:PropTypes.string
}

export default ShopCategory
