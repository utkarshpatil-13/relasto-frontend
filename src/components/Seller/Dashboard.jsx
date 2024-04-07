import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { FiMapPin } from 'react-icons/fi';

import { IoBedOutline } from 'react-icons/io5';
import { BiShower } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi';
import { FaRupeeSign } from 'react-icons/fa';


const Dashboard = () => {

  const property = [{
    "title": "Spacious Villa with Pool in Kolhapur",
    "description": "A spacious villa with a swimming pool, perfect for relaxation in Kolhapur.",
    "propertyType": "Villa",
    "images": ["2.jpg", "2.jpg", "2.jpg"],
    "rooms": {
        "bedrooms": 5,
        "bathrooms": 4,
        "toilets": 3,
        "hall": 1,
        "kitchen": 1,
        "balconies": 3,
        "dryBalcony": 1,
        "basement": false,
        "guestRoom": true,
        "studyRoom": true,
        "yard": "COURTYARD"
    },
    "area": 2800,
    "price": 25000000,
    "city": "Kolhapur",
    "state": "Maharashtra",
    "country": "India",
    "address": "101 Pine Street, Kolhapur",
    "yearBuilt": 2014,
    "sellerId": "Abc",
    "isRental": false,
    "isSold": false
},{
  "title": "Spacious Villa with Pool in Kolhapur",
  "description": "A spacious villa with a swimming pool, perfect for relaxation in Kolhapur.",
  "propertyType": "Villa",
  "images": ["2.jpg", "2.jpg", "2.jpg"],
  "rooms": {
      "bedrooms": 5,
      "bathrooms": 4,
      "toilets": 3,
      "hall": 1,
      "kitchen": 1,
      "balconies": 3,
      "dryBalcony": 1,
      "basement": false,
      "guestRoom": true,
      "studyRoom": true,
      "yard": "COURTYARD"
  },
  "area": 2800,
  "price": 25000000,
  "city": "Kolhapur",
  "state": "Maharashtra",
  "country": "India",
  "address": "101 Pine Street, Kolhapur",
  "yearBuilt": 2014,
  "sellerId": "Abc",
  "isRental": false,
  "isSold": false
},{
  "title": "Spacious Villa with Pool in Kolhapur",
  "description": "A spacious villa with a swimming pool, perfect for relaxation in Kolhapur.",
  "propertyType": "Villa",
  "images": ["2.jpg", "2.jpg", "2.jpg"],
  "rooms": {
      "bedrooms": 5,
      "bathrooms": 4,
      "toilets": 3,
      "hall": 1,
      "kitchen": 1,
      "balconies": 3,
      "dryBalcony": 1,
      "basement": false,
      "guestRoom": true,
      "studyRoom": true,
      "yard": "COURTYARD"
  },
  "area": 2800,
  "price": 25000000,
  "city": "Kolhapur",
  "state": "Maharashtra",
  "country": "India",
  "address": "101 Pine Street, Kolhapur",
  "yearBuilt": 2014,
  "sellerId": "Abc",
  "isRental": false,
  "isSold": false
},{
  "title": "Spacious Villa with Pool in Kolhapur",
  "description": "A spacious villa with a swimming pool, perfect for relaxation in Kolhapur.",
  "propertyType": "Villa",
  "images": ["2.jpg", "2.jpg", "2.jpg"],
  "rooms": {
      "bedrooms": 5,
      "bathrooms": 4,
      "toilets": 3,
      "hall": 1,
      "kitchen": 1,
      "balconies": 3,
      "dryBalcony": 1,
      "basement": false,
      "guestRoom": true,
      "studyRoom": true,
      "yard": "COURTYARD"
  },
  "area": 2800,
  "price": 25000000,
  "city": "Kolhapur",
  "state": "Maharashtra",
  "country": "India",
  "address": "101 Pine Street, Kolhapur",
  "yearBuilt": 2014,
  "sellerId": "Abc",
  "isRental": false,
  "isSold": false
},{
  "title": "Spacious Villa with Pool in Kolhapur",
  "description": "A spacious villa with a swimming pool, perfect for relaxation in Kolhapur.",
  "propertyType": "Villa",
  "images": ["2.jpg", "2.jpg", "2.jpg"],
  "rooms": {
      "bedrooms": 5,
      "bathrooms": 4,
      "toilets": 3,
      "hall": 1,
      "kitchen": 1,
      "balconies": 3,
      "dryBalcony": 1,
      "basement": false,
      "guestRoom": true,
      "studyRoom": true,
      "yard": "COURTYARD"
  },
  "area": 2800,
  "price": 25000000,
  "city": "Kolhapur",
  "state": "Maharashtra",
  "country": "India",
  "address": "101 Pine Street, Kolhapur",
  "yearBuilt": 2014,
  "sellerId": "Abc",
  "isRental": false,
  "isSold": false
},{
  "title": "Spacious Villa with Pool in Kolhapur",
  "description": "A spacious villa with a swimming pool, perfect for relaxation in Kolhapur.",
  "propertyType": "Villa",
  "images": ["2.jpg", "2.jpg", "2.jpg"],
  "rooms": {
      "bedrooms": 5,
      "bathrooms": 4,
      "toilets": 3,
      "hall": 1,
      "kitchen": 1,
      "balconies": 3,
      "dryBalcony": 1,
      "basement": false,
      "guestRoom": true,
      "studyRoom": true,
      "yard": "COURTYARD"
  },
  "area": 2800,
  "price": 25000000,
  "city": "Kolhapur",
  "state": "Maharashtra",
  "country": "India",
  "address": "101 Pine Street, Kolhapur",
  "yearBuilt": 2014,
  "sellerId": "Abc",
  "isRental": false,
  "isSold": false
},{
  "title": "Spacious Villa with Pool in Kolhapur",
  "description": "A spacious villa with a swimming pool, perfect for relaxation in Kolhapur.",
  "propertyType": "Villa",
  "images": ["2.jpg", "2.jpg", "2.jpg"],
  "rooms": {
      "bedrooms": 5,
      "bathrooms": 4,
      "toilets": 3,
      "hall": 1,
      "kitchen": 1,
      "balconies": 3,
      "dryBalcony": 1,
      "basement": false,
      "guestRoom": true,
      "studyRoom": true,
      "yard": "COURTYARD"
  },
  "area": 2800,
  "price": 25000000,
  "city": "Kolhapur",
  "state": "Maharashtra",
  "country": "India",
  "address": "101 Pine Street, Kolhapur",
  "yearBuilt": 2014,
  "sellerId": "Abc",
  "isRental": false,
  "isSold": false
},{
  "title": "Spacious Villa with Pool in Kolhapur",
  "description": "A spacious villa with a swimming pool, perfect for relaxation in Kolhapur.",
  "propertyType": "Villa",
  "images": ["2.jpg", "2.jpg", "2.jpg"],
  "rooms": {
      "bedrooms": 5,
      "bathrooms": 4,
      "toilets": 3,
      "hall": 1,
      "kitchen": 1,
      "balconies": 3,
      "dryBalcony": 1,
      "basement": false,
      "guestRoom": true,
      "studyRoom": true,
      "yard": "COURTYARD"
  },
  "area": 2800,
  "price": 25000000,
  "city": "Kolhapur",
  "state": "Maharashtra",
  "country": "India",
  "address": "101 Pine Street, Kolhapur",
  "yearBuilt": 2014,
  "sellerId": "Abc",
  "isRental": false,
  "isSold": false
}]

const formatPrice = (price) => {
  const numPrice = Number(price);
  if (numPrice >= 10000000) {
      return (numPrice / 10000000).toFixed(2) + ' Cr';
  }
  if (numPrice >= 100000) {
      return (numPrice / 100000).toFixed(2) + ' Lakhs';
  }
  return numPrice.toLocaleString();
};

  const [propertyIds, setPropertyIds] = useState([]);
  const [response, setResponse] = useState([]);

  const sellerId = localStorage.getItem('sellerId');

  useEffect(() => {
    fetchSellerDetails(sellerId);
    propertyIds.map((property) => {
      fetchPropertyDetails(property);
    })
  }, []);

  const fetchPropertyDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/property/id/${id}`, {
        method: "GET"
      })

      const data = await response.json();

      if (response.ok) {
        setResponse(previous => [...previous, data]);
      }
      else {
        console.log("Property response failed!");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const fetchSellerDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/seller/${id}`, {
        method: "GET",
      })

      const data = await response.json();

      if (response.ok) {
        setPropertyIds(data.properties);
      }
      else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error.message);
    }
  }



  return (
    <div>
      <h3 className='text-5xl text-center mt-10 mb-20'>Welcome To The Seller's Dashboard</h3>
      <div className='flex justify-evenly mt-10 '>
        <Link to='/sellerprofile'>
          <button type="submit" className='text-xl w-64 rounded-lg bg-black text-white p-3 px-8 active:bg-gray-700 active:duration-200 active:transition-all'>Edit Profile</button>
        </Link>
        <div>
          <button type="submit" className='text-xl w-64 rounded-lg bg-black text-white p-3 px-8 active:bg-gray-700 active:duration-200 active:transition-all'>Check Sales</button>
        </div>
        <div>
          <button
            id="propertyEditDropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-xl w-64 rounded-lg bg-black text-white p-3 px-8 active:bg-gray-700 active:transition-all"
            type="button"
            onClick={() => {
              var propertiesEditDropdown = document.getElementById('propertiesEditDropdown');
              propertiesEditDropdown.classList.toggle('hidden');
            }}
          >
            Properties
            <svg className="w-3.5 h-2.5 mt-[-15px] ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="propertiesEditDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 transition-all duration-700 ease-in-out">
            <ul className="h-80 w-72 px-3 pb-3 mt-3 overflow-y-auto text-2xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <Link to='/addproperty'>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                  <p>Add Property</p>
                </li>
              </Link>
              <Link to='/'>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                  <p>Update Property</p>
                </li>
              </Link>
              <Link to='/'>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                  <p>Delete Property</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>

        </div>
        <h3 className='text-5xl text-center my-10'>Your Listings</h3>
        <div className="card-list">
          {property.map((property, index) =>
          (
            <div className='border-2 border-slate-200 rounded-xl card' key={index} item={property}>
              <div className='flex my-3 text-xl justify-center'>
                <img className='rounded-tl-lg rounded-tr-lg' src="https://source.unsplash.com/470x400/?resident houses" alt="" />
              </div>
              <div className='flex my-3 text-xl justify-center'>
                <div className='relative top-2 mr-2 text-[20px]'>
                  <FiMapPin />
                </div>
                <p className='text-2xl font-bold'>{property.address}</p>
              </div>
              <div className='grid grid-rows-2 grid-flow-col gap-4 justify-around'>
                <div className='flex'>
                  <div className='relative top-1 mr-2 text-[20px]'>
                    <IoBedOutline />
                  </div>
                  <p className='text-[20px]'>{property.rooms.bedrooms} Bed Room</p>
                </div>
                <div className='flex'>
                  <div className='relative top-1 mr-2 text-[20px]'>
                    <BiShower />
                  </div>
                  <p className='text-[20px]'>{property.rooms.bathrooms} Bath</p>
                </div>
                <div className='flex'>
                  <div className='relative top-1 mr-2 text-[20px]'>
                    <BiTransfer />
                  </div>
                  <p className='text-[20px]'>{property.area} sqft</p>
                </div>
                <div className='flex'>
                  <div className='relative top-1 mr-2 text-[20px]'>
                    <FaUsers />
                  </div>
                  <p className='text-[20px]'>{property.rooms.balconies} Balconies</p>
                </div>
              </div>
              <div className='flex justify-center'>
                <Link to='/propertyView'>
                  <div className='text-2xl w-44 text-center mt-3 mr-28 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700'>Explore..</div>
                </Link>
                <div className='flex relative top-4'>
                  <div className='relative top-5 text-[20px]'>
                    <FaRupeeSign />
                  </div>
                  <p className='text-2xl font-bold relative top-3'>{formatPrice(property.price)}</p>
                </div>
              </div>
            </div>
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard