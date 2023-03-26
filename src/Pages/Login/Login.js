import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import loginBG from "../../assets/images/loginBG.jpg";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLogin } from "react-icons/ai";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn, signInWithGooglePopUp } = useContext(AuthContext);
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

  // const handlePasswordReset = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form?.email?.value;
  //   resetPassword(email)
  //     .then(() => {})
  //     .catch((err) => console.log(err));
  // };

  //google pop up sign in method
  const handleSignInWithGoogle = () => {
    signInWithGooglePopUp()
      .then((res) => {
        toast("successfully signed in with google!");
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div
      className="pb-10"
      style={{
        background: `url(${loginBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="h-8 md:pl-6 pl-2 md:h-20 flex items-center"
        style={{
          backgroundColor: "#EC715A",
        }}
      >
        {" "}
        <h1 className="md:text-4xl text-xl font-medium text-white">
          Login Now
        </h1>
      </div>
      <div className="md:h-2 h-1 bg-red-600"></div>
      <div className=" md:w-2/3 lg:w-1/3  w-full mx-auto mt-8 p-4">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="grid grid-cols-1 gap-1 bg-white p-2 rounded"
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
            <label
              // onClick={handlePasswordReset}
              className="label mt-3 cursor-pointer"
            >
              <span className="label-text">Forget password?</span>
            </label>
          </div>
          <span className="btn btn-outline btn-success rounded">
            <input value="LOGIN" type="submit" />
            <span className="text-xl pl-1">
              <AiOutlineLogin></AiOutlineLogin>
            </span>
          </span>
          <>{loginError && <p className="text-red-500">{loginError}</p>}</>

          <p className="mt-3 text-sm md:text-md">
            new to MediService? please{" "}
            <Link className="text-success hover:underline" to="/signup">
              signup
            </Link>{" "}
            first!
          </p>
          <div className="divider">OR</div>
          <div
            onClick={handleSignInWithGoogle}
            className="btn btn-outline btn-success w-full rounded"
          >
            <span className="text-xl pr-1">
              <FcGoogle></FcGoogle>
            </span>{" "}
            continue with google
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
