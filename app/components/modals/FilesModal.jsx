import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFileUpload, FaBook, FaKey } from "react-icons/fa";

const MainModal = ({ isOpen, onClose, onOpenModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#2E2E2E] p-6 rounded-md shadow-lg relative w-full max-w-md">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-100  hover:scale-110 duration-300"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>

        <div className="flex space-x-4 mt-4">
          <button
            className="flex flex-col items-center justify-center px-5 py-5 bg-[#4d4c4c]text-white rounded w-full hover:scale-110 duration-300"
            onClick={() => onOpenModal("one")}
          >
            <FaFileUpload size={32} className="mb-2" />
            <span>Upload Files</span>
          </button>
          <button
            className="flex flex-col items-center justify-center px-5 py-5 bg-[#4d4c4c]text-white rounded w-full  hover:scale-110 duration-300"
            onClick={() => onOpenModal("two")}
          >
            <FaBook size={32} className="mb-2" />
            <span>Upload Playbook</span>
          </button>
          <button
            className="flex flex-col items-center justify-center px-5 py-5 bg-[#4d4c4c]text-white rounded w-full  hover:scale-110 duration-300"
            onClick={() => onOpenModal("three")}
          >
            <FaKey size={32} className="mb-2" />
            <span>Provide Credentials</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainModal;
