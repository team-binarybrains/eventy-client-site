import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Register = () => {
  return (
    <div class="card-back ">
      <div class="center-wrap">
        <div class="section text-center space-y-5">
          <h4 class="mb-4 pb-3 text-white">Sign Up</h4>
          <div class="form-group ">
            <input
              type="text"
              name="logname"
              class="form-style"
              placeholder="Your Full Name"
              id="logname"
              autocomplete="off"
            />
            <i class="input-icon uil uil-user"></i>
          </div>
          <div class="form-group mt-2">
            <input
              type="email"
              name="logemail"
              class="form-style"
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
            <button class=" at-selection type-2  mt-4">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
