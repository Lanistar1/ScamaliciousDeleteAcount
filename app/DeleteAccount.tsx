"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = name.trim() && email.trim() && reason.trim();

  const handleDeleteAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      return toast.error("Please fill in all fields.");
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://server.thescamalicious.com/auth/delete-account", {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Account deleted successfully.");
        setName("");
        setEmail("");
        setReason("");
      } else {
        toast.error("Failed to delete account. Please try again later.");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <ToastContainer />
      
      {/* Left Section (Hidden on small screens) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[#023A5F] via-[#606CB6] to-[#9493DF] justify-center items-center">
        <div className="text-center">
          <Image src="/logo.png" alt="SCAMalicious Logo" width={200} height={200} />
        </div>
      </div>

      {/* Right Section (Full-width on small screens) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-6 sm:p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl text-[#A52A2A] font-normal mb-1">Delete Account</h1>
          <p className="text-md text-[#384554]">We are sad to let you go!</p>
          <p className="text-md text-[#384554] mb-6">Fill the form below to proceed.</p>

          <form onSubmit={handleDeleteAccount} className="space-y-4">
            <div>
              <label className="block text-[#384554]">Name</label>
              <input
                type="text"
                name="name"
                placeholder="John"
                className="w-full px-4 py-3 rounded-md focus:outline-none focus:border-gray-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-[#384554]">Email</label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className="w-full px-4 py-3 rounded-md focus:outline-none focus:border-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-[#384554]">Reason why you want to delete your account</label>
              <textarea
                id="reason"
                placeholder="Enter reason"
                className="w-full h-36 rounded-md bg-[#FBFBFB] border-2 p-3 resize-none focus:outline-none"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 text-white text-base rounded-md ${
                isFormValid && !isSubmitting ? "bg-[#A52A2A]" : "bg-gray-400"
              }`}
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
