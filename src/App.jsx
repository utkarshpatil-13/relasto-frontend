import { useState } from 'react'
import './App.css'
import Navbar from './components/Home/Navbar'
import { Outlet } from 'react-router-dom'
import { BuyerContextProvider } from './contexts/BuyerContext'
import { SellerContextProvider } from './contexts/SellerContext'

function App() {

  return (
    <BuyerContextProvider>
      <SellerContextProvider>
        <Navbar />        
        <Outlet/>
      </SellerContextProvider>
    </BuyerContextProvider>
  )
}

export default App
