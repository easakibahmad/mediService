import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);
  const handleSignup = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="m-16 md:w-1/3  w-2/3 mx-auto">
      <h2 className="text-3xl  mb-6 font-bold text-center">Signup Now</h2>
      <form
        onSubmit={handleSubmit(handleSignup)}
        className="grid grid-cols-1 gap-3"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Name:</span>
          </label>
          <input
            name="name"
            type="text"
            className="input input-bordered w-full rounded"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-rose-500	" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Email:</span>
          </label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full rounded"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && (
            <p className="text-rose-500	" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Your Password:</span>
          </label>
          <input
            name="password"
            type="password"
            className="input input-bordered w-full rounded"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "password must be at least 6 characters or longer",
              },
              pattern: {
                value: /(?=.*[!#$%&? "])(?=.*[A-Z])/,
                message:
                  "password must have at least 1 special character and 1 uppercase character",
              },
            })}
          />
          {errors.password && (
            <p className="text-rose-500	" role="alert">
              {errors.password?.message}
            </p>
          )}

          <label className="label">
            <span className="label-text">Forget password?</span>
          </label>
        </div>
        <input
          className="btn btn-accent rounded"
          value="signup"
          type="submit"
        />
        <p className="mt-3">
          already have an account? please{" "}
          <Link className="text-info" to="/login">
            Login
          </Link>{" "}
          now!!
        </p>
        <div className="divider">OR</div>
        <div className="btn btn-accent w-full rounded">
          continue with google
        </div>
      </form>
    </div>
  );
};

export default Signup;
