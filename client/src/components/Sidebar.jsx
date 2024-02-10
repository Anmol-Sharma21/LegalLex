import React from "react";
import Sidebar_Header from "./Sidebar_Header";
import Sidebar_CardList from "./Sidebar_CardList";
import Sidebar_Footer from "./Sidebar_Footer";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-2/12 transition-all duration-500 ease-in-out ml-0 opacity-100">
      <div className="sticky top-0 bg-black text-white">
        {/* Header */}
        <Sidebar_Header />
      </div>
      <div className="flex-grow bg-slate-500 overflow-y-scroll">
        {/* Body */}
        <Sidebar_CardList />
      </div>
      {/* Footer */}
      <Sidebar_Footer />
    </div>
  );
};

export default Sidebar;