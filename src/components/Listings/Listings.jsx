import React, { useContext, useEffect, useState } from 'react'
import BuyerContext from '../../contexts/BuyerContext'

import { IoArrowForward } from 'react-icons/io5';
import { FiMapPin } from 'react-icons/fi';

import { IoBedOutline } from 'react-icons/io5';
import { BiShower } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi';
import { FaRupeeSign } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import './Listings.css'

const Listings = () => {
    const states = [
        "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Ladakh",
        "Lakshadweep",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Puducherry",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
    ];

    const citiesByState = ["Port Blair", "Car Nicobar", "Mayabunder",
        // Andhra Pradesh
        "Visakhapatnam", "Vijayawada", "Tirupati",
        // Arunachal Pradesh
        "Itanagar", "Naharlagun", "Pasighat",
        // Assam
        "Guwahati", "Silchar", "Dibrugarh",
        // Bihar
        "Patna", "Gaya", "Bhagalpur",
        // Chandigarh
        "Chandigarh",
        // Chhattisgarh
        "Raipur", "Bhilai", "Bilaspur",
        // Dadra and Nagar Haveli and Daman and Diu
        "Daman", "Silvassa",
        // Delhi
        "New Delhi", "Delhi", "Noida",
        // Goa
        "Panaji", "Margao", "Vasco da Gama",
        // Gujarat
        "Ahmedabad", "Surat", "Vadodara",
        // Haryana
        "Gurgaon", "Faridabad", "Panipat",
        // Himachal Pradesh
        "Shimla", "Manali", "Dharamshala",
        // Jammu and Kashmir
        "Srinagar", "Jammu", "Leh",
        // Jharkhand
        "Ranchi", "Jamshedpur", "Dhanbad",
        // Karnataka
        "Bangalore", "Mysore", "Hubli",
        // Kerala
        "Kochi", "Thiruvananthapuram", "Kozhikode",
        // Lakshadweep
        "Kavaratti",
        // Madhya Pradesh
        "Indore", "Bhopal", "Jabalpur",
        // Maharashtra
        "Mumbai", "Pune", "Kolhapur",
        // Manipur
        "Imphal", "Thoubal", "Bishnupur",
        // Meghalaya
        "Shillong", "Tura", "Jowai",
        // Mizoram
        "Aizawl", "Lunglei", "Champhai",
        // Nagaland
        "Kohima", "Dimapur", "Mokokchung",
        // Odisha
        "Bhubaneswar", "Cuttack", "Rourkela",
        // Puducherry
        "Pondicherry", "Karaikal", "Mahe",
        // Punjab
        "Ludhiana", "Amritsar", "Jalandhar",
        // Rajasthan
        "Jaipur", "Udaipur", "Jodhpur",
        // Sikkim
        "Gangtok", "Namchi", "Mangan",
        // Tamil Nadu
        "Chennai", "Coimbatore", "Madurai",
        // Telangana
        "Hyderabad", "Warangal", "Nizamabad",
        // Tripura
        "Agartala", "Udaipur", "Khowai",
        // Uttar Pradesh
        "Lucknow", "Kanpur", "Agra",
        // Uttarakhand
        "Dehradun", "Haridwar", "Rishikesh",
        // West Bengal
        "Kolkata", "Asansol", "Siliguri",
    ];
    
    const propType = ["Bungalow", "Apartment", "Villa", "Townhouse", "Agricultural"];
    


    // const { buyerId, buyerLoggedIn } = useContext(BuyerContext);

    const buyerLoggedIn = localStorage.getItem('buyerLoggedIn') === 'true';
    const buyerId = localStorage.getItem('buyerId');
    
    const [pageNo, setPageNo] = useState(1);
    
    const [response, setResponse] = useState([]);


     // storing filter values for query
    const [selectedPropertyType, setSelectedPropertyType] = useState([]);
    const [selectedState, setSelectedState] = useState('State');
    const [selectedCity, setSelectedCity] = useState([]);

    // Area
    const [minArea, setMinArea] = useState(1);
    const [maxArea, setMaxArea] = useState(1);
    
    // Price
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(1);
    
    
    useEffect(() => {
        getInitialPropertyData();
    }, [pageNo]);
    
    useEffect(() => {
        loadListings();
    }, [pageNo, selectedCity, selectedPropertyType, selectedState, minArea, maxArea]);
    
    const accessToken = localStorage.getItem('accessToken');
    const getInitialPropertyData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/property/initial-req/?page=${pageNo}&limit=9`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            const res = await response.json();
            const properties = res.data.properties;
            const preferences = res.data.preferences;
    
            if (response.ok) {
                console.log(preferences);
                setSelectedPropertyType(preferences.propertyType);
                setSelectedState(preferences.state);
                setSelectedCity(preferences.city);
                setMinArea(preferences.area.min);
                setMaxArea(preferences.area.max);
                setMinPrice(preferences.price.min);
                setMaxPrice(preferences.price.max);

                console.log(properties);
                setResponse(properties);
            }
        } catch (error) {
            console.log("Error in fetching the data ", error);
        }
    };
    


    const loadListings = async () => {
        const selectedCityString = Array.isArray(selectedCity) ? selectedCity.join(',') : selectedCity;
        const selectedPropertyTypeString = Array.isArray(selectedPropertyType) ? selectedPropertyType.join(',') : selectedPropertyType;
    
        const headers = new Headers();
        headers.append('selected-city', selectedCityString);
        headers.append('selected-property-type', selectedPropertyTypeString);
    
        try {
            const res = await fetch(`http://localhost:4000/api/property/filters/?state=${selectedState}&minArea=${minArea}&maxArea=${maxArea}&page=${pageNo}&limit=9`, {
                method: 'GET',
                headers: headers
            });
            const data = await res.json();

            console.log(data);

            if(res.ok){
                setResponse(data);
            }
            else{
                setResponse([]);
            }

        } catch (error) {
            console.log("Error in fetching the data ", error);
        }
    }
    


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


    const onHandleCityCheckBoxClick = (event) => {
        const {value, checked} = event.target;

        if(checked){
            setSelectedCity([...selectedCity, value]);
        }
        else{
            setSelectedCity(selectedCity.filter((city) => city !== value));
        }

    }

    const onHandlePropertyTypeCheckBoxClick = (event) => {
        const {value, checked} = event.target;

        if(checked){
            setSelectedPropertyType([...selectedPropertyType, value]);
        }
        else{
            setSelectedPropertyType(selectedPropertyType.filter((prop) => prop !== value));
        }

    }


    const applyFilter = async () => {
        const drawer_navigation = document.getElementById('drawer-navigation');
        drawer_navigation.classList.toggle('left-72');
        
        loadListings();
    }
    
    


    return (
        <>
            {
                buyerLoggedIn &&
                <div className='px-5' id='main'>
                <div id="drawer-navigation" class="fixed top-0 left-0 z-40 w-72 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
                        <h5 id="drawer-navigation-label" class="text-2xl font-semibold text-gray-500 uppercase dark:text-gray-400">Add Filters</h5>
                        <div class="py-4 overflow-y-auto">
                            <ul class="space-y-2 font-medium">

                                {/* Property Type */}

                                <li className='ml-2 my-2'>
                                    <button id="propertyTypeDropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button" 
                                    
                                    onClick={() => {
                                        var propertyTypeDropdown = document.getElementById('propertyTypeDropdown');
                                        propertyTypeDropdown.classList.toggle('hidden');
                                    }}
                                    
                                    >

                                    Property Type
                                    
                                    <svg class="w-3.5 h-3.5 mt-2 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>

                                    <div id="propertyTypeDropdown" class="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                                        <ul class="h-72 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                                            {
                                                propType.map((prop, index) => (
                                                    <li key={index}>
                                                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                            <input id={`checkbox-${index}`} type="checkbox" value={prop} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 cursor-pointer" onChange={(e) => onHandlePropertyTypeCheckBoxClick(e)} />
                                                            <label for={`checkbox-${index}`} class="w-full ms-2 text-xl font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">{prop}</label>
                                                        </div>
                                                    </li>
                                                ))

                                            }
                                        </ul>
                                    </div>
                                </li>

                                {/* States */}

                                <li className='ml-2 my-2'>

                                    <button id="stateDropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button" 
                                    
                                    onClick={() => {
                                        var stateDropdown = document.getElementById('stateDropdown');
                                        stateDropdown.classList.toggle('hidden');
                                    }}>
                                    
                                    {selectedState}
                                    
                                    <svg class="w-3.5 h-3.5 mt-2 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>

                                    <div id="stateDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul class="h-72 w-56 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                            {
                                                states.map((state, index) => (
                                                    <li key={index} onClick={() => setSelectedState(state)}>
                                                        <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">{state}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                                    
                                {/* Cities */}

                                <li className='ml-2 my-2'>

                                    <button id="cityDropdownSearchButton" data-dropdown-toggle="dropdownSearch" class="text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" 
                                    
                                    onClick={() => {
                                        var citySearch = document.getElementById('citySearch');
                                        citySearch.classList.toggle('hidden');
                                    }}>
                                    
                                    City
                                    
                                    <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg></button>

                                    <div id="citySearch" class="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                                        <ul class="h-72 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                                            {
                                                citiesByState.map((city, index) => (
                                                    <li key={index}>
                                                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                            <input id={`checkbox-${index}`} type="checkbox" value={city} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 cursor-pointer" onChange={(e) => onHandleCityCheckBoxClick(e)} />
                                                            <label for={`checkbox-${index}`} class="w-full ms-2 text-xl font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">{city}</label>
                                                        </div>
                                                    </li>
                                                ))

                                            }
                                        </ul>
                                    </div>
                                </li>

                                {/* Area */}

                                <li className='ml-2 my-2'>
                                    <label>
                                        <p className='text-2xl my-1'>Min Area (sqft):</p>

                                        <input class="text-gray-600 w-48 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" placeholder='Enter min area' type="number" value={minArea} onChange={(e) => setMinArea(e.target.value)} />
                                    </label>
                                    <label>
                                        <p className='text-2xl my-1'>Max Area (sqft):</p>
                                        <input class="text-gray-600 w-48 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="number" value={maxArea} onChange={(e) => setMaxArea(e.target.value)} />
                                    </label>
                                </li>
                            </ul>
                            <button className='mt-4 ml-2 text-[22px] w-44 text-center bg-black text-white h-14 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700' 
                            
                            onClick={() => applyFilter()}
                            
                            >Apply Filters</button>
                        </div>
                    </div>

                    <h2 className='text-6xl my-5 font-semibold'>Find Your Dream Properties...</h2>

                    {/* Add Filters */}
                    
                    <div class="text-center">
                        <button class="text-2xl w-44 text-center bg-black text-white h-14 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" 
                        
                        onClick={() => {
                            const drawer_navigation = document.getElementById('drawer-navigation');
                            drawer_navigation.classList.toggle('left-72');
                        }}
                        
                        >
                            Add Filters
                        </button>
                    </div>

                    <div className="card-list">
                        {response.map((property, index) =>
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
                                    <Link to='/propertyVie'>
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
                    <div className="pagination flex justify-center my-10">
                        <button className='text-2xl w-44 text-center bg-black text-white h-14 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700' onClick={() => setPageNo((page) => page - 1)} disabled={pageNo === 1}>Previous</button>
                        <div className='text-3xl font-bold mx-10 p-2'>
                            <p>{pageNo} of 10</p>
                        </div>
                        <button className='text-2xl w-44 text-center bg-black text-white h-14 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700' onClick={() => setPageNo((page) => page + 1)} disabled={response.length < 9}>Next</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Listings