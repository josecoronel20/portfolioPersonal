import React from "react";
import { useToggle } from "../../Hooks/useToggle";

const ImageModal = ({children}) => {
    const { isToggleOpen, handlerToggle } = useToggle();


    return (<div onClick={handlerToggle} className={`cursor-pointer w-fit ${isToggleOpen === true && "fixed z-30 top-0 left-0  flex justify-center items-center h-screen w-screen  bg-[#000000bc] p-5 sm:p-16 md:p-28 backdrop-blur-sm"}`}>
        {children}
    </div>)
}

export default ImageModal