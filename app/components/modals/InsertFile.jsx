import React, { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDropzone } from "react-dropzone";

const InsertFile = ({ onClose }) => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the files here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#2E2E2E] p-6 rounded-md shadow-lg relative w-full max-w-md">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-100  hover:scale-110 duration-300"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <h2 className="text-xl mb-4 text-white">Insert File</h2>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-md p-6 cursor-pointer transition-colors ${
            isDragActive
              ? "border-blue-500 bg-blue-100"
              : "border-gray-400 bg-gray-700"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-white">Drop the files here...</p>
          ) : (
            <p className="text-gray-300">
              Drag & drop some files here, or click to select files
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsertFile;
