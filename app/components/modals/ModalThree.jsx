import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const ModalThree = ({ onClose }) => {
  const [keyValuePairs, setKeyValuePairs] = useState([{ key: "", value: "" }]);

  const handleAddPair = () => {
    setKeyValuePairs([...keyValuePairs, { key: "", value: "" }]);
  };

  const handleRemovePair = (index) => {
    setKeyValuePairs(keyValuePairs.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    const newKeyValuePairs = [...keyValuePairs];
    newKeyValuePairs[index][field] = value;
    setKeyValuePairs(newKeyValuePairs);
  };

  const handleSubmit = () => {
    // Handle the submission of key-value pairs
    console.log(keyValuePairs);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#2E2E2E] p-6 rounded-md shadow-lg relative w-full max-w-xl">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-100  hover:scale-110 duration-300"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <h2 className="text-xl mb-4 text-white">Provide Credentials</h2>
        {keyValuePairs.map((pair, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              className="flex-grow p-2 rounded bg-[#4d4c4c] text-white placeholder-gray-400"
              placeholder="Key"
              value={pair.key}
              onChange={(e) => handleInputChange(index, "key", e.target.value)}
            />
            <input
              type="text"
              className="flex-grow p-2 rounded bg-[#4d4c4c] text-white placeholder-gray-400"
              placeholder="Value"
              value={pair.value}
              onChange={(e) =>
                handleInputChange(index, "value", e.target.value)
              }
            />
            <button
              className="p-2 text-white cursor-pointer rounded hover:scale-110 duration-300"
              onClick={() => handleRemovePair(index)}
              disabled={keyValuePairs.length === 1}
            >
              <FaMinus />
            </button>
          </div>
        ))}
        <div className="flex justify-between items-center mt-4">
          <button
            className="flex items-center px-4 py-2 text-white rounded"
            onClick={handleAddPair}
          >
            <FaPlus className="mr-2" /> Add another secret
          </button>
          <button
            className="px-4 py-2 flex items-center gap-2 text-whit"
            onClick={handleSubmit}
          >
            Send <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalThree;
