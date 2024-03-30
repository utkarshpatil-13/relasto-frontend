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
    const accessToken = localStorage.getItem('accessToken');

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
                <ul className='mx-2 flex h-12 p-2 cursor-pointer'>

                    {/* Home */}
                    <li onClick={toggleHomeDropdown} className='mx-3'>
                        <div className='flex'>
                            <p>
                                Home
                            </p>
                            <div className='px-1 relative top-1'>
                                <DropDownIcon className='' isOpen={isHomeOpen} />
                            </div>
                        </div>
                        <div>
                            {isHomeOpen && (
                                <ul className=' p-2'>
                                    <li key="homev1" className='' >Home v1</li>
                                    <li key="homev2" >Home v2</li>
                                    <li key="about">About</li>
                                    <li key="contact" >Contact</li>
                                </ul>
                            )}
                        </div>
                    </li>

                    {/* Listing */}

                    <li onClick={toggleListingDropdown} className='mx-3'>
                        <div className='flex'>
                            <p>
                                Listing
                            </p>
                            <div className='px-1 relative top-1'>
                                <DropDownIcon className='' isOpen={isListingOpen} />
                            </div>
                        </div>
                        <div>
                            {isListingOpen && (
                                <ul>
                                    <li key="listv1">Listing v1</li>
                                    <li key="listv2">Listing v2</li>
                                </ul>
                            )}
                        </div>
                    </li>

                    {/* Agents */}

                    <li onClick={toggleAgentsDropdown} className='mx-3'>
                        <div className='flex'>
                            <p>
                                Agents
                            </p>
                            <div className='px-1 relative top-1'>
                                <DropDownIcon className='' isOpen={isAgentsOpen} />
                            </div>
                        </div>
                        <div>
                            {isAgentsOpen && (
                                <ul>
                                    <li key="agentlist">Agent List</li>
                                    <li key="agentprofile">Agent Profile</li>
                                </ul>
                            )}
                        </div>

                    </li>
                    <li className='mx-4'>Property</li>
                    <li className='mx-4'>Blog</li>
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
                    buyerLoggedIn2 ? (
                        <Link to='/'>
                            <div className='mx-2 bg-black text-white h-12 p-2 px-4 rounded-xl cursor-pointer active:bg-gray-700' onClick={async () => {
                                if (buyerLoggedIn2) {
                                    setBuyerLoggedIn(false);
                                    setBuyerId('');
                                    localStorage.setItem('buyerLoggedIn', false);
                                    localStorage.setItem('buyerId', undefined);

                                    console.log(accessToken);
                                    try {
                                        const response = await fetch(`http://localhost/api/buyer/logout`, {
                                            method: "GET",
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