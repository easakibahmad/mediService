import React from "react";
import { Link } from "react-router-dom";
import footerImage from "../../../src/assets/images/footer.png";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import duLogo from "../../assets/images/DUlogo.jpeg";

const Footer = () => {
  return (
    <div
      className="m-8"
      style={{ background: `url(${footerImage})`, backgroundSize: "cover" }}
    >
      <footer className="footer p-10  text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
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
