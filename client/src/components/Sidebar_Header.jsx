import React from "react";

const Sidebar_Header = () => {
  return (
    <div className="bg-gray-800 py-4 px-6 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
        <div>
          <h1 className="text-xl font-semibold text-white">Sidebar Title</h1>
          <p className="text-sm text-gray-400">Your Company Name</p>
        </div>
      </div>
      {/* User Avatar/Profile */}
      <div className="flex items-center">
        <div className="flex flex-col items-end mr-4">
          <p className="text-sm text-gray-400">Welcome back,</p>
          <p className="text-lg font-semibold text-white">John Doe</p>
        </div>
        <img
          src="/avatar.jpg"
          alt="User Avatar"
          className="h-12 w-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default Sidebar_Header;
