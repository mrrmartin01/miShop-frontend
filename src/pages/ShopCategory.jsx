import PropTypes from "prop-types";
import { useContext } from 'react';
import './scss/ShopCategory.scss';
import { ShopContext } from '../context/ShopContext';
import items from "../components/items/Items";

const ShopCategory = (props) => {
  const{fetchData} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 100 products
        </p>
        <div className="shopcategory-sort">
        Sort by <span>dropdown-icon</span>
      </div>
      </div>
      <div className="shopcategory-products">
        {fetchData.map((item) =>{
          if (props.category === items.category){
            return <Items key ={item.id} {...item}/>
          }
        else{
          return null
        }
        })}
      </div>
    </div>
  )
}
ShopCategory.propTypes = {
  banner: PropTypes.any
}

export default ShopCategory
