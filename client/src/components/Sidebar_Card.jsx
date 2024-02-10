import React, { useState } from "react";
import { DotsThree, XCircle } from "phosphor-react";

const Sidebar_Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between items-center p-2 bg-gray-200 text-black mb-4 rounded-xl">
      <h2 className="text-lg mb-2">Card Title</h2>
      <div>
        <DotsThree size={32} onClick={handleOpenModal} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md">
            <button onClick={handleCloseModal}>
              <XCircle size={32} />
            </button>
            <p>Trash</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar_Card;
