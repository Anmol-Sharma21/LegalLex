import React, { useState, useRef } from "react";
import { PaperPlaneTilt } from "phosphor-react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [file, setFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);
  
  const API_KEY = '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';
  const API_URL = 'https://api.openai.com/v1/chat/completions';

  async function sendMessage(message) {
    try {
      const response = await axios.post(API_URL, {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error sending message:', error);
      return 'Sorry, an error occurred.';
    }
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setIsUploaded(false);
  };

  const handleUpload = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("pdfFile", file);

        await axios.post("http://localhost:3000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("File uploaded successfully!");
        setIsUploaded(true);
      } else {
        console.warn("No file selected for upload.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handlePdfButton = () => {
    fileInputRef.current.click();
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const userMessage = { text: inputMessage, type: "user" };
    const botMessage = { text: await sendMessage(inputMessage), type: "bot" };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setInputMessage("");
    scrollToBottom();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col h-full bg-gray-200 rounded-lg overflow-hidden w-8/12">
      <div className="bg-blue-800 text-white p-4 flex items-center justify-between">
        <label htmlFor="fileInput" className="cursor-pointer">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf"
            id="fileInput"
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <button
            onClick={handlePdfButton}
            className="ml-2 p-2 bg-white text-blue-800 rounded-md hover:bg-blue-100"
          >
            Upload PDF
          </button>
        </label>
        {isUploaded && <span className="text-green-500">Done</span>}
      </div>

      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.type === "user"
                ? "text-right text-blue-600"
                : "text-left text-green-600"
            }`}
          >
            {`${message.type === "user" ? "You" : "Bot"}: ${message.text}`}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center p-4 border-t">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-grow p-2 border rounded-l-md focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-blue-800 text-white rounded-r-md hover:bg-blue-900"
        >
          <PaperPlaneTilt size={24} />
        </button>
        <button
          onClick={handleUpload}
          className="ml-2 p-2 bg-white text-blue-800 rounded-md hover:bg-blue-100"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Chat;
