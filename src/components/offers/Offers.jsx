import './Offers.scss';
import Offer_img from '../assets/Offer.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers--left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>Only on best sellers products</p>
            <button>Check Now</button>
        </div>
        <div className="offers--right">
            <img src={Offer_img} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
