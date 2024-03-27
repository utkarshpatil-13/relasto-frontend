import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import { FiMapPin } from 'react-icons/fi';

import { IoBedOutline } from 'react-icons/io5';
import { BiShower } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi';
import { FaRupeeSign } from 'react-icons/fa';

const index = () => {
    return (
        <div>
            <div>
                <div className='m-10 flex justify-between mx-20'>
                    <h2 className='text-4xl font-bold'>Featured Properties</h2>
                    <h3 className='text-orange-500 text-xl font-bold flex'>
                        <p>Explore</p>
                        <div className='ml-2 relative top-2'>
                            <IoArrowForward />
                        </div>
                    </h3>
                </div>
                <div className='mb-10 flex justify-around'>
                    <button className='text-2xl text-gray-400 font-bold rounded-xl focus:text-black focus:duration-200 focus:transition-all p-3 w-40 cursor-pointer' id='residentprop' name='residentprop'>Resident Property</button>
                    <button className='text-2xl text-gray-400 font-bold rounded-xl focus:text-black focus:duration-200 focus:transition-all p-3 w-40 cursor-pointer' id='commercialprop' name='commercialprop'>Commercial Property</button>
                    <button className='text-2xl text-gray-400 font-bold rounded-xl focus:text-black focus:duration-200 focus:transition-all p-3 w-40 cursor-pointer' id='industrialprop' name='industrialprop'>Industrial Property</button>
                    <button className='text-2xl text-gray-400 font-bold rounded-xl focus:text-black focus:duration-200 focus:transition-all p-3 w-40 cursor-pointer' id='agricultureprop' name='agricultureprop'>Agriculture Property</button>
                </div>
            </div>

            <div className=' my-14 flex justify-around'>
                <div className='border-2 border-slate-200 rounded-xl pb-3'>
                    <div>
                        <img className='rounded-tl-lg rounded-tr-lg' src="https://source.unsplash.com/400x400/?resident houses" alt="" />
                    </div>
                    <div className='flex my-3 text-xl justify-center'>
                        <div className='relative top-2 mr-2 text-[17px]'>
                            <FiMapPin />
                        </div>
                        <p className='font-bold'>2861 62nd Ave, Oakland, CA 94605</p>
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col gap-4 justify-around'>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <IoBedOutline />
                            </div>
                            <p className='text-[17px]'>3 Bed Room</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiShower />
                            </div>
                            <p>1 Bath</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiTransfer />
                            </div>
                            <p>1,032 sqft</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <FaUsers />
                            </div>
                            <p>Family</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='text-xl w-42 mt-3 mr-28 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700'>Get Started</div>
                        <div className='flex relative top-4'>
                            <div className='relative top-5 text-[17px]'>
                                <FaRupeeSign />
                            </div>
                            <p className='text-2xl font-bold relative top-3'>649,900</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 border-slate-200 rounded-xl'>
                    <div>
                        <img className='rounded-tl-lg rounded-tr-lg' src="https://source.unsplash.com/400x400/?resident houses" alt="" />
                    </div>
                    <div className='flex my-3 text-xl justify-center'>
                        <div className='relative top-2 mr-2 text-[17px]'>
                            <FiMapPin />
                        </div>
                        <p className='font-bold'>2861 62nd Ave, Oakland, CA 94605</p>
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col gap-4 justify-around'>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <IoBedOutline />
                            </div>
                            <p className='text-[17px]'>3 Bed Room</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiShower />
                            </div>
                            <p>1 Bath</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiTransfer />
                            </div>
                            <p>1,032 sqft</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <FaUsers />
                            </div>
                            <p>Family</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='text-xl w-42 mt-3 mr-28 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700'>Get Started</div>
                        <div className='flex relative top-4'>
                            <div className='relative top-5 text-[17px]'>
                                <FaRupeeSign />
                            </div>
                            <p className='text-2xl font-bold relative top-3'>649,900</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 border-slate-200 rounded-xl'>
                    <div>
                        <img className='rounded-tl-lg rounded-tr-lg' src="https://source.unsplash.com/400x400/?resident houses" alt="" />
                    </div>
                    <div className='flex my-3 text-xl justify-center'>
                        <div className='relative top-2 mr-2 text-[17px]'>
                            <FiMapPin />
                        </div>
                        <p className='font-bold'>2861 62nd Ave, Oakland, CA 94605</p>
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col gap-4 justify-around'>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <IoBedOutline />
                            </div>
                            <p className='text-[17px]'>3 Bed Room</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiShower />
                            </div>
                            <p>1 Bath</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiTransfer />
                            </div>
                            <p>1,032 sqft</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <FaUsers />
                            </div>
                            <p>Family</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='text-xl w-42 mt-3 mr-28 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700'>Get Started</div>
                        <div className='flex relative top-4'>
                            <div className='relative top-5 text-[17px]'>
                                <FaRupeeSign />
                            </div>
                            <p className='text-2xl font-bold relative top-3'>649,900</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' my-14 flex justify-around'>
                <div className='border-2 border-slate-200 rounded-xl pb-3'>
                    <div>
                        <img className='rounded-tl-lg rounded-tr-lg' src="https://source.unsplash.com/400x400/?resident houses" alt="" />
                    </div>
                    <div className='flex my-3 text-xl justify-center'>
                        <div className='relative top-2 mr-2 text-[17px]'>
                            <FiMapPin />
                        </div>
                        <p className='font-bold'>2861 62nd Ave, Oakland, CA 94605</p>
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col gap-4 justify-around'>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <IoBedOutline />
                            </div>
                            <p className='text-[17px]'>3 Bed Room</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiShower />
                            </div>
                            <p>1 Bath</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiTransfer />
                            </div>
                            <p>1,032 sqft</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <FaUsers />
                            </div>
                            <p>Family</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='text-xl w-42 mt-3 mr-28 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700'>Get Started</div>
                        <div className='flex relative top-4'>
                            <div className='relative top-5 text-[17px]'>
                                <FaRupeeSign />
                            </div>
                            <p className='text-2xl font-bold relative top-3'>649,900</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 border-slate-200 rounded-xl'>
                    <div>
                        <img className='rounded-tl-lg rounded-tr-lg' src="https://source.unsplash.com/400x400/?resident houses" alt="" />
                    </div>
                    <div className='flex my-3 text-xl justify-center'>
                        <div className='relative top-2 mr-2 text-[17px]'>
                            <FiMapPin />
                        </div>
                        <p className='font-bold'>2861 62nd Ave, Oakland, CA 94605</p>
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col gap-4 justify-around'>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <IoBedOutline />
                            </div>
                            <p className='text-[17px]'>3 Bed Room</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiShower />
                            </div>
                            <p>1 Bath</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiTransfer />
                            </div>
                            <p>1,032 sqft</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <FaUsers />
                            </div>
                            <p>Family</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='text-xl w-42 mt-3 mr-28 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700'>Get Started</div>
                        <div className='flex relative top-4'>
                            <div className='relative top-5 text-[17px]'>
                                <FaRupeeSign />
                            </div>
                            <p className='text-2xl font-bold relative top-3'>649,900</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 border-slate-200 rounded-xl'>
                    <div>
                        <img className='rounded-tl-lg rounded-tr-lg' src="https://source.unsplash.com/400x400/?resident houses" alt="" />
                    </div>
                    <div className='flex my-3 text-xl justify-center'>
                        <div className='relative top-2 mr-2 text-[17px]'>
                            <FiMapPin />
                        </div>
                        <p className='font-bold'>2861 62nd Ave, Oakland, CA 94605</p>
                    </div>
                    <div className='grid grid-rows-2 grid-flow-col gap-4 justify-around'>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <IoBedOutline />
                            </div>
                            <p className='text-[17px]'>3 Bed Room</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiShower />
                            </div>
                            <p>1 Bath</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <BiTransfer />
                            </div>
                            <p>1,032 sqft</p>
                        </div>
                        <div className='flex'>
                            <div className='relative top-1 mr-2 text-[17px]'>
                                <FaUsers />
                            </div>
                            <p>Family</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='text-xl w-42 mt-3 mr-28 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700'>Get Started</div>
                        <div className='flex relative top-4'>
                            <div className='relative top-5 text-[17px]'>
                                <FaRupeeSign />
                            </div>
                            <p className='text-2xl font-bold relative top-3'>649,900</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index