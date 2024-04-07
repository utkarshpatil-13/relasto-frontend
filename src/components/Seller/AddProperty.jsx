import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { states, citiesByState, propType } from "../../constants";
import uploading from '../../assets/Property/uploading.gif'

const AddProperty = () => {
    // {
    //     "title": "Spacious Villa with Pool in Kolhapur",
    //     "description": "A spacious villa with a swimming pool, perfect for relaxation in Kolhapur.",
    //     "propertyType": "Villa",
    //     "images": ["2.jpg", "2.jpg", "2.jpg"],
    //     "rooms": {
    //         "bedrooms": 5,
    //         "bathrooms": 4,
    //         "toilets": 3,
    //         "hall": 1,
    //         "kitchen": 1,
    //         "balconies": 3,
    //         "dryBalcony": 1,
    //         "basement": false,
    //         "guestRoom": true,
    //         "studyRoom": true,
    //         "yard": "COURTYARD"
    //     },
    //      "area": 2800,
    //     "price": 25000000,
    //     "city": "Kolhapur",
    //     "state": "Maharashtra",
    //     "country": "India",
    //     "address": "101 Pine Street, Kolhapur",
    //     "yearBuilt": 2014,
    //     "sellerId": "Abc",
    //     "isRental": false,
    //     "isSold": false

    const { register, control, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const [propertyType, setPropertyType] = useState("Property Type");
    const [basement, setBasement] = useState(false);
    const [guestroom, setGuestRoom] = useState(false);
    const [studyroom, setStudyRoom] = useState(false);
    const [yard, setYard] = useState("NO_YARD");

    const [isRental, setIsRental] = useState(false);
    const [isSold, setIsSold] = useState(false);
    const [selectedState, setSelectedState] = useState("States");
    const [selectedCity, setSelectedCity] = useState("Cities");
    const sellerId = localStorage.getItem("sellerId");
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (data) => {

        // validations
        if (selectedCity == "Cities") {
            alert("City not mentioned");
        } else if (selectedState == "States") {
            alert("State not mentioned");
        } else {
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("description", data.description);
            formData.append("area", data.area);
            formData.append("yearBuilt", data.yearBuilt);
            formData.append("price", data.price);
            formData.append("address", data.address);
            formData.append("city", selectedCity);
            formData.append("state", selectedState);
            formData.append("sellerId", sellerId);
            formData.append("propertyType", propertyType);
            formData.append("isRental", isRental);
            formData.append("isSold", isSold);
            formData.append("rooms", JSON.stringify({
                basement: basement,
                guestroom: guestroom,
                studyroom: studyroom,
                yard: yard,
                bathrooms: data.bathroom,
                bedrooms: data.bedroom,
                balconies: data.balcony,
                dryBalcony: data.drybalcony,
                hall: data.hall,
                kitchen: data.kitchen,
                toilets: data.toilet,
            }));

            // Append images
            for (let i = 0; i < files.length; i++) {
                formData.append("images", files[i]);
            }

            console.log(files);

            console.log(formData);

            console.log(JSON.stringify(formData));
            
            try {
                setSubmitting(true);
                const response = await fetch(`http://localhost:4000/api/property`, {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    console.log("Property data inserted successfully!");
                    setSubmitting(false);
                } else {
                    alert("Same Data Found!");
                    console.log("Data not inserted ", response.text);
                    console.log(response);
                    setSubmitting(false);
                }
            } catch (error) {
                setSubmitting(false);
                console.log(
                    "Some problem occrred while submitting the property data",
                    error
                );
            }
        }
    };

    const [files, setFiles] = useState([]);

    return (
        <div>
            <div>
                <div>
                    <h2 className="text-5xl text-center mt-10 mb-20">
                        Add Property Details
                    </h2>
                    <div className="m-5">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input
                                    type="text"
                                    className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                    placeholder="Enter the title"
                                    id="title"
                                    name="title"
                                    {...register("title", {
                                        required: {
                                            value: true,
                                            message: "Property title is required!" 
                                        }
                                    })}
                                />
                                <p className='text-red-500 text-xl'>{errors.title?.message}</p>
                                <textarea
                                    type="text"
                                    className="text-xl w-full h-[20vh] border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                    placeholder="Enter description"
                                    id="description"
                                    name="description"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "Property Description is required!"
                                        }
                                    })}
                                />
                                <p className='text-red-500 text-xl'>{errors.description?.message}</p>
                                <div className="propertyImages text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3">
                                    <p className="text-xl text-slate-700 my-2">Upload Property Images</p>
                                    <input
                                        type="file"
                                        onChange={(e) => {
                                            setFiles(e.target.files);
                                        }} multiple
                                        className="text-xl"
                                    />
                                </div>
                            </div>
                            <h2 className="text-5xl text-center mt-10 mb-10">
                                Enter Residential Details
                            </h2>
                            <div>
                                <input
                                    type="number"
                                    className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                    placeholder="Enter number of bedroom"
                                    id="bedroom"
                                    name="bedroom"
                                    {...register("bedroom", {
                                        max: {
                                            value: 20,
                                            message: 'Value cannot be greater than 20'
                                        },
                                        min: {
                                                value: 0,
                                                message: 'Value cannot be less than 0',
                                        },
                                    })}
                                />
                                <p className='ml-3 text-red-500 text-xl'>{errors.bedroom?.message}</p>
                                <input
                                    type="number"
                                    className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                    placeholder="Enter number of bathrooms"
                                    id="bathroom"
                                    name="bathroom"
                                    {...register("bathroom", {
                                        max: {
                                            value: 20,
                                            message: 'Value cannot be greater than 20'
                                        },
                                        min: {
                                                value: 0,
                                                message: 'Value cannot be less than 0',
                                        },
                                    })}
                                />
                                <p className='ml-3 text-red-500 text-xl'>{errors.bathroom?.message}</p>
                                <input
                                    type="number"
                                    className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                    placeholder="Enter number of toilets"
                                    id="toilet"
                                    name="toilet"
                                    {...register("toilet", {
                                        max: {
                                            value: 20,
                                            message: 'Value cannot be greater than 20'
                                        },
                                        min: {
                                                value: 0,
                                                message: 'Value cannot be less than 0',
                                        },
                                    })}
                                />
                                <p className='ml-3 text-red-500 text-xl'>{errors.toilet?.message}</p>
                                <input
                                    type="number"
                                    className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                    placeholder="Enter the hall"
                                    id="hall"
                                    name="hall"
                                    {...register("hall", {
                                        max: {
                                            value: 20,
                                            message: 'Value cannot be greater than 20'
                                        },
                                        min: {
                                                value: 0,
                                                message: 'Value cannot be less than 0',
                                        },
                                    })}
                                />
                                <p className='ml-3 text-red-500 text-xl'>{errors.hall?.message}</p>
                                <input
                                    type="number"
                                    className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                    placeholder="Enter the kitchen"
                                    id="kitchen"
                                    name="kitchen"
                                    {...register("kitchen", {
                                        max: {
                                            value: 20,
                                            message: 'Value cannot be greater than 20'
                                        },
                                        min: {
                                                value: 0,
                                                message: 'Value cannot be less than 0',
                                        },
                                    })}
                                />
                                <p className='ml-3 text-red-500 text-xl'>{errors.kitchen?.message}</p>
                                <input
                                    type="number"
                                    className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                    placeholder="Enter the balconies"
                                    id="balcony"
                                    name="balcony"
                                    {...register("balcony", {
                                        max: {
                                            value: 20,
                                            message: 'Value cannot be greater than 20'
                                        },
                                        min: {
                                                value: 0,
                                                message: 'Value cannot be less than 0',
                                        },
                                    })}
                                />
                                <p className='ml-3 text-red-500 text-xl'>{errors.balconies?.message}</p>
                                <input
                                    type="number"
                                    className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                    placeholder="Enter the dry balconies"
                                    id="drybalcony"
                                    name="drybalcony"
                                    {...register("drybalcony", {
                                        max: {
                                            value: 20,
                                            message: 'Value cannot be greater than 20'
                                        },
                                        min: {
                                                value: 0,
                                                message: 'Value cannot be less than 0',
                                        },
                                    })}
                                />
                                <p className='ml-3 text-red-500 text-xl'>{errors.drybalcony?.message}</p>
                                <div className="flex justify-center">
                                    <div className="ml-2 my-2">
                                        <button
                                            id="basementDropdownDefaultButton"
                                            data-dropdown-toggle="dropdown"
                                            class="text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                            type="button"
                                            onClick={() => {
                                                var basementDropdown =
                                                    document.getElementById("basementDropdown");
                                                basementDropdown.classList.toggle("hidden");
                                            }}
                                        >
                                            basement: {basement ? "Yes" : "No"}
                                            <svg
                                                class="w-3.5 h-3.5 mt-2 ml-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>

                                        <div
                                            id="basementDropdown"
                                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                        >
                                            <ul
                                                class="h-fit w-52 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200"
                                                aria-labelledby="dropdownDefaultButton"
                                            >
                                                <li
                                                    onClick={() => {
                                                        setBasement(true);
                                                        var basementDropdown =
                                                            document.getElementById("basementDropdown");
                                                        basementDropdown.classList.toggle("hidden");
                                                    }}
                                                >
                                                    <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        Yes
                                                    </p>
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setBasement(false);
                                                        var basementDropdown =
                                                            document.getElementById("basementDropdown");
                                                        basementDropdown.classList.toggle("hidden");
                                                    }}
                                                >
                                                    <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        No
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ml-2 my-2">
                                        <button
                                            id="guestroomDropdownDefaultButton"
                                            data-dropdown-toggle="dropdown"
                                            class="text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                            type="button"
                                            onClick={() => {
                                                var guestroomDropdown =
                                                    document.getElementById("guestroomDropdown");
                                                guestroomDropdown.classList.toggle("hidden");
                                            }}
                                        >
                                            guestroom: {guestroom ? "Yes" : "No"}
                                            <svg
                                                class="w-3.5 h-3.5 mt-2 ml-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>

                                        <div
                                            id="guestroomDropdown"
                                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                        >
                                            <ul
                                                class="h-fit w-52 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200"
                                                aria-labelledby="dropdownDefaultButton"
                                            >
                                                <li
                                                    onClick={() => {
                                                        setGuestRoom(true);
                                                        var guestroomDropdown =
                                                            document.getElementById("guestroomDropdown");
                                                        guestroomDropdown.classList.toggle("hidden");
                                                    }}
                                                >
                                                    <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        Yes
                                                    </p>
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setGuestRoom(false);
                                                        var guestroomDropdown =
                                                            document.getElementById("guestroomDropdown");
                                                        guestroomDropdown.classList.toggle("hidden");
                                                    }}
                                                >
                                                    <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        No
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ml-2 my-2">
                                        <button
                                            id="studyroomDropdownDefaultButton"
                                            data-dropdown-toggle="dropdown"
                                            class="text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                            type="button"
                                            onClick={() => {
                                                var studyroomDropdown =
                                                    document.getElementById("studyroomDropdown");
                                                studyroomDropdown.classList.toggle("hidden");
                                            }}
                                        >
                                            studyroom: {studyroom ? "Yes" : "No"}
                                            <svg
                                                class="w-3.5 h-3.5 mt-2 ml-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>

                                        <div
                                            id="studyroomDropdown"
                                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                        >
                                            <ul
                                                class="h-fit w-52 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200"
                                                aria-labelledby="dropdownDefaultButton"
                                            >
                                                <li
                                                    onClick={() => {
                                                        setStudyRoom(true);
                                                        var studyroomDropdown =
                                                            document.getElementById("studyroomDropdown");
                                                        studyroomDropdown.classList.toggle("hidden");
                                                    }}
                                                >
                                                    <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        Yes
                                                    </p>
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setStudyRoom(false);
                                                        var studyroomDropdown =
                                                            document.getElementById("studyroomDropdown");
                                                        studyroomDropdown.classList.toggle("hidden");
                                                    }}
                                                >
                                                    <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        No
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ml-2 my-2">
                                        <button
                                            id="yardDropdownDefaultButton"
                                            data-dropdown-toggle="dropdown"
                                            class="w-52 justify-center text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                            type="button"
                                            onClick={() => {
                                                var yardDropdown =
                                                    document.getElementById("yardDropdown");
                                                yardDropdown.classList.toggle("hidden");
                                            }}
                                        >
                                            {yard}

                                            <svg
                                                class="w-3.5 h-3.5 mt-2 ml-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>

                                        <div
                                            id="yardDropdown"
                                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                        >
                                            <ul
                                                class="h-fit w-52 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200"
                                                aria-labelledby="dropdownDefaultButton"
                                            >
                                                <li
                                                    onClick={() => {
                                                        setYard("FRONTYARD");
                                                        var yardDropdown =
                                                            document.getElementById("yardDropdown");
                                                        yardDropdown.classList.toggle("hidden");
                                                    }}
                                                >
                                                    <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        FRONTYARD
                                                    </p>
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setYard("BACKYARD");
                                                        var yardDropdown =
                                                            document.getElementById("yardDropdown");
                                                        yardDropdown.classList.toggle("hidden");
                                                    }}
                                                >
                                                    <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        BACKYARD
                                                    </p>
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setYard("COURTYARD");
                                                        var yardDropdown =
                                                            document.getElementById("yardDropdown");
                                                        yardDropdown.classList.toggle("hidden");
                                                    }}
                                                >
                                                    <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        COURTYARD
                                                    </p>
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setYard("GARDEN");
                                                        var yardDropdown =
                                                            document.getElementById("yardDropdown");
                                                        yardDropdown.classList.toggle("hidden");
                                                    }}
                                                >
                                                    <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        GARDEN
                                                    </p>
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        setYard("NO_YARD");
                                                        var yardDropdown =
                                                            document.getElementById("yardDropdown");
                                                        yardDropdown.classList.toggle("hidden");
                                                    }}
                                                >
                                                    <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                        NO_YARD
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-5xl text-center my-5">
                                    Enter Other Property details
                                </h2>
                                <div>
                                    <input
                                        type="number"
                                        className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                        placeholder="Enter area of property"
                                        id="area"
                                        name="area"
                                        {...register("area", {
                                            required: {
                                                value: true,
                                                message : 'Area is required!'
                                            },
                                            max: {
                                                value: 1000000,
                                                message: 'Value cannot be greater than 1000000'
                                            },
                                            min: {
                                                    value: 0,
                                                    message: 'Value cannot be less than 0',
                                            },
                                        })}
                                    />
                                    <p className='ml-3 text-red-500 text-xl'>{errors.area?.message}</p>
                                    <input
                                        type="number"
                                        className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                        placeholder="Enter price of property"
                                        id="price"
                                        name="price"
                                        {...register("price", {
                                            required: {
                                                value: true,
                                                message : 'Price is required!'
                                            },
                                            max: {
                                                value: 10000000000,
                                                message: 'Value cannot be greater than 10000000000'
                                            },
                                            min: {
                                                    value: 0,
                                                    message: 'Value cannot be less than 0',
                                            },
                                        })}
                                    />
                                    <p className='ml-3 text-red-500 text-xl'>{errors.price?.message}</p>
                                    <input
                                        type="text"
                                        className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                        placeholder="Enter the Address"
                                        id="address"
                                        name="address"
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: "Address is required!"
                                            }
                                        })}
                                    />
                                    <p className='ml-3 text-red-500 text-xl'>{errors.address?.message}</p>
                                    <input
                                        type="number"
                                        className="text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3"
                                        placeholder="Enter the approximate year of construction"
                                        id="yearBuilt"
                                        name="yearBuilt"
                                        {...register("yearBuilt", {    
                                            required: {
                                                value: true,
                                                message : 'Year Built is required!'
                                            } ,
                                            max: {
                                                value: 2024,
                                                message: 'Value cannot be greater than 2024'
                                            },
                                            min: {
                                                value: 1900,
                                                message: 'Value cannot be less than 1900',
                                            },
                                        })}
                                    />
                                    <p className='ml-3 text-red-500 text-xl'>{errors.yearBuilt?.message}</p>
                                    <div className="flex justify-center">
                                        <div className="ml-2 my-2">
                                            <button
                                                id="stateDropdownDefaultButton"
                                                data-dropdown-toggle="dropdown"
                                                class="w-64 text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 justify-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                                type="button"
                                                onClick={() => {
                                                    var stateDropdown =
                                                        document.getElementById("stateDropdown");
                                                    stateDropdown.classList.toggle("hidden");
                                                }}
                                            >
                                                {selectedState}

                                                <svg
                                                    class="w-3.5 h-3.5 mt-2 ml-3"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 4 4 4-4"
                                                    />
                                                </svg>
                                            </button>

                                            <div
                                                id="stateDropdown"
                                                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                            >
                                                <ul
                                                    class="h-72 w-56 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="dropdownDefaultButton"
                                                >
                                                    {states.map((state, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() => {
                                                                setSelectedState(state);
                                                                var stateDropdown =
                                                                    document.getElementById("stateDropdown");
                                                                stateDropdown.classList.toggle("hidden");
                                                            }}
                                                        >
                                                            <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                                {state}
                                                            </p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="ml-2 my-2">
                                            <button
                                                id="propertyDropdownDefaultButton"
                                                data-dropdown-toggle="dropdown"
                                                class="w-64 text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 justify-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                                type="button"
                                                onClick={() => {
                                                    var propertyDropdown =
                                                        document.getElementById("propertyDropdown");
                                                    propertyDropdown.classList.toggle("hidden");
                                                }}
                                            >
                                                {propertyType}

                                                <svg
                                                    class="w-3.5 h-3.5 mt-2 ml-3"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 4 4 4-4"
                                                    />
                                                </svg>
                                            </button>

                                            <div
                                                id="propertyDropdown"
                                                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                            >
                                                <ul
                                                    class="h-72 w-56 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="dropdownDefaultButton"
                                                >
                                                    {propType.map((property, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() => {
                                                                setPropertyType(property);
                                                                var propertyDropdown =
                                                                    document.getElementById("propertyDropdown");
                                                                propertyDropdown.classList.toggle("hidden");
                                                            }}
                                                        >
                                                            <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                                {property}
                                                            </p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="ml-2 my-2">
                                            <button
                                                id="cityDropdownDefaultButton"
                                                data-dropdown-toggle="dropdown"
                                                class="w-64 justify-center text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                                type="button"
                                                onClick={() => {
                                                    var cityDropdown =
                                                        document.getElementById("cityDropdown");
                                                    cityDropdown.classList.toggle("hidden");
                                                }}
                                            >
                                                {selectedCity}

                                                <svg
                                                    class="w-3.5 h-3.5 mt-2 ml-3"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 4 4 4-4"
                                                    />
                                                </svg>
                                            </button>

                                            <div
                                                id="cityDropdown"
                                                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                            >
                                                <ul
                                                    class="h-72 w-56 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="dropdownDefaultButton"
                                                >
                                                    {citiesByState.map((city, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() => {
                                                                setSelectedCity(city);
                                                                var cityDropdown =
                                                                    document.getElementById("cityDropdown");
                                                                cityDropdown.classList.toggle("hidden");
                                                            }}
                                                        >
                                                            <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                                {city}
                                                            </p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="ml-2 my-2">
                                            <button
                                                id="isRentalDropdownDefaultButton"
                                                data-dropdown-toggle="dropdown"
                                                class="text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                                type="button"
                                                onClick={() => {
                                                    var isRentalDropdown =
                                                        document.getElementById("isRentalDropdown");
                                                    isRentalDropdown.classList.toggle("hidden");
                                                }}
                                            >
                                                isRental: {isRental ? "Yes" : "No"}
                                                <svg
                                                    class="w-3.5 h-3.5 mt-2 ml-3"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 4 4 4-4"
                                                    />
                                                </svg>
                                            </button>

                                            <div
                                                id="isRentalDropdown"
                                                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                            >
                                                <ul
                                                    class="h-fit w-52 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="dropdownDefaultButton"
                                                >
                                                    <li
                                                        onClick={() => {
                                                            setIsRental(true);
                                                            var isRentalDropdown =
                                                                document.getElementById("isRentalDropdown");
                                                            isRentalDropdown.classList.toggle("hidden");
                                                        }}
                                                    >
                                                        <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                            Yes
                                                        </p>
                                                    </li>
                                                    <li
                                                        onClick={() => {
                                                            setIsRental(false);
                                                            var isRentalDropdown =
                                                                document.getElementById("isRentalDropdown");
                                                            isRentalDropdown.classList.toggle("hidden");
                                                        }}
                                                    >
                                                        <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                            No
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="ml-2 my-2">
                                            <button
                                                id="isSoldDropdownDefaultButton"
                                                data-dropdown-toggle="dropdown"
                                                class="text-gray-600 border-2 border-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-2xl px-3 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                                type="button"
                                                onClick={() => {
                                                    var isSoldDropdown =
                                                        document.getElementById("isSoldDropdown");
                                                    isSoldDropdown.classList.toggle("hidden");
                                                }}
                                            >
                                                isSold: {isSold ? "Yes" : "No"}
                                                <svg
                                                    class="w-3.5 h-3.5 mt-2 ml-3"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 10 6"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 4 4 4-4"
                                                    />
                                                </svg>
                                            </button>

                                            <div
                                                id="isSoldDropdown"
                                                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                            >
                                                <ul
                                                    class="h-72 w-56 px-3 pb-3 mt-3 overflow-y-auto text-xl text-gray-700 dark:text-gray-200"
                                                    aria-labelledby="dropdownDefaultButton"
                                                >
                                                    <li
                                                        onClick={() => {
                                                            setIsSold(true);
                                                            var isSoldDropdown =
                                                                document.getElementById("isSoldDropdown");
                                                            isSoldDropdown.classList.toggle("hidden");
                                                        }}
                                                    >
                                                        <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                            Yes
                                                        </p>
                                                    </li>
                                                    <li
                                                        onClick={() => {
                                                            setIsSold(false);
                                                            var isSoldDropdown =
                                                                document.getElementById("isSoldDropdown");
                                                            isSoldDropdown.classList.toggle("hidden");
                                                        }}
                                                    >
                                                        <p class="block text-xl px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                                                            No
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-72 mx-auto my-5">
                                <button type='submit' className='w-72 text-xl rounded-lg bg-black text-white p-3 px-8 focus:bg-gray-700 focus:duration-200 focus:transition-all' disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;
