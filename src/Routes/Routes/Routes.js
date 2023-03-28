import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment";
import Signup from "../../Pages/Signup/Signup";
import Dashboard from "../../dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Providers from "../../Pages/Providers/Providers";
import Services from "../../Pages/Services/Services";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/providers",
        element: <Providers></Providers>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
]);
