import React from "react";
import { useRef, useEffect } from "react";

const Modal = ({ children, toggle, setToggle }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (elementRef.current && elementRef.current.contains(event.target)) {
        if (toggle) {
          setToggle(!toggle);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggle, setToggle]);

  return (
    <div>
      {toggle && (
        <div
          ref={elementRef}
          className="fixed inset-0 bg-black bg-opacity-30 z-20  backdrop-blur-sm"
        ></div>
      )}
      {children}
    </div>
  );
};

export default Modal;
