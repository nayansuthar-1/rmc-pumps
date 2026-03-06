import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* background */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        {children}
      </div>
    </div>
  );
}

export default Modal;
