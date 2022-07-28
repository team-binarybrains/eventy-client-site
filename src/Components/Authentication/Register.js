import React, { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useToken from "../Hooks/useToken";
import SocialLogin from "./SocialLogin";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../Share/Loading";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    // console.log(data.name, data.email, data.password);
    await updateProfile({ displayName: data.name });
    // for name send backend
    const currentUser = {
      displayName: data.name,
      email: data.email,
    };
    fetch(`http://localhost:5000/user/${data.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        // authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(currentUser)
    })
      .then(res => res.json())
      .then(inserted => {
        if (inserted.acknowledged) {
          // toast.success("name update Successfully");
        }
      })
    toast.success("Registered Successfully");
    reset();
  };
  const [token] = useToken(user);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, user, navigate]);


  if (loading || updating) {
    <Loading></Loading>;
  }
  let signInError;
  if (error || updateerror) {
    signInError = (
      <p className="text-red-600 text-[18px] py-3">{error?.message}</p>
    );
  }
  return (
    <div className="card-back ">
      <div className="center-wrap">
        <div className="section text-center space-y-5">
          <h4 className="mb-4 pb-3 text-white">Sign Up</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group ">
              <input
                type="text"
                name="userName"
                className="form-style"
                placeholder="Your Full Name"
                id="logname"
                // autoComplete="on"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>

              <i className="input-icon uil uil-user"></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="email"
                name="email"
                className="form-style"
                placeholder="Your Email"
                id="logemail"
                autoComplete="off"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                })}
              />

              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
              <i className="input-icon uil uil-at"></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                name="password"
                className="form-style"
                placeholder="Your Password"
                id="logpass"
                autoComplete="off"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            {signInError}
            <div className="flex justify-center">
              <button type="submit" class=" at-selection type-2  mt-4">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
