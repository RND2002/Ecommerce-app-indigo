import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../Customer/pages/Homepage/Homepage'
import Navigation from '../Customer/Component/Navigation/Navigation'
import Footer from '../Customer/Component/Footer/Footer'
import OrderDetails from '../Customer/Component/Order/OrderDetails'
import Cart from '../Customer/Component/Cart/Cart'
import Product from '../Customer/Component/Products/Product'
import ProductDetails from '../Customer/Component/productDetails/ProductDetails'
import CheckOut from '../Customer/Component/Checkout/CheckOut'
import Order from '../Customer/Component/Order/Order'

const CustomerRoutes = () => {
  return (
    <div>
        {/* <BrowserRouter> */}
        <div>
        <Navigation/>
        </div>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/:levelOne/:levelTwo/:levelThree" Component={<Product/>}></Route>
          <Route path="/product/:productId" element={<ProductDetails/>}></Route>
          <Route path="/checkout" element={<CheckOut/>}></Route>
          <Route path="/account/order" element={<Order/>}></Route>
          <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>

            {/* <Product/> */}
          {/* <ProductDetails/> */}
          {/* <Cart/> */}
          {/* <CheckOut/> */}
          {/* <Order/> */}
          {/* <OrderDetails></OrderDetails> */}

        </Routes>
        <div>
        <Footer/>
        </div>
        {/* </BrowserRouter> */}
    </div>
  )
}

export default CustomerRoutes
