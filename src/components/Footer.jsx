import React from "react";
import Logo from "../assets/acrux-logo.png";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaRegQuestionCircle,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="bg-[#0088ad] py-[30px]">
      <div
        className="grid md:grid-cols-4 gap-x-3 md:px-[10%] pb-10 mx-auto 
        border-b border-white grid-cols-1 px-6 gap-y-8"
      >
        <img src={Logo} alt="logo" className="" />
        <div className="text-white">
          <p className="mb-3 text-xl font-black">Contact</p>
          <ul className="list-none">
            <li className="flex items-center my-2 text-sm text-white gap-x-2">
              <FaMapMarkerAlt className="text-lg text-palette-four" />
              38 Montgomery road yaba Lagos
            </li>
            <li className="flex items-center my-2 text-sm text-white gap-x-2">
              <FaRegQuestionCircle className="text-lg text-palette-four" />
              Have any Questions?
              <br /> +234 817 943 8628, +234 814 205 2335
            </li>
            <li className="flex items-center my-2 text-sm text-white gap-x-2">
              <FaPaperPlane className="text-lg text-palette-four" />
              Mail Us
              <br />
              Estatecapitalng@gmail.com
            </li>
          </ul>
        </div>
        <div className="text-white">
          <p className="mb-4 text-xl font-black">Pages</p>
          <ul className="list-none">
            <li className="my-2">
              <Link className="text-sm text-white" to="/">
                Home
              </Link>
            </li>
            <li className="my-2">
              <Link className="text-sm text-white" to="/about">
                About
              </Link>
            </li>
            <li className="my-2">
              <Link className="text-sm text-white" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="my-2">
              <Link className="text-sm text-white" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <p className="mb-4 text-xl font-black">Legal</p>
          <ul className="list-none">
            <li className="my-2">
              <Link className="text-sm text-white" to="/policy">
                Privacy Policy
              </Link>
            </li>
            <li className="my-2">
              <Link className="text-sm text-white" to="/terms">
                Terms and Condition
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 py-4 text-center">
        <small className="text-white">
          Copyright© {year} Estate Capital Limited | Website developed by
          <a
            href="https://google.com"
            class="text-sm font-semibold text-palette-four"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Anon
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
