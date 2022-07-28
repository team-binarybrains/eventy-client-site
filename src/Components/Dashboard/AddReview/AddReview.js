import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../Share/Loading';
// import Swal from 'sweetalert2';
import './AddReview.css'

const AddReview = () => {
   const [user, loading, error] = useAuthState(auth);
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const [stars, setStars] = useState(5);
   const countStars = (e) => {
      setStars(e.target.value);
   }
   const onSubmit = data => {
      // total review data
      const review = {
         email: auth?.currentUser?.email,
         userName: user?.displayName,
         description: data.reviewDescription,
         rating: stars,
         image: user?.photoURL
      }
      // send services data to database
      fetch('http://localhost:5000/post-review', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('token')}`
         },
         body: JSON.stringify(review)
      })
         .then(res => res.json())
         .then(data => {
            if (data?.insert) {
               toast.success('Thanks for giving the review', { theme: 'colored' });
            }
            else {
               toast.error('You already added your review', { theme: 'colored' })
            }
            reset();
         })
   }
   if (loading) {
      return <Loading />
   }
   if (error) {
      console.log(error);
   }
   return (
      <div>
         <div id="services-content" className='rounded-none bg-white'>
            <div className="text-center">
               <h1 className="text-2xl text-slate-800 pt-4" >Add Review</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="mx-4 pt-8">
                  <div className=''>
                     <label htmlhtmlFor="reviewDescription" className="text-slate-900 ">Review Description</label>
                     <textarea id="reviewDescription" name="servicesDescription" type="text" className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-slate-900/60 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm max-h-40 min-h-[10rem] overflow-y-scroll" placeholder="Please provide the review here"
                        cols="30" rows="5"
                        {...register("reviewDescription", {
                           required: {
                              value: true,
                              message: "Please provide the review here",
                           },
                        }
                        )}
                     />
                     <label className="">
                        {errors.reviewDescription?.type === "required" && (
                           <span className="text-red-500 text-sm pt-2 lowercase">
                              {errors.reviewDescription.message}
                           </span>
                        )}
                     </label>
                  </div>

               </div>

               <div className="text-center flex items-center m-4 gap-x-3 mb-8">
                  <h3 className='text-slate-900'>Ratings :</h3>
                  <div onClick={countStars} className="rating">
                     <input type="radio" name="rating" className="mask mask-star-2 bg-yellow-500" value='1' />
                     <input type="radio" name="rating" className="mask mask-star-2 bg-yellow-500" value='2' />
                     <input type="radio" name="rating" className="mask mask-star-2 bg-yellow-500" value='3' />
                     <input type="radio" name="rating" className="mask mask-star-2 bg-yellow-500" value='4' />
                     <input type="radio" name="rating" className="mask mask-star-2 bg-yellow-500" value='5' />
                  </div>
               </div>

               <button className='uppercase bg-green-400 w-full py-2 text-white hover:bg-green-500 rounded-b transition-all'>submit</button>
            </form>
         </div>
      </div>
   );
};

export default AddReview;