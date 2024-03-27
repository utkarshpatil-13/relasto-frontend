import React, { useState } from 'react'
import Bungalow from '../../../assets/Preferences/bungalow.jpg'
import Townhouse from '../../../assets/Preferences/townhouse.jpg'
import Apartment from '../../../assets/Preferences/apartment.jpg'
import Agriculture from '../../../assets/Preferences/agriculture.jpg'
import Villa from '../../../assets/Preferences/villa.jpg'

import '../../Listings/Listings.css'

import {useDispatch} from 'react-redux'
import { setPropertyType } from '../../../store/preferenceSlice.js'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onHandleClick = (propertyType) => {
        console.log(propertyType);
        dispatch(setPropertyType(propertyType));
        navigate('/preferences2');
    }

  return (
    <div>

        <h2 className='text-6xl font-semibold text-center my-10'>Which Property Type do you Prefer?</h2>
        <div className='flex flex-wrap justify-between m-10'>
            <div className='card text-center h-fit shadow-lg shadow-gray-500 cursor-pointer rounded-lg 
                                transform transition duration-500 
                                hover:scale-110' onClick={() => onHandleClick("Bungalow")} >
                <div>
                    <img src={Bungalow} alt="bungalow" />
                </div>
                <div className='text-3xl my-2'>
                    <h2>Bungalow</h2>
                </div>
            </div>
            <div className='card text-center h-fit shadow-lg shadow-gray-500 cursor-pointer rounded-lg 
                                transform transition duration-500 
                                hover:scale-110' onClick={() => onHandleClick("Townhouse")} >
                <div>
                    <img src={Townhouse} alt="townhouse" />
                </div>
                <div className='text-3xl'>
                    <h2>Townhouse</h2>
                </div>
            </div>
            <div className='card text-center h-fit shadow-lg shadow-gray-500 cursor-pointer rounded-lg 
                                transform transition duration-500 
                                hover:scale-110' onClick={() => onHandleClick("Apartment")} >
                <div>
                    <img src={Apartment} alt="apartment" />
                </div>
                <div className='text-3xl'>
                    <h2>Apartment</h2>
                </div>
            </div>
            <div className='card text-center h-fit shadow-lg shadow-gray-500 cursor-pointer rounded-lg 
                                transform transition duration-500 
                                hover:scale-110' onClick={() => onHandleClick("Agriculture")} >
                <div>
                    <img src={Agriculture} alt="agriculture" />
                </div>
                <div className='text-3xl'>
                    <h2>Agriculture</h2>
                </div>
            </div>
            <div className='card text-center h-fit shadow-lg shadow-gray-500 cursor-pointer rounded-lg 
                                transform transition duration-500 
                                hover:scale-110' onClick={() => onHandleClick("Villa")}>
                <div>
                    <img src={Villa} alt="villa" />
                </div>
                <div className='text-3xl'>
                    <h2>Villa</h2>
                </div>
            </div>
        </div>

    </div>
  )
}

export default index