import Sidebar from "./components/Sidebar.jsx";
import Chat from "./components/Chat.jsx";

const ChatPage = () => {
  return (
    <div className="flex gap-3">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default ChatPage;
