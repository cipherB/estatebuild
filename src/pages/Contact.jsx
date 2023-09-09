import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaRegQuestionCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { Input } from "../components/inputFields";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="flex justify-center">
      <div className="px-6 md:px-[8%] py-[8%] max-w-[1400px]">
        <section className="grid grid-cols-1 gap-y-4 gap-x-20 md:grid-cols-2 pb-[8%]">
          <div>
            <h2 className="text-2xl font-bold">
              Our<span className="text-palette-four"> Contacts</span>
            </h2>
            <p className="leading-8 text-justify">
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. We will be happy to
              answer your questions.
            </p>
          </div>
          <div>
            <ul className="list-none">
              <li className="flex items-center my-5 text-sm font-bold gap-x-2">
                <FaMapMarkerAlt className="text-xl text-palette-four" />
                <p>
                  <span className="text-lg">Visit Us Daily</span>
                  <br />
                  38 Montgomery road yaba Lagos
                </p>
              </li>
              <li className="flex items-center my-5 text-sm font-bold gap-x-2">
                <FaRegQuestionCircle className="text-xl text-palette-four" />
                <p>
                  <span className="text-lg">Call Us 24/7</span>
                  <br /> +234 817 943 8628, +234 814 205 2335
                </p>
              </li>
              <li className="flex items-center my-5 text-sm font-bold gap-x-2">
                <FaPaperPlane className="text-xl text-palette-four" />
                <p>
                  <span className="text-lg">Mail Us</span>
                  <br />
                  Estatecapitalng@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className=" mb-[8%] md:mx-[4%] bg-white drop-shadow-lg md:p-16 p-2">
          <h2 className="mb-5 text-2xl font-bold">Ready to Get Started?</h2>
          <form>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2.5">
              <Input
                name="name"
                placeholder="Your Name"
                value={data.name}
                onChange={handleChange}
                required={true}
              />
              <Input
                name="email"
                placeholder="Your Email"
                type="email"
                value={data.email}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="py-2.5">
              <Input
                name="website"
                placeholder="Website"
                value={data.website}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div>
              <textarea
                name="message"
                onChange={handleChange}
                value={data.message}
                placeholder="Message..."
                className="py-2.5 px-6 outline-none w-full
                border border-[#dbdbdb] rounded focus:outline-none"
                rows="5"
              ></textarea>
            </div>
            <button className="w-full py-4 mt-3 text-white border-none rounded bg-palette-three md:w-auto md:px-6">
              SEND MESSAGE
            </button>
          </form>
        </section>
        <section className="w-full md:h-[600px] h-[320px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0950735124206!2d3.37349711401774!3d6.509648995291256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c593e6e91b5%3A0x8082535750c94b36!2s38%20Montgomery%20Rd%2C%20Yaba%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1681032753551!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{border:'none'}}
            allowfullscreen={true}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default Contact;
