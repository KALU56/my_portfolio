import React from "react";

const ContactUs = () => {
  return (
    <div className="p-6 mx-auto max-w-xl bg-transparent text-white font-[sans-serif]">
      <h1 className="text-3xl font-extrabold text-center">
        <span className="text-yellow-500">#</span> Contact Us
      </h1>
      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 text-white bg-transparent border border-gray-300 focus:outline-none focus:border-yellow-500 text-sm placeholder:text-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 text-white bg-transparent border border-gray-300 focus:outline-none focus:border-yellow-500 text-sm placeholder:text-gray-400"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 text-white bg-transparent border border-gray-300 focus:outline-none focus:border-yellow-500 text-sm placeholder:text-gray-400"
        />
        <textarea
          placeholder="Message"
          rows="6"
          className="w-full rounded-md px-4 text-white bg-transparent border border-gray-300 focus:outline-none focus:border-yellow-500 text-sm pt-3 placeholder:text-gray-400"
        ></textarea>
        <button
          type="button"
          className="text-[rgb(51,65,85)] bg-yellow-500 hover:bg-yellow-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
