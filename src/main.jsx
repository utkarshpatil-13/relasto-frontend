import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import BuyerRegister from './components/Home/Auth/BuyerRegister.jsx'
import BuyerLogin from './components/Home/Auth/BuyerLogin.jsx'
import Hero from './components/Home/Hero'
import ConfirmBuyerSeller from './components/Home/Auth/ConfirmBuyerSeller.jsx'
import SellerLogin from './components/Home/Auth/SellerLogin.jsx'
import SellerRegister from './components/Home/Auth/SellerRegister.jsx'
import Listings from './components/Listings/Listings.jsx'
import PropertyView from './components/Listings/PropertyView.jsx'
import Preferences from './components/Home/Preferences/index.jsx'
import Preferences2 from './components/Home/Preferences/preference2.jsx'

import { Provider } from 'react-redux';
import store from './store/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Hero />} />
      <Route path='/confirmbuyerseller' element={<ConfirmBuyerSeller />}/>
      <Route path='/buyerlogin' element={<BuyerLogin />}/>
      <Route path='/buyerregister' element={<BuyerRegister />} />
      <Route path='/sellerlogin' element={<SellerLogin />}/> 
      <Route path='/sellerregister' element={<SellerRegister />} />
      <Route path='/listings' element={<Listings/>}/>
      <Route path='/propertyView' element={<PropertyView/>}/>
      <Route path='/preferences' element={<Preferences/>}/>
      <Route path='/preferences2' element={<Preferences2/>}/>
    </Route>
  )
);

// localStorage.setItem('buyerLoggedIn', false);
// localStorage.setItem('buyerId', undefined);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

