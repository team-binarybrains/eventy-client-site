import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/Firebase.init";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    console.log(data.name, data.email, data.password);
    reset();
  };

  let signInError;
  if (error) {
    signInError = (
      <p className="text-red-600 text-[18px] py-3">{error?.message}</p>
    );
  }
  return (
    <div class="card-back ">
      <div class="center-wrap">
        <div class="section text-center space-y-5">
          <h4 class="mb-4 pb-3 text-white">Sign Up</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group ">
              <input
                type="text"
                // name="logname"
                class="form-style"
                placeholder="Your Full Name"
                id="logname"
                // autocomplete="on"
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

              <i class="input-icon uil uil-user"></i>
            </div>
            <div class="form-group mt-2">
              <input
                type="email"
                // name="logemail"
                class="form-style"
                placeholder="Your Email"
                id="logemail"
                autocomplete="off"
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
              <i class="input-icon uil uil-at"></i>
            </div>
            <div class="form-group mt-2">
              <input
                type="password"
                // name="logpass"
                class="form-style"
                placeholder="Your Password"
                id="logpass"
                autocomplete="off"
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
              <i class="input-icon uil uil-lock-alt"></i>
            </div>
            {signInError}
            <div className="flex justify-center">
              <button
                type="submit"
                class=" at-selection type-2  mt-4"
              >Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
