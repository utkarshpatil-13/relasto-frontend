import React from 'react'
import {useForm} from 'react-hook-form'
import House from '../../../assets/house2.png'
import House2 from '../../../assets/house1.jpg'
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaSmileBeam } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

import { FaDollarSign } from 'react-icons/fa';
import { IoFlame } from 'react-icons/io5';
import { FaSmile } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

import { BiCheck } from 'react-icons/bi';
 
import FeaturedProperties from '../FeaturedProperties/index'

const index = () => {

    const {register, control, handleSubmit, formState} = useForm();
    const {errors} = formState;
    
    const onSubmit = () => {
        console.log("Form Submitted");
    }

  return (
    <>
        <div className='bg-[#fff7f0] flex justify-around mb-10'>
            <div className='flex flex-col items-center justify-center py-5'>
                <div className='text-5xl font-bold text-center leading-normal w-3/4'>
                    Find a perfect property where you'll love to live
                </div>
                <div className='text-slate-700 text-xl w-3/4 my-5'>
                    We help businesses customize, automate and scaleup thier ad production and delivery.
                </div>
                <div>
                    <div className='text-center border-2 shadow-xl shadow-gray p-5 w-[30vw]'>
                        <div className='mb-10 flex justify-between'>
                            <button className='text-xl bg-gray-300 font-bold rounded-xl focus:bg-gray-700 focus:text-white focus:duration-200 focus:transition-all p-3 w-32' id='buy' name='buy'>Buy</button>
                            <button className='text-xl bg-gray-300 font-bold rounded-xl focus:bg-gray-700 focus:text-white focus:duration-200 focus:transition-all p-3 w-32' id='sell' name='sell'>Sell</button>
                            <button className='text-xl bg-gray-300 font-bold rounded-xl focus:bg-gray-700 focus:text-white focus:duration-200 focus:transition-all p-3 w-32' id='rent' name='rent'>Rent</button>
                        </div>
                        <form className='' onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className=''>
                            <div>
                                <input type="text" className='text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl p-3' placeholder='City/Street' id='city' name='city' {...register("city", {
                                required: 'city is required',
                                })}/>
                            </div>
                            <p className='error mb-5 mt-2 flex justify-start text-red-700'>{errors.city?.message}</p>
                            <div>
                                <input type="number" className='text-xl w-full rounded-lg border-2 border-slate-400 shadow-lg shadow-slate p-3' placeholder='Property Type' id='property' name='property' {...register("property", {
                                required: "Property Type is required"
                                })}/>
                            </div>
                            <p className='error mb-5 mt-2 flex justify-start text-red-700'>{errors.property?.message}</p>
                            <div>
                                <input type="number" className='text-xl w-full rounded-lg border-2 border-slate-400 shadow-lg shadow-slate p-3' placeholder='Price Range' id='price' name='price' {...register("price", {
                                required: "Estimated Price is required"
                                })}/>
                            </div>
                            <p className='error mb-5 mt-2 flex justify-start text-red-700'>{errors.price?.message}</p> 
                            </div>
                            <div>
                            <button type="submit" className='text-xl w-full rounded-lg bg-black text-white p-3 px-8 focus:bg-gray-700 focus:duration-200 focus:transition-all'>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={House} className='w-[900px] ' alt="" />
            </div>
        </div>

        <div className='flex justify-center mb-10'>
            <div className='bg-[#fde8d7] flex justify-center items-start flex-col rounded-xl px-4 py-16 w-1/3 mx-4'>
                <h3 className='text-4xl font-bold m-2'>Simple & easy way to find your dream Appointment</h3>               
                <p className='text-gray-700 text-xl m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, esse sit repellendus eos accusamus omnis.</p>
                <div className='text-xl w-42 m-2 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700'>Get Started</div>
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-4 mx-4'>
                <div className='bg-[#ffeee0] flex justify-center items-start flex-col rounded-xl text-2xl font-bold p-4'>
                    <FaSearch/>
                    <h3>Search Your Location</h3>
                </div>
                <div className='bg-[#ffeee0] flex justify-center items-start flex-col rounded-xl text-2xl font-bold p-4'>
                    <IoEyeOutline />
                    <h3>Visit Appointment</h3>
                </div>
                <div className='bg-[#ffeee0] flex justify-center items-start flex-col rounded-xl text-2xl font-bold p-4'>
                    <FaMoneyBillAlt />
                    <h3>Get Your Dream House</h3>
                </div>
                <div className='bg-[#ffeee0] flex justify-center items-start flex-col rounded-xl text-2xl font-bold p-4'>
                    <FaSmileBeam />
                    <h3>Enjoy Your Appointment</h3>
                </div>
            </div>
        </div>


        <div className='flex justify-around p-5'>
            <div>
                <div className='logo p-2 rounded-3xl shadow-lg shadow-gray-600 w-fit mb-3'>
                    <FaDollarSign/>
                </div>
                <div className='text-4xl font-extrabold mb-2'>
                    <h3>$15.3M</h3>
                </div>
                <div className='desc text-[#406f85] text-xl'>
                    Owned from properties transactions
                </div>
            </div>
            <div>
                <div className='logo p-2 rounded-3xl shadow-lg shadow-gray-600 w-fit mb-3'>
                    <FiMapPin/>
                </div>
                <div className='text-4xl font-extrabold mb-2'>
                    <h3>25K+</h3>
                </div>  
                <div className='desc text-[#406f85] text-xl'>
                    Properties for Buy and Sell Successfully
                </div>
            </div>
            <div>
                <div className='logo p-2 rounded-3xl shadow-lg shadow-gray-600 w-fit mb-3'>
                    <IoFlame />
                </div>
                <div className='text-4xl font-extrabold mb-2'>
                    500
                </div>
                <div className='desc text-[#406f85] text-xl'>
                    Daily completed transactions
                </div>
            </div>
            <div>
                <div className='logo p-2 rounded-3xl shadow-lg shadow-gray-600 w-fit mb-3'>
                    <FaSmile/>
                </div>
                <div className='text-4xl font-extrabold mb-2'>
                    600+
                </div>
                <div className='desc text-[#406f85] text-xl'>
                    Regular Clients
                </div>
            </div>
        </div>

        <FeaturedProperties />


        {/* Simple and easy way to find customer's dream appointment */}

        <div className='flex my-20 justify-center items-center'>
            <div className='p-5 flex flex-col justify-center items-start w-2/4'>
                <div className='text-4xl font-bold mb-3'>
                    <h2>Simple & easy way to find your dream Appointment</h2>
                </div>
                <div className='text-xl mb-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium aut fugit amet quis dolor consequatur esse voluptates ea et recusandae, enim quidem cupiditate ipsum eveniet velit, nulla, fugiat corporis incidunt eligendi magnam iusto!</p>
                </div>
                <div className='text-xl w-40 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700'>Get Started</div>
            </div>
            <div className='flex gap-10'>
        
                <div className='flex gap-5 flex-col'>
                    <div>
                        <img src="https://source.unsplash.com/400x550/?houses" className='rounded-xl' alt="" />
                        {/* <div className='w-[400px] row-span-3 border-2 border-slate-400 p-2 rounded-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi ipsum assumenda? Error amet nostrum, repellendus sed beatae ullam impedit! Laboriosam, iure ut! Velit commodi distinctio cumque, repellendus illo ullam.
                        </div> */}
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/400x400/?houses" className='rounded-xl' alt="" />
                        {/* <div className='w-[400px] row-span-2 col-span-1 border-2 border-slate-400 p-2 rounded-xl'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ad tempora aut repellendus ab harum.
                        </div> */}
                    </div>
                </div>
                <div className='flex gap-5 flex-col'>
                    <div>
                        <img src="https://source.unsplash.com/400x350/?houses" className='rounded-xl' alt="" />
                        {/* <div className='w-[400px] row-span-2 col-span-1 border-2 border-slate-400 p-2 rounded-xl'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quod! Molestias iusto tempore earum corporis!
                        </div> */}
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/400x600/?houses" className='rounded-xl' alt="" />
                        {/* <div className='w-[400px] row-span-1 col-span-1 border-2 border-slate-400 p-2 rounded-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi error consequuntur esse, ullam minus ipsum, necessitatibus officia unde et quidem dolorem amet, explicabo nesciunt! Iure expedita non labore maxime sapiente?
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

        {/* Best Rated host on popular rental sites */}
        
        <div className='flex my-20 justify-center items-center'>
            <div className='flex gap-10'>
        
                <div className='flex gap-5 flex-col'>
                    <div>
                        <img src="https://source.unsplash.com/800x1000/?houses" className='rounded-xl' alt="" />
                    </div>
                </div>
            </div>
            <div className='p-5 flex flex-col justify-center items-start w-2/4'>
                <div className='text-4xl font-bold mb-3'>
                    <h2>Best Rated Host on Popular rental sites</h2>
                </div>
                <div className='text-xl mb-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium aut fugit amet quis dolor consequatur esse voluptates ea et recusandae, enim quidem cupiditate ipsum eveniet velit, nulla, fugiat corporis incidunt eligendi magnam iusto!</p>
                </div>
                <div className='mb-5'>
                    <div className='flex text-xl font-bold'>
                        <div className='relative top-1 mr-2'>
                            <BiCheck />
                        </div>
                        <div>
                            Find Excellent Deals
                        </div>
                    </div>
                    <div className='flex text-xl font-bold'>
                        <div className='relative top-1 mr-2'>
                            <BiCheck />
                        </div>
                        <div>
                            Friendly Host and Fast Support
                        </div>
                    </div>
                    <div className='flex text-xl font-bold'>
                        <div className='relative top-1 mr-2'>
                            <BiCheck />
                        </div>
                        <div>
                            Secure Payment System
                        </div>
                    </div>
                </div>
                <div className='text-xl w-40 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700'>Get Started</div>
            </div>
        </div>

    </>
  )
}

export default index