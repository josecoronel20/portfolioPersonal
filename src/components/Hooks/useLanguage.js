import text from "../../utilities/texts/texts.json"

import { useSelector } from "react-redux";

const useLanguage = () => {
    const globalContext = useSelector((state) => state);
  const language = globalContext === "es" ? text.es : text.en;

  return {language}
}

export default useLanguage;