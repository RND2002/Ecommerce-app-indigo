
import './App.css';
import Navigation from './Customer/Component/Navigation/Navigation';
import Homepage from './Customer/pages/Homepage/Homepage';
import Footer from './Customer/Component/Footer/Footer';
import Product from './Customer/Component/Products/Product';
import ProductDetails from './Customer/Component/productDetails/ProductDetails';
import Cart from './Customer/Component/Cart/Cart';
import CheckOut from './Customer/Component/Checkout/CheckOut';
import Order from './Customer/Component/Order/Order';
import OrderDetails from './Customer/Component/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
      <div>
        
        <div>
          {/* <Homepage/> */}
        
         
        </div>
      </div>
      
    </div>
  );
}

export default App;
