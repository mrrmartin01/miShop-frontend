import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/footer/Footer'
import fashion_banner from './components/assets/fash-1.jpg'
import decor_banner from './components/assets/fash-1.jpg'
import electronics_banner from './components/assets/new_component/MacBook Pro.jpg'
import groceries_banner from './components/assets/new_component/moét.jpg'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/electronics' element={<ShopCategory banner = {electronics_banner} category = 'electronics'/>}/>
          <Route path='/decor' element={<ShopCategory banner = {decor_banner} category = 'decor'/>}/>
          <Route path='/fashion' element={<ShopCategory banner ={fashion_banner} category = 'fashion'/>}/>
          <Route path='/groceries' element={<ShopCategory banner ={groceries_banner} category = 'groceries'/>}/>
          <Route path='/product' element={<Product/>} >
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
