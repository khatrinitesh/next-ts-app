"use client";
// custom hooks state management
import React, { useState, useEffect } from "react";
// next image
import Image from "next/image";
// image and video
import Wallpaper from "../../../assets/img/wallpaper.jpg";
import VideoMovie from "../../../assets/video/movie.mp4";

const Example = () => {
    const [isChatOpen, setIsChatOpen] = useState(true);

    const handleCloseChat = () => {
      setIsChatOpen(!isChatOpen); // Set state to close the chat window
    };
  return (
    <>
     <PopupChat isOpen={isChatOpen} onClose={handleCloseChat}/>
    </>
  );
};

export default Example;

interface PopupChatProps {
    isOpen: boolean; // State to manage if the chat window is open or closed
    onClose: () => void; // Function to close the chat window
  }

const PopupChat:React.FC<PopupChatProps> = ({isOpen,onClose}) => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);
  
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        setMessages([...messages, message]);
        setMessage('');
      }
    };
  
    return(
        <>
         <div className="fixed bottom-0 right-0 m-4">
      <div className="relative">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
          onClick={onClose}
        >
          {isOpen ? 'Close Chat' : 'Open Chat'}
        </button>
        {isOpen && (
          <div className="absolute bottom-14 right-0 bg-white border border-gray-300 rounded-lg shadow-lg w-80">
            {/* Header */}
            <div className="px-4 py-2 bg-blue-500 text-white rounded-t-lg">
              <span className="font-bold">Chat</span>
              <button className="float-right" onClick={onClose}>
                X
              </button>
            </div>
            {/* Messages */}
            <div className="p-4 h-60 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  {msg}
                </div>
              ))}
            </div>
            {/* Input */}
            <div className="flex items-center p-2 bg-gray-100">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
        </>
    )
}
