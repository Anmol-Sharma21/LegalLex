import React from "react";

const Sidebar_Footer = () => {
  return (
    <div className="bg-gray-800 py-4 px-6">
      <div className="flex items-center">
        {/* User Avatar */}
        <img
          src="/avatar.jpg"
          alt="User Avatar"
          className="h-12 w-12 rounded-full mr-4"
        />
        {/* User Information */}
        <div>
          <h2 className="text-lg font-semibold text-white">John Doe</h2>
          <p className="text-gray-400 text-sm">Frontend Developer</p>
        </div>
      </div>
      {/* Divider */}
      <hr className="my-4 border-gray-700" />
      {/* User Actions */}
      <div className="space-y-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Edit Profile
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar_Footer;
