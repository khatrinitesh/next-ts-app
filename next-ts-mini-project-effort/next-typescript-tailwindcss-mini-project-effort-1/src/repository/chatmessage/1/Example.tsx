"use client";
import React, { useState, useEffect } from "react";

interface MesssageProps {
  sender: string;
  message: string;
  timestamp: string;
}
const Example: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-md w-full space-y-4">
          <ChatMessage
            sender="Alice"
            message="Hello, how are you?"
            timestamp="10:30 AM"
          />
          <ChatMessage
            sender="Bob"
            message="I'm good, thanks! How about you?"
            timestamp="10:32 AM"
          />
          <ChatMessage
            sender="Alice"
            message="I'm doing great, thank you!"
            timestamp="10:35 AM"
          />
        </div>
      </div>
    </>
  );
};

export default Example;

const ChatMessage: React.FC<MesssageProps> = ({
  sender,
  message,
  timestamp,
}) => {
  return (
    <>
      <div className="flex items-start space-x-4 p-4 bg-white shadow rounded-lg">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
            {sender[0].toUpperCase()}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-700">{sender}</div>
          <div className="text-sm text-gray-500">{timestamp}</div>
          <div className="mt-1 text-gray-800">{message}</div>
        </div>
      </div>
    </>
  );
};
