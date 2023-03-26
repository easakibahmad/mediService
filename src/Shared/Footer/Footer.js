import React from "react";
import { Link } from "react-router-dom";
import footerImage from "../../../src/assets/images/footer.png";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import duLogo from "../../assets/images/DUlogo.jpeg";

const Footer = () => {
  return (
    <div
      className="m-8"
      style={{ background: `url(${footerImage})`, backgroundSize: "cover" }}
    >
      <footer className="footer p-10  text-base-content">
        <div>
          <span className="footer-title grid grid-cols-1">Urgent Care</span>
          <span>Shahid Dr. Mohammad Murtoza Medical Center</span>
          <span>Dhaka University Sports Ground</span>
          <span>Dhaka 1000</span>
          <Link
            className=" hover:text-blue-500 flex items-center"
            to="https://www.google.com/maps/place/Shahid+Dr.+Mohammad+Murtoza+Medical+Center/@23.7286869,90.3967359,15z/data=!4m14!1m7!3m6!1s0x3755b8e8ed1c73b9:0x967736d34892cbe7!2sShahid+Dr.+Mohammad+Murtoza+Medical+Center!8m2!3d23.7286869!4d90.3967359!16s%2Fg%2F11hzmp74g8!3m5!1s0x3755b8e8ed1c73b9:0x967736d34892cbe7!8m2!3d23.7286869!4d90.3967359!16s%2Fg%2F11hzmp74g8?hl=en"
          >
            <GoLocation></GoLocation> <span className="ml-1">Map</span>
          </Link>
        </div>
        <div>
          <span className="footer-title">Fast Find</span>
          <Link>About</Link>
          <Link>About</Link>
          <Link>About</Link>
          <Link>About</Link>
        </div>
        <div>
          <span className="footer-title">Fast Find</span>
          <Link>About Us</Link>
          <Link>FAQ's</Link>
          <Link>Contact Us</Link>
          <Link>Privacy</Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t  text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <img
            className="lg:w-20 lg:h-20 w-16 h-16"
            src={duLogo}
            alt="dulogo"
          />
          <p>
            University of Dhaka <br />
            Since 1921
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 lg:text-3xl text-2xl">
            <Link to="https://www.facebook.com/univdhaka.ac.bd">
              <FiFacebook></FiFacebook>
            </Link>
            <Link to="https://www.youtube.com/@DhakaUniversityDU">
              <CiYoutube></CiYoutube>
            </Link>
            <Link to="https://twitter.com/UnivofDhaka">
              <FiTwitter></FiTwitter>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
