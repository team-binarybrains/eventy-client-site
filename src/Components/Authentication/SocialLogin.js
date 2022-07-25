import React from 'react';
import auth from '../../Firebase/Firebase.init'
import { useSignInWithFacebook, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
// import Loading from '../../../Shared/Loading/Loading';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
import '../ContactUs/ContactUs.css'


const SocialLogin = () => {


  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)

  const [signInWithFacebook, facebookUser, FacebookLoading, FacebookError] = useSignInWithFacebook(auth);

  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  if (googleError || FacebookError) {

    // toast.error(<>{googleError?.message}, {FacebookError?.message}</>)
  }

  if (googleLoading || FacebookLoading) {
    // return <Loading></Loading>
  }

  if (googleUser || facebookUser) {
    navigate(from, { replace: true });

    // toast.success('Congratulation ! You are Loged In successfully. Enjoy our more feature here.')
  }

  // const googleSignIn = async () => {
  //   signInWithGoogle()
  //   const { data } = await axios.post(`https://cryptic-stream-11517.herokuapp.com/signup`, {googleUser})
  //       localStorage.setItem('accessJwtToken', data.accessJwtToken)
  // }

  return (
    <div>
      <div className=' py-2 px-4 flex lg:justify-between justify-center lg:gap-0 gap-16 items-center social-shadow'>

        <div className='text-gray-300 hover:text-gray-800'>
          <button onClick={() => signInWithGoogle()} className='lg:text-4xl text-6xl hover:opacity-60 bounce'> <FcGoogle className=''></FcGoogle></button>
        </div>

        <h2 className='font-semibold hidden lg:block'>CONNECT WITH SOCIAL ACCOUNT</h2>

        <div className='text-gray-300 hover:text-gray-800'>
          <button onClick={() => signInWithFacebook()} className='lg:text-3xl text-5xl hover:opacity-60 bounce '> <BsFacebook className='bg-white text-sky-700'></BsFacebook></button>
        </div>

      </div>

    </div>
  );
};

export default SocialLogin;
