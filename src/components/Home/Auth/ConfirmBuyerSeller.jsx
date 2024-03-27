import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmBuyerSeller = () => {

    const navigate = useNavigate();

  return (
    <div className='h-[70vh] flex m-0 justify-center items-center'>
        <div className='flex justify-center items-center'>
            <div className='text-5xl text-green-500 font-bold border-2 border-slate-400 p-20 mx-10 shadow-lg shadow-gray-400 cursor-pointer transform transition duration-500 hover:scale-110 rounded-xl' onClick={() => {
                navigate('/buyerregister');
            }}>
                Are You a Buyer!
            </div>
            <div className='text-5xl text-red-500 font-bold border-2 border-slate-400 p-20 mx-10 shadow-lg shadow-gray-400 cursor-pointer transform transition duration-500 hover:scale-110 rounded-xl' onClick={() => {
                navigate('/sellerregister');
            }}>
                Are You a Seller!
            </div>
        </div>
    </div>
  )
}

export default ConfirmBuyerSeller