"use client";
import React, { useState } from "react";
import Image from "next/image";

const DeleteAccount = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-gradient-to-b from-[#023A5F] via-[#606CB6] to-[#9493DF] flex justify-center items-center">
        <div className="text-center">
          <Image
            src="/logo.png"
            alt="SCAMalicious Logo"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 relative">
        <div className="w-2/3">
          <h1 className="text-3xl text-[#A52A2A] font-normal mb-1">
            Delete Account
          </h1>
          <p className="text-md text-[#384554]">We are sad to let you go!</p>
          <p className="text-md text-[#384554] mb-6">
            Fill the form below to proceed.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-[#384554]">Name</label>
              <div className="relative mt-1">
                <input
                  type="text"
                  name="firstname"
                  placeholder="john"
                  className="w-full px-4 py-3 rounded-md focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-[#384554]">Email</label>
              <div className="relative mt-1">
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full px-4 py-3 rounded-md focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-[#384554]">Reason why you want to delete your account</label>
              <div className="relative mt-1">
                <textarea
                  id="reason"
                  placeholder="Enter reason"
                  className="h-[148px] w-[500px] rounded-[5px] bg-[#FBFBFB] border-[2px] p-5 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#A52A2A] text-white text-base rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
