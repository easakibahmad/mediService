import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="m-16 md:w-1/3  w-2/3 mx-auto">
      <h2 className="text-3xl font-bold text-center">Login Now</h2>
      <form
        onSubmit={handleSubmit(handleLogin)}
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
          <label className="label">
            <span className="label-text">Forget password?</span>
          </label>
        </div>
        <input className="btn btn-accent rounded" value="Login" type="submit" />
      </form>
      <p className="mt-3">
        new to mediService? please{" "}
        <Link className="text-purple-500" to="/signup">
          signup
        </Link>{" "}
        first!!
      </p>
      <div className="divider">OR</div>
      <div className="btn btn-accent w-full rounded">continue with google</div>
    </div>
  );
};

export default Login;
