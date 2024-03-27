import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setState, setAreaRange, setPriceRange, setCity } from '../../../store/preferenceSlice';
import { useNavigate } from 'react-router-dom';
import BuyerContext from '../../../contexts/BuyerContext';

const preference2 = () => {

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

  const price = [
    {
      "min" : 500000,
      "max" : 1000000,
    },
    {
      "min" : 1000000,
      "max" : 3000000,
    },
    {
      "min" : 3000000,
      "max" : 5000000,
    },
    {
      "min" : 5000000,
      "max" : 10000000,
    },
    {
      "min" : 10000000,
      "max" : 20000000,
    },
    {
      "min" : 20000000,
      "max" : 30000000,
    },
    {
      "min" : 30000000,
      "max" : 40000000,
    }
  ];

  const area = [
    {
      "min" : 300,
      "max" : 500,
    },
    {
      "min" : 500,
      "max" : 700,
    },
    {
      "min" : 700,
      "max" : 1000,
    },
    {
      "min" : 1000,
      "max" : 1500,
    },
    {
      "min" : 1500,
      "max" : 2000,
    },
    {
      "min" : 2000,
      "max" : 3000,
    },
    {
      "min" : 3000,
      "max" : 5000,
    }
  ];

  const [selectedState, setSelectedState] = useState('Select State');
  const [selectedCity, setSelectedCity] = useState([]);
  const [minArea, setMinArea] = useState([]);
  const [maxArea, setMaxArea] = useState([]);
  const [minPrice, setMinPrice] = useState([]);
  const [maxPrice, setMaxPrice] = useState([]);

  const dispatch = useDispatch();
  const propertyType = useSelector(state => state.preferences.propertyType);

  const navigate = useNavigate();

  const { buyerId } = useContext(BuyerContext);

  const onHandleAreaClick = (e) => {
    const { checked } = e.target;
    const areaValue = JSON.parse(e.target.value); // Parse the JSON string to get the object
  
    if (checked) {
      setMinArea([...minArea, areaValue.min]);
      setMaxArea([...maxArea, areaValue.max]);
    } else {
      setMinArea(minArea.filter(area => area !== areaValue.min));
      setMaxArea(maxArea.filter(area => area !== areaValue.max));
    }
  }  

  const onHandlePriceClick = (e) => {
    const {checked} = e.target;

    const priceValue = JSON.parse(e.target.value);

    if(checked){
      setMinPrice([...minPrice, priceValue.min]);
      setMaxPrice([...maxPrice, priceValue.max]);
    }
    else{
      setMinPrice(minPrice.filter(price => price !== priceValue.min));
      setMaxPrice(maxPrice.filter(price => price !== priceValue.max));
    }
  }

  const onHandleCityCheckBoxClick = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedCity([...selectedCity, value]);
    }
    else {
      setSelectedCity(selectedCity.filter(city => city !== value));
    }
  }

  const setPreferences = async () => {
    // Set Area
    let temp1 = Infinity;
    let temp2 = 0;
    for(let i=0; i<minArea.length; i++){
      temp1 = Math.min(temp1, minArea[i]);
      temp2 = Math.max(temp2, maxArea[i]);
    }

    console.log(temp1);
    console.log(temp2);

    dispatch(setAreaRange({
      "min" : temp1,
      "max" : temp2,
    }));

    // Set Price
    let temp3 = Infinity;
    let temp4 = 0;
    for(let i=0; i<minPrice.length; i++){
      temp3 = Math.min(temp3, minPrice[i]);
      temp4 = Math.max(temp4, maxPrice[i]);
    }

    dispatch(setPriceRange({
      "min" : temp3,
      "max" : temp4,
    }));

    console.log(temp3);
    console.log(temp4);

    // Set City
    dispatch(setCity(selectedCity));

    // setState
    dispatch(setState(selectedState));

    const data = {
      "preferences" : {
        "propertyType" : propertyType,
        "area" : {
          "min" : temp1,
          "max" : temp2
        },
        "price" : {
          "min" : temp3,
          "max" : temp4
        },
        "city" : selectedCity,
        "state" : selectedState
      }
    }

    console.log(data);

    try{
      const response = await fetch(`http://localhost:4000/api/buyer/${buyerId}`, {
        method: "PUT",
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data)
      });

      if(response.ok){
        console.log("Preferences Added Successfully");
        navigate('/listings');
      }
      else{
        console.log("Preferences not added due to some issue!");
      }

    }
    catch(error){
      console.log("Error while setting the preferences", error);
    }
  }

  return (


    <div>

      <div className='text-center'>

        <h2 className='text-5xl font-bold'>Select from the given options</h2>
        <p className='text-3xl leading-[80px]'>So that we can give your choice more preference!!</p>
      </div>
      <div className='space-y-2 font-medium flex justify-evenly h-[60vh] mt-20'>
        
      <div className='ml-2 my-2'>
    <button 
        id="stateDropdownDefaultButton" 
        data-dropdown-toggle="dropdown" 
        className="text-gray-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-5xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" 
        type="button"
        onClick={() => {
            var stateDropdown = document.getElementById('stateDropdown');
            stateDropdown.classList.toggle('hidden');
        }}
    >
        {selectedState}
        <svg className="w-3.5 h-5.5 mt-2 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
    </button>

    <div id="stateDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 transition-all duration-700 ease-in-out">
        <ul className="h-80 w-72 px-3 pb-3 mt-3 overflow-y-auto text-2xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            {
                states.map((state, index) => (
                    <li key={index} onClick={() => setSelectedState(state)}>
                        <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">{state}</p>
                    </li>
                ))
            }
        </ul>
    </div>
</div>


        <div className='ml-2 my-2'>
          <button id="cityDropdownSearchButton" data-dropdown-toggle="dropdownSearch" className="text-gray-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-5xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"

            onClick={() => {
              var citySearch = document.getElementById('citySearch');
              citySearch.classList.toggle('hidden');
            }}>

            Choose Cities

            <svg className="w-3.5 h-5.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg></button>

          <div id="citySearch" className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
            <ul className="h-80 w-72 px-3 pb-3 mt-3 overflow-y-auto text-2xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
              {
                citiesByState.map((city, index) => (
                  <li key={index}>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id={`checkbox-${index}`} type="checkbox" value={city} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 cursor-pointer" onChange={(e) => onHandleCityCheckBoxClick(e)} />
                      <label for={`checkbox-${index}`} className="w-full ms-2 font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">{city}</label>
                    </div>
                  </li>
                ))

              }
            </ul>
          </div>
        </div>

        <div className='ml-2 my-2'>
          <button id="areaDropdownSearchButton" data-dropdown-toggle="dropdownSearch" className="text-gray-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-5xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"

            onClick={() => {
              var areaSearch = document.getElementById('areaSearch');
              areaSearch.classList.toggle('hidden');
            }}>

            Area Range

            <svg className="w-3.5 h-5.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg></button>

          <div id="areaSearch" className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700">
            <ul className="h-80 w-72 px-3 pb-3 mt-3 overflow-y-auto text-2xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
            <div className='flex'>
              <p className="w-full ms-2 text-2xl font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">From</p>
              <p className="w-full ms-2 text-2xl font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">To</p>
            </div>
              {
                area.map((area, index) => (
                  <li key={index}>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id={`checkbox-${index}`} type="checkbox" value={JSON.stringify(area)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 cursor-pointer" onChange={(e) => onHandleAreaClick(e)} />
                      <label for={`checkbox-${index}1`} className="w-full ms-2 font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">{area.min}</label>
                      {/* <span className='ml-[-20px] pb-2 mr-2'> - </span> */}
                      <label for={`checkbox-${index}2`} className="w-full ms-2 font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">{area.max}</label>
                    </div>
                  </li>
                ))

              }
            </ul>
          </div>
        </div>
        <div className='ml-2 my-2'>
          <button id="priceDropdownSearchButton" data-dropdown-toggle="dropdownSearch" className="text-gray-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-5xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"

            onClick={() => {
              var priceSearch = document.getElementById('priceSearch');
              priceSearch.classList.toggle('hidden');
            }}>

            Price Range

            <svg className="w-3.5 h-5.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg></button>

          <div id="priceSearch" className="z-10 hidden bg-white rounded-lg shadow w-72 dark:bg-gray-700">
            <ul className="h-80 w-80 px-3 pb-3 mt-3 overflow-y-auto text-2xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
            <div className='flex'>
              <p className="w-full ms-2 text-2xl font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">From</p>
              <p className="w-full ms-2 text-2xl font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">To</p>
            </div>
              {
                price.map((price, index) => (
                  <li key={index}>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id={`checkbox-${index}`} type="checkbox" value={JSON.stringify(price)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 cursor-pointer" onChange={(e) => onHandlePriceClick(e)} />
                      
                      <label for={`checkbox-${index}1`} className="w-full ms-2 font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">{price.min}</label>
                      <label for={`checkbox-${index}2`} className="w-full ms-2 font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer">{price.max}</label>
                    </div>
                  </li>
                ))

              }
            </ul>
          </div>


          </div>
            <button className='text-3xl w-62 text-center bg-black text-white h-16 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700' onClick={() => setPreferences()}>Set Preferences</button>
        </div> 

    </div>
  )
}

export default preference2


          {/* <div className='ml-2 my-2'>
          <label>
            <p className='text-2xl my-1'>Min Area (sqft):</p>

            <input className="text-gray-600 w-48 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" placeholder='Enter min area' type="number" value={minArea} onChange={(e) => setMinArea(e.target.value)} />
          </label>
          <label>
            <p className='text-2xl my-1'>Max Area (sqft):</p>
            <input className="text-gray-600 w-48 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="number" value={maxArea} onChange={(e) => setMaxArea(e.target.value)} />
          </label>
            </div>
          </div>

          <div className='ml-2 my-2'>
          <button id="priceDropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button"

            onClick={() => {
              var priceDropdown = document.getElementById('priceDropdown');
              priceDropdown.classList.toggle('hidden');
            }}>

            Price : {minPrice} & {maxPrice}

            <svg className="w-3.5 h-3.5 mt-2 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="priceDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="h-72 w-56 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              {
                price.map((price, index) => (
                  <li key={index} onClick={() => {
                    setMinPrice(price.min);
                    setMaxPrice(price.max);
                  }}>
                    <span className="text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">{price.min}</span>
                    <span className="text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">{price.max}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          </div>


          <div className='ml-2 my-2'>
          <button id="areaDropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button"

            onClick={() => {
              var areaDropdown = document.getElementById('areaDropdown');
              areaDropdown.classList.toggle('hidden');
            }}>

            Area : {minArea} & {maxArea}

            <svg className="w-3.5 h-3.5 mt-2 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="areaDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="h-72 w-56 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              {
                area.map((area, index) => (
                  <li key={index} onClick={() => {
                    setMinArea(area.min);
                    setMaxArea(area.max);
                  }}>
                    <span className="text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">{area.min}</span>
                    <span className="text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">{area.max}</span>
                  </li>
                ))
              }
            </ul>
          </div> */}