import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="m-16 md:w-1/3  w-2/3 mx-auto">
      <h2 className="text-3xl font-bold text-center">Login Now</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-3"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Email:</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Type your email"
            className="input input-bordered w-full rounded"
            {...register("email")}
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Your Password:</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Type your password"
            className="input input-bordered w-full rounded"
            {...register("password")}
          />
        </div>
        <input value="login" type="submit" />
      </form>
    </div>
  );
};

export default Login;
