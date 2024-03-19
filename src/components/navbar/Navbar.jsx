import {useState} from "react"
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";

import './Navbar.scss'
import logo from '../assets/smiley.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav--logo"> 
        <img src={logo} alt="" />
        <p>miShop</p>
      </div>
      <ul className='nav--menu'>
        <li onClick={() => {setMenu("shop")}}>
            <Link to={'/'}>Shop</Link> {menu === "shop"? <hr/> : <></>}
        </li>
        <li onClick={() => {setMenu("electronics")}}>
            <Link to={'/electronics'}>Electronics</Link> {menu === "electronics"? <hr/> : <></>}
        </li>
        <li onClick={() => {setMenu("fashion")}}>
           <Link to={'fashion'}>Fashion</Link>  {menu === "fashion"? <hr/> : <></>}
        </li>
        <li onClick={() => {setMenu("groceries")}}>
            <Link to={'groceries'}>Groceries</Link> {menu === "groceries"? <hr/> : <></>}
        </li>
      </ul>
      <div className="nav--login--cart">
        <Link to={'/login'}>
            <button>Login</button>
        </Link>
        <Link to={'/cart'}>
        <span><IoCart /></span>
        </Link>
        <div className="nav--cart--count">0</div>
      </div>
    </div>
  )
}

export default Navbar
