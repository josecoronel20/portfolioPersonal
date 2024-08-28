import text from "../Utilities/texts/TextApp/texts.json"
import { useSelector } from "react-redux";

const useLanguage = () => {
    const languageContext = useSelector((state) => state);
  const language = languageContext === "es" ? text.es : text.en;

  return {language}
}

export default useLanguage;