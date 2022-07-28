import React from "react";
import "./Login.css";
import Register from "./Register";
import SocialLogin from "./SocialLogin";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { useForm } from "react-hook-form";
import { TiTick } from 'react-icons/ti';

const Login = () => {
  const [signInWithEmailAndPassword, emaiUuser, loading, error] = useSignInWithEmailAndPassword(auth);
  const { register, formState: { errors }, handleSubmit, reset, } = useForm();

  const { user } = useAuthState(auth)
  console.log(user);

  const onSubmit = async (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data.email, data.password);
    reset();
  };

  let signInError;
  if (error) {
    signInError = (
      <p className="text-red-600 text-[18px] py-3">{error?.message}</p>
    );
  }


  return (
    <div>

        <div className="bg-transparent">
          <input type="checkbox" id="login-modal" className="modal-toggle" />
          <div className="modal overflow-x-hidden">
            <div className="modal-box rounded-md">
              <div className="flex justify-end">
                <label
                  htmlFor="login-modal"
                  className="text-white p-2 w-10 text-center hover:bg-black font-bold cursor-pointer rounded-full  bg-green-400 border-none "
                >
                  X
                </label>
              </div>
              {/* start */}

              <div className="section">
                <div className="">
                  <div className="row  justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                      <div className="section pb-5 pt-5 pt-sm-2 text-center">
                        <h6 className="mb-0 pb-3">
                          <span>Log In </span>
                          <span>Sign Up</span>
                        </h6>
                        <input
                          className="checkbox"
                          type="checkbox"
                          id="reg-log"
                          name="reg-log"
                        />
                        <label htmlFor="reg-log"> </label>
                        <div className="card-3d-wrap mx-auto">
                          <div className="card-3d-wrapper">
                            <div className="card-front">
                              <div className="center-wrap">
                                <div className="section space-y-5 text-center">
                                  <h4 className="mb-4 pb-3 text-white">Log In</h4>
                                  <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                      <input
                                        type="email"
                                        name="logemail"
                                        className="form-style "
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
                                        name="logpass"
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
                                            message:
                                              "Password Must be 6 characters or longer",
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
                                    <div className="flex justify-center">
                                      <button
                                        type="submit"
                                        className=" at-selection type-2  mt-4"
                                      >Log in</button>
                                    </div>
                                  </form>
                                  <p className="mb-0 mt-4 text-center">
                                    <a href="#0" className="link">
                                      Forgot your password?
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <Register></Register>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>


              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
    </div>

  );
};

export default Login;
