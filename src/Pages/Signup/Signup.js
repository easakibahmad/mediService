import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import signupBG from "../../assets/images/signupBG.jpg";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLogin } from "react-icons/ai";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { createUser, updateUser, signInWithGooglePopUp } =
    useContext(AuthContext);
  const [signupError, setSignupError] = useState("");

  const handleSignup = (data) => {
    console.log(data);
    setSignupError("");
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast("User created successfully!!");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setSignupError(error.message);
      });
  };

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
      className="p-16"
      style={{
        background: `url(${signupBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="md:w-2/3 lg:w-1/3  w-full mx-auto">
        <h2
          className="lg:text-2xl text-xl  mb-6 font-medium text-center"
          style={{
            color: "#184C4f",
          }}
        >
          Signup Now
        </h2>
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="grid grid-cols-1 gap-1 bg-white p-2 rounded"
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
          </div>
          <span className="btn rounded btn-outline btn-success mt-3">
            <input value="SIGNUP" type="submit" />
            <span className="text-xl pl-1">
              <AiOutlineLogin></AiOutlineLogin>
            </span>
          </span>
          {signupError && <p className="text-red-500">{signupError}</p>}
          <p className="mt-3 text-sm">
            already have an account? please{" "}
            <Link className="text-success hover:underline" to="/login">
              Login
            </Link>{" "}
            now!
          </p>
          <div className="divider">OR</div>
          <div
            onClick={handleSignInWithGoogle}
            className="btn btn-outline btn-success w-full rounded"
          >
            {" "}
            <span className="text-xl pr-1">
              <FcGoogle></FcGoogle>
            </span>
            continue with google
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
