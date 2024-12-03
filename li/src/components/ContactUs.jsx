import React from "react";

const ContactUs = () => {
  return (
    <div className="p-6 mx-auto max-w-xl bg-[rgb(51,65,85)] text-white font-[sans-serif]">
      <h1 className="text-3xl text-yellow-500 font-extrabold text-center">Contact Us</h1>
      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-yellow-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-yellow-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-yellow-500"
        />
        <textarea
          placeholder="Message"
          rows="6"
          className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-yellow-500"
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
