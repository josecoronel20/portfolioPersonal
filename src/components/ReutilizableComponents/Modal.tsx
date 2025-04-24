import React from "react";

const Modal = ({ children, toggle }) => {
  return (
    <div className={`${!toggle && "hidden"}`}>
      <div className="fixed inset-0 bg-black bg-opacity-30 z-20  backdrop-blur-sm"></div>
      {children}
    </div>
  );
};

export default Modal;
