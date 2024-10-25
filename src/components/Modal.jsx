import React from "react";

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;

  return (
    <>
      {/* Background overlay with blur effect */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>

      {/* Center the modal */}
      <div className="fixed inset-0 flex items-center justify-center z-20">
        <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
          <button
            onClick={() => setIsModelOpen(false)}
            className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
