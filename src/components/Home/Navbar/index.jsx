import React, { useState } from 'react'
import RelastoLogo from '../../../assets/logo.png'
import { FaSearch } from 'react-icons/fa';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import { useContext } from 'react';
import BuyerContext from '../../../contexts/BuyerContext';
import SellerContext from '../../../contexts/SellerContext';

const Navbar = () => {
    const [isHomeOpen, setIsHomeOpen] = useState(false);
    const [isListingOpen, setIsListingOpen] = useState(false);
    const [isAgentsOpen, setIsAgentsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const { buyerId, buyerLoggedIn, setBuyerLoggedIn, setBuyerId } = useContext(BuyerContext);
    const { sellerId, sellerLoggedIn, setSellerLoggedIn, setSellerId } = useContext(SellerContext);

    const buyerLoggedIn2 = localStorage.getItem('buyerLoggedIn') === 'true';
    const buyerAccessToken = localStorage.getItem('accessToken');

    const sellerLoggedIn2 = localStorage.getItem('sellerLoggedIn') === 'true';
    const SellerAccessToken = localStorage.getItem('accessToken');

    const toggleHomeDropdown = () => {
        setIsHomeOpen(!isHomeOpen);
    }
    const toggleListingDropdown = () => {
        setIsListingOpen(!isListingOpen);
    }
    const toggleAgentsDropdown = () => {
        setIsAgentsOpen(!isAgentsOpen);
    }

    const DropDownIcon = ({ isOpen }) => {
        return (
            <>
                {
                    isOpen ? (
                        <FiChevronUp className='dropdown-icon' />
                    ) : (
                        <FiChevronDown className='dropdown-icon' />
                    )
                }
            </>
        )
    }

    return (
        <nav className='flex justify-between items-center mx-10 text-xl h-40'>
            <div>
                <img src={RelastoLogo} className='w-[170px]' alt="" />
            </div>
            <div className='text-2xl'>
                <ul id="sidemenu" className="flex">
                    <Link to='/'>

                        <li className="inline-block list-none mx-5  cursor-pointer select-none">
                            <p className="text-gray-800 text-2xl font-medium relative group">Home
                                <span className="absolute bottom-[-4px] left-0 w-0 h-0 bg-slate-600 duration-300 transition-all group-hover:w-full group-hover:h-1"></span>
                            </p>
                        </li>
                    </Link>
                    <Link to='/listings'>
                        <li className="inline-block list-none mx-5  cursor-pointer">
                            <p className="text-gray-800 text-2xl font-medium relative group">Listings
                                <span className="absolute bottom-[-4px] left-0 w-0 h-0 bg-slate-600 duration-300 transition-all group-hover:w-full group-hover:h-1"></span>
                            </p>
                        </li>
                    </Link>
                    <li className="inline-block list-none mx-5  cursor-pointer">
                        <p className="text-gray-800 text-2xl font-medium relative group">Agents
                            <span className="absolute bottom-[-4px] left-0 w-0 h-0 bg-slate-600 duration-300 transition-all group-hover:w-full group-hover:h-1"></span>
                        </p>
                    </li>
                    <li className="inline-block list-none mx-5  cursor-pointer">
                        <p className="text-gray-800 text-2xl font-medium relative group">Blog
                            <span className="absolute bottom-[-4px] left-0 w-0 h-0 bg-slate-600 duration-300 transition-all group-hover:w-full group-hover:h-1"></span>
                        </p>
                    </li>
                </ul>

            </div>
            <div className='flex'>
                <div className='flex h-12 p-2 px-3 border-2 border-slate-400 rounded-xl cursor-pointer'>
                    <div className='px-2 relative top-1'>
                        <FaSearch />
                    </div>
                    <div>
                        Search
                    </div>
                </div>

                {
                    buyerLoggedIn2 || sellerLoggedIn2 ? (
                        <Link to='/'>
                            <div className='mx-2 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700' onClick={async () => {
                                if (buyerLoggedIn2) {
                                    setBuyerLoggedIn(false);
                                    setBuyerId('');
                                    localStorage.setItem('buyerLoggedIn', false);
                                    localStorage.setItem('buyerId', undefined);

                                    console.log(accessToken);
                                    try {
                                        const response = await fetch(`http://localhost:4000/api/buyer/logout`, {
                                            method: "POST",
                                            headers: {
                                                'Content-Type': 'application/json', // Specify the content type
                                                'Authorization': `Bearer ${accessToken}`
                                            },
                                        });

                                        if (response.ok) {
                                            console.log("buyer logged out successfully");
                                            localStorage.removeItem('accessToken');
                                            localStorage.removeItem('refreshToken');
                                        } else {
                                            console.log(response.statusText);
                                        }
                                    } catch (error) {
                                        console.log(error.message);
                                    }

                                }
                                else {
                                    setSellerLoggedIn(false);
                                    setSellerId('');

                                    localStorage.setItem('sellerLoggedIn', false);
                                    localStorage.setItem('sellerId', undefined);

                                    console.log(accessToken);
                                    try {
                                        const response = await fetch(`http://localhost:4000/api/seller/logout`, {
                                            method: "GET",
                                            headers: {
                                                'Content-Type': 'application/json', // Specify the content type
                                                'Authorization': `Bearer ${accessToken}`
                                            },
                                        });

                                        if (response.ok) {
                                            console.log("seller logged out successfully");
                                            localStorage.removeItem('accessToken');
                                            localStorage.removeItem('refreshToken');
                                        } else {
                                            console.log(response.statusText);
                                        }
                                    } catch (error) {
                                        console.log(error.message);
                                    }
                                }
                            }}>Logout</div>
                        </Link>
                    ) :
                        (
                            <Link to='/confirmbuyerseller'>
                                <div className='mx-2 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700'>Log in</div>
                            </Link>
                        )
                }

            </div>


        </nav>
    )
}

export default Navbar



