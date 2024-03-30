import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';

const BuyerRegister = () => {

  const [registering, isRegistering] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, control, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    isRegistering(true);

    try{
      data.phone = data.phone.toString();
      console.log(JSON.stringify(data));
      const response = await fetch("http://localhost:4000/api/buyer/register", {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data)
      });

      if(response.ok){  
        console.log("Form Submitted Successfully");
        setSuccess(true);
        navigate('/buyerlogin');
      }
      else{
        console.log("Failed to submit the form", response.statusText);
      }

      isRegistering(false);
    }
    catch(error){
      console.log("An error occured while submitting the data ", error);
    }
  }

  return (
    <>
      <form className='h-[80vh] flex justify-center items-center' method='post' onSubmit={handleSubmit(onSubmit)}>
        <div className='border-2 border-slate-300 shadow-lg shadow-gray-400 w-[50%] h-[80%] p-20'>
          <h2 className='text-6xl font-bold text-center mb-10'>Create Buyer Account</h2>

          <div className='flex justify-center my-4'>
            <div className='w-full mx-3'>
              <input type="text" className='text-xl w-full rounded-lg border-2 border-slate-400 shadow-lg shadow-slate p-3' placeholder='Enter First Name' id='firstname' name='firstname' {...register("firstname", {
                required: {
                  value: true,
                  message: "First name is required!"
                }
              })} />
              <p className='text-red-500 text-xl'>{errors.firstname?.message}</p>
            </div>
            <div className='w-full mx-3'>
              <input type="text" className='text-xl w-full rounded-lg border-2 border-slate-400 shadow-lg shadow-slate p-3' placeholder='Enter last name' id='lastname' name='lastname' {...register("lastname", {
                required: {
                  value: true,
                  message: "Last name is required!"
                }
              })} />
              <p className='text-red-500 text-xl'>{errors.lastname?.message}</p>
            </div>
          </div>
          <div className='flex justify-center my-4'>
          <div className='w-full mx-3'>
            <input type="email" className='text-xl w-full rounded-lg border-2 border-slate-400 shadow-lg shadow-slate p-3' placeholder='Enter Your Email' id='email' name='email' {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format"
                }
              })} />
              <p className='text-red-500 text-xl'>{errors.email?.message}</p>
          </div>
          <div className='w-full mx-3'>
              <input type="number" className='text-xl w-full rounded-lg border-2 border-slate-400 shadow-lg shadow-slate p-3' placeholder='Enter Your Phone' id='phone' name='phone' {...register("phone", {
                required: {
                  value: true,
                  message: "Phone number is required!"
                },
                valueAsNumber: {
                  value: true,
                  message: "Invalid Format!"
                }
              })} />
              <p className='text-red-500 text-xl'>{errors.phone?.message}</p>
          </div>
          </div>
          <div className='flex justify-center my-4'>
            <div className='w-full mx-3'>
              <input type="password" className='text-xl w-full rounded-lg border-2 border-slate-400 shadow-lg shadow-slate p-3 text-center' placeholder='Enter Password' id='password' name='password' {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required!"
                  },
                  pattern: {
                    value: /^.{8}$/,
                    message: "Password should be atleast 8 characters!"
                  }
                })} />
                <p className='text-red-500 text-xl'>{errors.password?.message}</p>
            </div>
          </div>
          <div className='mx-2 mt-14'>
            <button type='submit' className='text-xl w-full rounded-lg bg-black text-white p-3 px-8 focus:bg-gray-700 focus:duration-200 focus:transition-all' disabled={registering}>{registering ? 'Registering...' : 'Register'}</button>
          </div>
          {success && setInterval(<p className='text-green text-2xl'>Registration Successful!</p>, 4000)}
          <div className='flex text-2xl justify-center mt-3'>
            <p>Already have an account</p>
            <Link to='/buyerlogin' className='no-underline'>
              <p className='text-slate-500 mx-2'>Login!</p>
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}

export default BuyerRegister