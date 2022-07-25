import React from "react";
import "./Login.css";
import Register from "./Register";
import SocialLogin from "./SocialLogin";
const Login = () => {
  return (
    <div className="bg-transparent">
      <input type="checkbox" id="login-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box rounded-md overflow-y-hidden">
          <div className="flex justify-end">
            <label
              for="login-modal"
              class="text-white p-2 w-10 text-center hover:bg-black font-bold cursor-pointer rounded-full  bg-green-400 border-none "
            >
              X
            </label>
          </div>
          {/* start */}

          <div class="section">
            <div class="">
              <div class="row  justify-content-center">
                <div class="col-12 text-center align-self-center py-5">
                  <div class="section pb-5 pt-5 pt-sm-2 text-center">
                    <h6 class="mb-0 pb-3">
                      <span>Log In </span>
                      <span>Sign Up</span>
                    </h6>
                    <input
                      class="checkbox"
                      type="checkbox"
                      id="reg-log"
                      name="reg-log"
                    />
                    <label for="reg-log"> </label>
                    <div class="card-3d-wrap mx-auto">
                      <div class="card-3d-wrapper">
                        <div class="card-front">
                          <div class="center-wrap">
                            <div class="section space-y-5 text-center">
                              <h4 class="mb-4 pb-3 text-white">Log In</h4>
                              <div class="form-group">
                                <input
                                  type="email"
                                  name="logemail"
                                  class="form-style "
                                  placeholder="Your Email"
                                  id="logemail"
                                  autocomplete="off"
                                />
                                <i class="input-icon uil uil-at"></i>
                              </div>
                              <div class="form-group mt-2">
                                <input
                                  type="password"
                                  name="logpass"
                                  class="form-style"
                                  placeholder="Your Password"
                                  id="logpass"
                                  autocomplete="off"
                                />
                                <i class="input-icon uil uil-lock-alt"></i>
                              </div>
                              <div className="flex justify-center">
                                <button class=" at-selection type-2  mt-4">
                                  Log in
                                </button>
                              </div>

                              <p class="mb-0 mt-4 text-center">
                                <a href="#0" class="link">
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

          {/* end */}

          {/* social login */}
          <SocialLogin></SocialLogin>

          {/* <div class="modal-action  flex justify-center">
            <button
              for="login-modal"
              class="  btn bg-green-400 border-none w-36 "
            >
              Login
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
