import {useRef, useEffect} from "react";

const useClickTarget = ({toggle, setToggle}) =>{
    const elementRef = useRef(null);

    useEffect(() => {
  
      const handleClickOutside = (event) => {
        if (elementRef.current && !elementRef.current.contains(event.target)) {
          
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

  return {elementRef}
}

export default useClickTarget