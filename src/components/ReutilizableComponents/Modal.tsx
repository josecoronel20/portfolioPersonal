import React from "react";

const Modal = ({ children, toggle, nav, setToggle }) => {
  return (
    <div>
      <div
        onClick={() => setToggle(!toggle)}
        className={`${!toggle && "hidden"} fixed inset-0 bg-black bg-opacity-30 z-20  backdrop-blur-sm`}
      ></div>
      <div className={`${nav === false && !toggle && "hidden"}`}>{children}</div>
    </div>
  );
};

export default Modal;
