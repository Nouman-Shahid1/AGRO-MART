// LiveChat.js
import React, { useState } from "react";

const LiveChat = () => {
  // State to toggle chat window
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "support", text: "Hello! How can we assist you today?" }
  ]);
  const [userMessage, setUserMessage] = useState("");

  // Handle sending a message
  const handleSendMessage = () => {
    if (userMessage.trim() === "") return;

    // Add user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userMessage }
    ]);
    setUserMessage("");

    // Simulate a response from the support
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "support", text: "Thank you for your message. We're here to help!" }
      ]);
    }, 1500);
  };

  return (
    <div>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition focus:outline-none"
        aria-label="Chat"
      >
        💬
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-6 w-80 bg-white shadow-lg rounded-lg border border-gray-300 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">Live Chat</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition focus:outline-none"
            >
              ✖
            </button>
          </div>
          <div className="h-40 overflow-y-auto border border-gray-200 rounded-md p-2 mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === "support" ? "text-blue-500" : "text-gray-800"}`}
              >
                <strong>{msg.sender === "support" ? "Support: " : "You: "}</strong>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-green-600 text-white p-3 rounded-full"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
