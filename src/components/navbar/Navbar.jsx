import {useState} from "react"
import { Link } from "react-router-dom";
import { IoCart } from "react-icons/io5";

import './Navbar.scss'
import logo from '../assets/smiley.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
      setShowMenu(!showMenu);
    };

    const closeToggle = () => {
      setShowMenu(!handleMenuToggle)
    }

  return (
    <>
    <div className='navbar'>
      <div className="nav--logo" id="nav-logo"> 
        <img src={logo} alt="logo" />
        <p>miShop</p>
      </div>
      

      <ul className='nav--menu' id="nav-menu">
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
            <Link to={'/groceries'}>Groceries</Link> {menu === "groceries"? <hr/> : <></>}
        </li>
      </ul>

      <div className="nav--login--cart" id="nav-login-cart">
        <Link to={'/login'}>
            <button>Login</button>
        </Link>
        <Link to={'/cart'}>
        <span><IoCart /></span>
        </Link>
        <div className="nav--cart--count">0</div>
        <div className="hamburger" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

      <div className={`flex-nav${showMenu ? " show" : ""}`}>
      <ul className='nav--flex' id="nav-flex">
        <div className = 'nav--close'>
      <span onClick={closeToggle}>x</span>
        </div>
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
            <Link to={'/groceries'}>Groceries</Link> {menu === "groceries"? <hr/> : <></>}
        </li>
        <div className="btn">
        <Link to={'/login'}>
            <button>Login</button>
        </Link>
        </div>
      </ul>
    </div>
</>
  )
}

export default Navbar
