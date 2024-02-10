import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import Chat from "./components/Chat.jsx";

const ChatPage = () => {
  return (
    <div>
      <div className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col items-center w-full">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
