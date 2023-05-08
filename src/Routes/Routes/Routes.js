import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Providers from "../../Pages/Providers/Providers";
import Services from "../../Pages/Services/Services";
import HealthPlans from "../../Pages/HelthPlans/HealthPlans";
import About from "../../Pages/About/About";
import NewsDetail from "../../Pages/Home/Details/NewsDetail";
import InfoDetail from "../../Pages/Home/Details/InfoDetail";
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
        element: (
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        ),
      },
      {
        path: "/providers",
        element: <Providers></Providers>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/helthplans",
        element: <HealthPlans></HealthPlans>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/news/:id",
        element: <NewsDetail></NewsDetail>,
        loader: ({ params }) =>
          fetch(
            `https://medi-service-server-site-easakibahmad.vercel.app/news/${params.id}`
          ),
      },
      {
        path: "/info/:id",
        element: <InfoDetail></InfoDetail>,
        loader: ({ params }) =>
          fetch(
            `https://medi-service-server-site-easakibahmad.vercel.app/info/${params.id}`
          ),
      },
    ],
  },
]);
