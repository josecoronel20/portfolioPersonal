import {textEs} from "../utilities/texts/textEs";
import {textEn} from "../utilities/texts/textEn";
import {textPt} from "../utilities/texts/textPt";
import {useContextLanguage} from "../Context/ContextLanguage";

const texts = {
  es:textEs,
  en:textEn,
  pt:textPt
}

export const useText = () => {
  const { currentLanguage } = useContextLanguage();

  return texts[currentLanguage] || {};
};

