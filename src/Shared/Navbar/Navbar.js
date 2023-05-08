import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import duLogo from "../../assets/images/DUlogo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuTop = (
    <React.Fragment>
      <Link
        className=" hover:text-blue-500 hover:underline rounded uppercase lg:text-3xl text-xl font-bold"
        to="https://www.du.ac.bd/"
      >
        DU
      </Link>
    </React.Fragment>
  );
  const menuItems = (
    <React.Fragment>
      <Link className="grid grid-cols-1 menuItem" to="/services">
        <div>Find Patient Services</div>
        <div className="h-2 divHover"></div>
      </Link>
      <Link to="/providers" className="menuItem">
        <div>Find a Provider</div>
        <div className="h-2 divHover"></div>
      </Link>

      <Link className="menuItem" to="/appointment">
        <div>Request an Appointment</div>
        <div className="h-2 divHover"></div>
      </Link>

      <Link to="/helthplans" className="menuItem">
        <div>Learn About Health Plans</div>
        <div className="h-2 divHover"></div>
      </Link>
      <Link to="/about" className="menuItem">
        <div>About Us</div>
        <div className="h-2 divHover"></div>
      </Link>
      {user?.uid ? (
        <>
          <Link className="menuItem" onClick={handleSignOut} to="/login">
            <div>Signout</div>
            <div className="h-2 divHover"></div>
          </Link>
        </>
      ) : (
        <Link to="/login" className="menuItem">
          <div>Start Here</div>
          <div className="h-2 divHover"></div>
        </Link>
      )}
    </React.Fragment>
  );
  return (
    <div className="pt-4 md:px-12 px-2  shadow-md ">
      <div className="navbar grid grid-cols-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn text-2xl btn-ghost lg:hidden">
              <GiHamburgerMenu></GiHamburgerMenu>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content grid grid-cols-1 gap-2 mt-3 px-4 py-3 shadow bg-base-100 rounded w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center hover:text-black text-neutral-500	 normal-case lg:text-3xl text-xl"
          >
            <img
              src={duLogo}
              className=" rounded-full mr-2 shadow-2xl lg:w-24  lg:h-20 w-10 h-10"
              alt="duMedical"
            />
            MediService
          </Link>
        </div>
        <div className="flex justify-end text-neutral-500	">{menuTop}</div>

        <div className="navbar-center hidden mt-6 col-span-2 lg:flex">
          <ul
            className="menu font-medium	  grid grid-cols-7 items-start text-xl  gap-6   menu-horizontal px-1"
            style={{
              color: "#184C4f",
            }}
          >
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
