import React from "react";

const Contact = () => {
  return (
    <>
      <div class="bg-black text-white flex justify-center min-h-screen px-4">
        <div class="max-w-5xl w-full flex flex-col md:flex-row  justify-center gap-36 p-6">
          <div class="w-full md:w-1/2 flex flex-col items-center">
            <form class="space-y-6 w-full max-w-md">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  class="w-full p-3 bg-black border border-gray-400 rounded-sm text-white text-sm focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Enter your name"
                  class="w-full p-3 bg-black border border-gray-400 rounded-sm text-white text-sm focus:outline-none"
                />
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter your address"
                  class="w-full p-3 bg-black border border-gray-400 rounded-sm text-white text-sm focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Enter your phone no"
                  class="w-full p-3 bg-black border border-gray-400 rounded-sm text-white text-sm focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Enter your message"
                class="w-full p-3 h-28 bg-black border border-gray-400 rounded-sm text-white text-sm focus:outline-none"
              ></textarea>
              <div className="text-center">
              <button
                type="submit"
                class="w-32 md:w-32 py-2 bg-gray-200 text-black rounded-sm text-xl font-semibold hover:bg-gray-300"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
          <div class="w-full md:w-1/2 text-center flex flex-col items-center">
            <h2 class="text-3xl md:text-4xl font-semibold mb-4">Contact Us</h2>
            <p class="text-gray-300 text-sm leading-6 max-w-md">
              We're here to help! Whether you have questions, need support, or
              want to collaborate, our team is ready to assist you. We strive to
              provide quick and effective solutions tailored to your needs.
              Reach out to us via phone, email, or social media—we look forward
              to connecting with you!
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
