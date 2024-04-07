import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import SellerContext from '../../../contexts/SellerContext.jsx';
import { Link, useNavigate } from 'react-router-dom';

const SellerLogin = () => {
    const [logging, islogging] = useState(false);

    const { register, control, handleSubmit, formState } = useForm();
    const { errors } = formState;
  
    const {setSellerLoggedIn, setSellerId} = useContext(SellerContext);

    const navigate = useNavigate();

    const onSubmit = async (data) => {
      islogging(true);
  
      try{
        const response = await fetch(`http://localhost:4000/api/seller/login`, {
          method: "POST",
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify(data)
        });
  
        const sellerdata = await response.json();

        localStorage.setItem('accessToken', sellerdata.data.accessToken);
        localStorage.setItem('refreshToken', sellerdata.data.refreshToken);
        
        if(response.ok){  
            console.log(sellerdata);
            console.log("Login Successfully");
            
            // settings contexts
            setSellerLoggedIn(true);
            setSellerId(sellerdata.data.seller._id);
            localStorage.setItem('sellerLoggedIn', true);
            localStorage.setItem('sellerId', sellerdata.data.seller._id);
            islogging(false);

            navigate('/sellerdashboard');
        }
        else{
          console.log("Failed to login!", response.statusText);
        }
  
        islogging(false);

        // settings value inside context
        // const {setSellerLoggedIn, setSellerId} = useContext(SellerContext);
      }
      catch(error){
        alert("Seller does not exist");
        islogging(false);
        console.log("An error occured while submitting the data ", error);
      }
    }
  
    return (
      <>
        <form className='h-[100vh] flex justify-center items-center' method='post' onSubmit={handleSubmit(onSubmit)}>
          <div className='border-2 border-slate-300 shadow-lg shadow-gray-400 w-[50%] h-[60%] p-20'>
            <h2 className='text-6xl font-bold text-center mb-10'>Login To Your Account</h2>
  
            <div className='flex justify-center my-10'>
            <div className='w-2/4 mx-3'>
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
            </div>
            <div className='flex justify-center my-10'>
              <div className=' w-2/4 mx-3'>
                <input type="password" className='text-xl w-full rounded-lg border-2 border-slate-400 shadow-lg shadow-slate p-3' placeholder='Enter Password' id='password' name='password' {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required!"
                    },
                    pattern: {
                      value: /^.{8,}$/,
                      message: "Password should be atleast 8 characters!"
                    }
                  })} />
                  <p className='text-red-500 text-xl'>{errors.password?.message}</p>
              </div>
            </div>
            <div className='w-2/4 m-auto'>
              <button type='submit' className='text-xl w-full m-auto rounded-lg bg-black text-white p-3 px-8 focus:bg-gray-700 focus:duration-200 focus:transition-all' disabled={logging}>{logging ? 'Logging In...' : 'Login'}</button>
            </div>
            <div className='flex text-2xl justify-center mt-3'>
              <p>Don't have an account?</p>
              <Link to='/sellerregister' className='no-underline'>
                <p className='text-slate-500 mx-2'>Register!</p>
              </Link>
            </div>
          </div>
        </form>
      </>
    )
}

export default SellerLogin