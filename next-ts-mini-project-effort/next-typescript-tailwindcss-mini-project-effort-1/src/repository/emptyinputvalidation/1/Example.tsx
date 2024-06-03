"use client";
import React, { useEffect, useState } from "react";

const Example: React.FC = ({}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({ email: "", message: "" });

  const validate = () => {
    let valid = true;
    let errors = { email: "", message: "" };

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }

    if (!message) {
      errors.message = "Message is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("Sending...");
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    if (res.status === 200) {
      setStatus("Email sent successfully!");
      setEmail("");
      setMessage("");
      setErrors({ email: "", message: "" });
    } else {
      setStatus("Failed to send email.");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4">Send an Email</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-3 py-2 rounded"
          >
            Send
          </button>
          {status && <p className="mt-4 text-center">{status}</p>}
        </form>
      </div>
    </>
  );
};

export default Example;
