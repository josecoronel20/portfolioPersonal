import React, { ReactNode } from "react";

//Componente Modal que renderiza un modal.
const Modal = ({
  children,
  toggle,
  nav,
  setToggle,
}: {
  children: ReactNode;
  toggle: boolean;
  nav: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  return (
    <div>
      <div
        onClick={() => {
          if (setToggle) {
            setToggle(!toggle);
          }
        }}
        className={`${
          !toggle && "hidden"
        } fixed inset-0 bg-black bg-opacity-30 z-20  backdrop-blur-sm`}
      ></div>
      <div className={`${nav === false && !toggle && "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
