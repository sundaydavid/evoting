import React from "react";
import { useNav } from "../hooks/useNav";
import { FaLocationPin, FaPhone, FaMessage } from "react-icons/fa6";

const Contact = () => {
  const contactRef = useNav("Contact");

  return (
    <section
      ref={contactRef}
      id="contactSection"
      className="flex flex-col justify-between"
    >
      <span className="mt-5 text-2xl underline text-green-700 ml-20 font-black">Contact Us</span>
      <div className="flex justify-evenly items-center w-full h-4/5">
        <div className="flex justify-center items-center">
          <form className="flex flex-col p-8 gap-5">
            <input
              type="text"
              className="py-4 rounded-lg px-7 w-full border-2 border-green-100 outline-2 outline-indigo-100"
            />
            <div className="flex gap-5">
              <input
                type="text"
                className="py-4 rounded-lg px-7 w-full border-2 border-green-100 outline-2 outline-indigo-100"
              />
              <input
                type="text"
                className="py-4 rounded-lg px-7 w-full border-2 border-green-100 outline-2 outline-indigo-100"
              />
            </div>
            <textarea
              rows="4"
              color="transparent"
              placeholder="Messages"
              className="mb-10 w-full form-control py-4 rounded-lg px-7 border-2 border-green-100 outline-2 outline-indigo-100"
            ></textarea>
            <button
              className="mt-6 bg-green-800 w-1/2 h-10 text-white"
              fullWidth
            >
              Submit Now
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-5">
          <div className="contact-block flex mb-4 items-center">
            <div className=" p-7 bg-green-800 rounded-full">
              <FaLocationPin size={30} color="white" />
            </div>
            <div className="contact-details ml-5">
              <h5 className="icon-box-title mb-2">Our Address</h5>
              <p className="mb-0">Atani, ogbaru L.G.A</p>
            </div>
          </div>
          <div className="contact-block flex mb-4 items-center">
            <div className=" p-7 bg-green-800 rounded-full">
              <FaPhone size={30} color="white" />
            </div>
            <div className="contact-details ml-5 items-center">
              <h5 className="icon-box-title mb-2">Phone Number</h5>
              <p className="mb-0">09079029135</p>
            </div>
          </div>
          <div className="contact-block flex mb-4">
            <div className=" p-7 bg-green-800 rounded-full">
              <FaMessage size={30} color="white" />
            </div>
            <div className="contact-details ml-5">
              <h5 className="icon-box-title mb-2">Email</h5>
              <p className="mb-0">azodostella@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-white bg-green-900 w-full bottom-0">
        {/* <!--Copyright section--> */}
        <div className="p-4 text-center bg-black bg-opacity-20">
          © 2023 FILEDIT Software Exibition: &nbsp;
          <a className="text-white" href="#home">
            Designed By OKO Tech Enthusiast
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
