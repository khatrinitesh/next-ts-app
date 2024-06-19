"use client"
import React,{useState } from "react";
import Image from "next/image";

const Example = () => {
  return (
    <>
      <PasswordValidator />
    </>
  );
};

export default Example;

interface PasswordValidatorProps {
    password: string;
  }

  const PasswordValidator: React.FC<PasswordValidatorProps> = ({ password }) => {
    const [isValid, setIsValid] = useState(false);
     // Password validation rules
  const validatePassword = (password: string): boolean => {
    // Minimum length of 8 characters
    if (password.length < 8) return false;

    // Should contain at least one lowercase letter, one uppercase letter, one digit, and one special character
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]).{8,}$/;
    return regex.test(password);
  };

  // Handle password change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setIsValid(validatePassword(newPassword));
  };
    return(
        <>
        <div className="flex flex-col items-start">
      <label className="text-gray-600 font-medium mb-1">Password</label>
      <input maxLength={8}
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className={`w-full border rounded-md py-2 px-3 ${
          isValid ? "border-green-500" : "border-red-500"
        } focus:outline-none focus:border-blue-500`}
      />
      {!isValid && (
        <p className="text-red-500 text-sm mt-1">
          Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.
        </p>
      )}
    </div>
        </>
    )
  }