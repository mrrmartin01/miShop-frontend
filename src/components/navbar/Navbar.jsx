import { IoCart } from "react-icons/io5";

import './Navbar.scss'
import logo from '../assets/smiley.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav--logo">
        <img src={logo} alt="" />
        <p>miShop</p>
      </div>
      <ul className='nav--menu'>
        <li>Shop <hr/></li>
        <li>Electronics</li>
        <li>Fashion</li>
        <li>Groceries</li>
      </ul>
      <div className="nav--login--cart">
        <button>Login</button>
        <span><IoCart /></span>
      </div>
    </div>
  )
}

export default Navbar
