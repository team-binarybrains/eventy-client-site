import React from "react";

const Login = () => {
  return (
    <div>
      <input type="checkbox" id="login-modal" class="modal-toggle" />
      <div class="modal ">
        <div class="modal-box rounded-md">
          <div className="flex justify-between">
            <h1 class="font-bold text-lg text-center ">Login</h1>
            <label
              for="login-modal"
              class="text-white p-2 w-10 text-center hover:bg-black font-bold cursor-pointer rounded-full  bg-green-400 border-none "
            >
              X
            </label>
          </div>

          <div class="modal-action  flex justify-center">
            <button
              for="login-modal"
              class="  btn bg-green-400 border-none w-36 "
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
