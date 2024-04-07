import React, { useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import image from '../../assets/HeroSection/p1.jpeg'
import image2 from '../../assets/HeroSection/p2.jpeg'
import image3 from '../../assets/HeroSection/p3.jpeg'
import image4 from '../../assets/HeroSection/p4.jpeg'
import { BsFillCircleFill } from 'react-icons/bs';
import { useForm} from 'react-hook-form';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

import './PropertyView.css'

const BulletIcon = () => {
    return <BsFillCircleFill />;
};

const PropertyView = () => {

    const property = {
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
    }

    const availableDates = ['1-3-24', '2-3-24', '3-3-24', '4-3-24', '5-3-24', '6-3-24', '7-3-24', '8-3-24', '9-3-24',];

    const [propertyId, setPropertyId] = useState('');

    const temp_images = [image, image2, image3, image4];

    const [images, setImages] = useState([]);

    const [sellerData, setSellerData] = useState([]);

    const setPropertyImages = (image) => {
        setImages(images => [...images, image]);
    }

    useEffect(() => {
        property.images.map((image) => setPropertyImages(image));
    }, []);

    const fetchPropertyDetails = async () => {
        try {
            const reponse = await fetch(`http://localhost:4000/api/property/${propertyId}`, {
                method: "GET",
                header: {
                    'Content-Type': 'application/json'
                }
            });

            if (reponse.ok) {

            }
            else {

            }
        } catch (error) {
            console.log("Error in the property details: ", error.message);
        }
    }

    const fetchSellerDetails = async (id) => {  
        try {
            const response = fetch(`http://localhost:4000/api/seller/${id}`, {
                method: "GET",
                headers: {
                    "Authorization" : JSON.stringify(localStorage.get('accessToken')),
                }
            })
    
            const data = await response.json();
    
            if(response.ok){
                setSellerData(data);
            }
        } catch (error) {
            console.log(error.message);
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

    const {register, control, handleSubmit, formState} = useForm();
    const {errors} = formState;

    const onSubmit = () => {

    }

    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    return (
        <div>
            {/* <h3 className='text-5xl text-center mb-8'>Grab all the property you need to know!</h3> */}
            <div>
                <div className='w-[100vw] h-[80vh] m-auto'>

                </div>

                <div className='flex mx-5 mt-5 mb-3'>
                    <div className='border-2 border-slate-500 rounded-xl p-4'>
                        <div className='mb-4'>
                            <h2 className='text-7xl font-extrabold leading-snug'>{property.title}</h2>
                        </div>
                        <div className='my-4'>
                            <h3 className='text-4xl'>{property.address}</h3>
                        </div>
                        <div className='flex my-4'>
                            <div className='p-2 border-2 border-slate-500 text-center rounded-xl mr-2'>
                                <p className='font-bold mb-2 text-4xl'>{formatPrice(property.price)} </p>
                                <p className='text-slate-500 text-3xl'>Online and Cash</p>
                            </div>
                            <div className='p-2 border-2 border-slate-500 text-center rounded-xl ml-2'>
                                <p className='font-bold mb-2 text-4xl'>Property Type</p>
                                <p className='text-3xl'>{property.propertyType}</p>
                            </div>
                        </div>
                        <div className='info '>
                            <h3 className='text-6xl font-semibold mt-3 mb-5'>Description</h3>
                            <p className='text-3xl'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, numquam non! Molestiae, asperiores dolorum! Obcaecati similique provident inventore sapiente, maiores magni esse cumque iusto odio, facilis assumenda cum odit non quasi, nemo beatae est at officia cupiditate autem dignissimos iure. Fugiat soluta maiores officia. Possimus ipsam iusto ipsum reprehenderit quam recusandae quasi nesciunt magni, debitis nostrum voluptas eaque nulla, voluptate, deserunt consectetur quia pariatur rem voluptates. Dolorum id debitis neque, amet ad, quisquam quaerat excepturi eos nulla quos adipisci dolore iure! Rerum nemo ex molestias iure reiciendis aspernatur tempora tempore aliquid aut omnis, labore odit tenetur quasi accusantium deserunt placeat.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className=' mx-5'>
                    <div className=''>
                        <div className='text-xl'>
                            <div className='my-4 border-2 border-slate-500 rounded-xl p-3'>
                                <h3 className='text-6xl font-semibold mb-5 text-center'>Rooms Information</h3>
                                <div className='text-4xl flex justify-evenly'>
                                    <div>
                                        <p className=' leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> BedRooms : {property.rooms.bedrooms}</p>
                                        <p className=' leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Bathrooms : {property.rooms.bathrooms}</p>
                                        <p className=' leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Toilets : {property.rooms.toilets}</p>
                                        <p className=' leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Hall : {property.rooms.hall}</p>
                                    </div>
                                    <div>
                                        <p className=' leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Kitchen : {property.rooms.kitchen}</p>
                                        <p className=' leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Balconies : {property.rooms.balconies}</p>
                                        <p className=' leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> DryBalcony : {property.rooms.dryBalcony}</p>
                                        <p className=' leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Basement : {property.rooms.basement ? "Yes" : "No"}</p>
                                    </div>
                                    <div>
                                        <p className=' leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> GuestRoom : {property.rooms.guestRoom ? "Yes" : "No"}</p>
                                        <p className=' leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> StudyRoom : {property.rooms.studyRoom ? "Yes" : "No"}</p>
                                        <p className=' leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Yard : {property.rooms.yard ? "Yes" : "No"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='my-4 border-2 border-slate-500 rounded-xl p-3'>
                                <h3 className='text-6xl font-semibold mb-5 text-center'>Home Highlights</h3>
                                <div className='text-4xl flex justify-evenly'>
                                    <div>    
                                        <p className='leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Area : {property.area} Sqft</p>
                                        <p className='leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Price : {formatPrice(property.price)}</p>
                                        <p className='leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> City : {property.city}</p>
                                    </div>
                                    <div>    
                                        <p className='leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> State : {property.state}</p>
                                        <p className='leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Country : {property.country}</p>
                                        <p className='leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> YearBuilt : {property.yearBuilt}</p>
                                    </div>
                                    <div>
                                        <p className='leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> SellerId : {property.sellerId}</p>
                                        <p className='leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Rental Property : {property.isRental ? "Yes" : "No"}</p>
                                        <p className='leading-relaxed'><span className='text-3xl text-slate-600'>&#8226;</span> Sold Property : {property.isSold ? "Yes" : "No"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='my-4 border-2 border-slate-500 rounded-xl p-3 w-[60vw] h-[40vh]'>
                            <h3 className='text-6xl font-semibold my-3 mb-5'>Seller Information</h3>
                            <div className='flex '>
                                <div className='w-[17vw] h-48 mr-10'>
                                    <img src={image} alt="profile photo" style={{borderRadius: '10px'}} />
                                </div>
                                <div className='text-4xl'>
                                    <div className=''>
                                        <h2>Utkarsh Patil</h2>
                                    </div>
                                    <div className=''>
                                        <div className='flex my-3'>
                                            <FaEnvelope className='text-2xl relative top-3 mr-2' />
                                            <p>utkarshpatil.it@gmail.com</p>
                                        </div>
                                        <div className='flex my-4'>
                                            <FaPhoneAlt className='text-2xl relative top-3 mr-2' />
                                            <p>7020391355</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-4 border-2 border-slate-500 text-center rounded-xl w-[30vw] p-5'>
                        <p className='text-4xl font-bold'>Request for visit</p>
                        <div className="container mx-auto px-4 py-6">
                            <h2 className="text-3xl font-semibold mb-6">Available Dates</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {availableDates.map(date => (
                                <div key={date} className="bg-white rounded-lg shadow-md p-2">
                                    <label className="block cursor-pointer">
                                    <input
                                        type="radio"
                                        value={date}
                                        checked={selectedDate === date}
                                        onChange={() => handleDateChange(date)}
                                        className="hidden"
                                    />
                                    <div className={`p-2 ${selectedDate === date ? 'bg-gray-200' : ''} rounded-lg border-2 border-gray-300`}>
                                        <span className="text-lg font-semibold">{date}</span>
                                    </div>
                                    </label>
                                </div>
                            ))}
                            </div>
                            <div className='mt-5'>
                                <button type="submit" className='text-xl w-full rounded-lg bg-black text-white p-3 px-8 focus:bg-gray-700 focus:duration-200 focus:transition-all'>Book Appointment</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyView