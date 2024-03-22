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
          <Items key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Popular
