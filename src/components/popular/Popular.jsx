import './Popular.scss';
import productData from '../assets/data';
import Items from '../items/Items'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular in fashion</h1>      
      <hr/>
      <div className="popular--item">
      {productData.map(item => (
          <Items key={item.id} id={item.id} name={item.name} image ={item.image} new_price ={item.new_price} old_price ={item.old_price} />
        ))}
      </div>
    </div>
  )
  // {...item}
}

export default Popular
