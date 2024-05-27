"use client";
import React, { useState, useEffect } from "react";

interface CharacterCounterProps {
  maxLength: number;
}
const Example: React.FC<CharacterCounterProps> = ({ maxLength }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength={maxLength}
          value={text}
          onChange={handleChange}
          rows={4}
          placeholder="Type something..."
        />
        <div className="text-right mt-2 text-sm text-gray-500">
          {text.length}/{maxLength}
        </div>
      </div>
    </>
  );
};

export default Example;
