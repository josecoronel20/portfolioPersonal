import es from "../../utilities/lenguajes/es.json";
import en from "../../utilities/lenguajes/en.json";

import { useSelector } from "react-redux";

const useLenguage = () => {
    const globalContext = useSelector((state) => state);
  const lenguage = globalContext === "es" ? es : en;

  return {lenguage}
}

export default useLenguage;