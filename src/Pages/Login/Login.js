import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    setLoginError("");
    console.log(data);
    signIn(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setLoginError(err.message);
      });
  };

  return (
    <div className="m-16 md:w-1/3  w-2/3 mx-auto">
      <h2 className="text-3xl  mb-6 font-bold text-center">Login Now</h2>
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
        <input className="btn btn-accent rounded" value="Login" type="submit" />
        <>{loginError && <p className="text-red-500">{loginError}</p>}</>

        <p className="mt-3">
          new to mediService? please{" "}
          <Link className="text-info" to="/signup">
            signup
          </Link>{" "}
          first!!
        </p>
        <div className="divider">OR</div>
        <div className="btn btn-accent w-full rounded">
          continue with google
        </div>
      </form>
    </div>
  );
};

export default Login;
