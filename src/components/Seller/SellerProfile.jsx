import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import sellerprofile from '../../assets/Seller/sellerprofile.png'

const Profile = () => {

  const [profile, setProfile] = useState({});

  const { register, control, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const sellerId = localStorage.getItem('sellerId');

  useEffect(() => {
    fetchSellerDetails(sellerId);
  }, []);

  const fetchSellerDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/seller/${id}`, {
        method: "GET"
      });

      const data = await response.json();

      if (response.ok) {
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
      }
      else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const onSubmit = async (data) => {
    try {
      if(data.name == ''){
        data.name = name;
      }
      if(data.email == ''){
        data.email = email;
      }
      if(data.phone == ''){
        data.phone = phone;
      }
      setSubmitting(true);
      const response = await fetch(`http://localhost:4000/api/seller/${sellerId}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        alert('Data Updated Successfully!')
        setSubmitting(false);
        console.log("Data Updated Successfully!");
      }
      else {
        alert('Data Updation Failed!')
        setSubmitting(false);
        console.log(response.statusText);
      }
    } catch (error) {
      alert('Data Updation Failed!')
      setSubmitting(false);
      console.log(error.message);
    }

  }

  const [isSellerNameEditable, setIsSellerNameEditable] = useState(false);
  const [isSellerEmailEditable, setIsSellerEmailEditable] = useState(false);
  const [isSellerPhoneEditable, setIsSellerPhoneEditable] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      <div>
        <h2 className='text-6xl font-bold text-center my-2'>Profile Details</h2>
        <h3 className='text-3xl font-bold text-center my-3'>Update profile details is needed!</h3>
        <div className='flex justify-center my-5'>
          <div>
            <img src={sellerprofile} alt="" />
          </div>
          <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='w-[50vw] h-full flex flex-col justify-center px-10'>
              <div className={`flex text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3`}>
                <input
                  type="text"
                  className={`outline-none w-full bg-transparent rounded-lg text-xl mx-2 ${isSellerNameEditable ? "border-black/10 px-2" : "border-transparent"}`}
                  {...register('name')}
                  readOnly={!isSellerNameEditable}
                  placeholder={name}
                />
                <button
                  className="inline-flex w-12 h-12 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSellerNameEditable(prev => !prev)
                    }
                  }
                >
                  {isSellerNameEditable ? "📁" : "✏️"}
                </button>
              </div>
              <div className={`flex text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3`}>
                <input
                  type="text"
                  className={`outline-none w-full bg-transparent rounded-lg text-xl mx-2 ${isSellerEmailEditable ? "border-black/10 px-2" : "border-transparent"}`}
                  {...register('email')}
                  readOnly={!isSellerEmailEditable}
                  placeholder={email}
                />
                <button
                  className="inline-flex w-12 h-12 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSellerEmailEditable(prev => !prev)
                    }
                  }
                >
                  {isSellerEmailEditable ? "📁" : "✏️"}
                </button>
              </div>
              <div className={`flex text-xl w-full border-2 border-slate-400 shadow-lg shadow-slate rounded-xl my-3 mx-3 p-3`}>
                <input
                  type="text"
                  className={`outline-none w-full bg-transparent rounded-lg text-xl mx-2 ${isSellerPhoneEditable ? "border-black/10 px-2" : "border-transparent"}`}
                  {...register('phone')}
                  readOnly={!isSellerPhoneEditable}
                  placeholder={phone}
                />
                <button
                  className="inline-flex w-12 h-12 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSellerPhoneEditable(prev => !prev)
                    }
                  }
                >
                  {isSellerPhoneEditable ? "📁" : "✏️"}
                </button>
              </div>
              <div className="w-72 mx-auto my-5">
                  <button type='submit' className='w-72 text-xl rounded-lg bg-black text-white p-3 px-8 focus:bg-gray-700 focus:duration-200 focus:transition-all' disabled={submitting}>{submitting ? 'Updating...' : 'Update'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile