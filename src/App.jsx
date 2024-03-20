import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/electronics' element={<ShopCategory catetegory = 'electronics'/>}/>
          <Route path='/fashion' element={<ShopCategory catetegory = 'fashion'/>}/>
          <Route path='/groceries' element={<ShopCategory catetegory = 'groceries'/>}/>
          <Route path='/product' element={<Product/>} >
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route pat='/cart' element={<Cart/>}/>
          <Route pat='/login' element={<LoginSignup/>}/>
        </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
