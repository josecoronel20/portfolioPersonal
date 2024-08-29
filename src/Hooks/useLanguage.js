import { useSelector } from "react-redux";
import esText from "../Utilities/texts/TextApp/esText.json";
import enText from "../Utilities/texts/TextApp/enText.json";
import esProject from "../Utilities/texts/TextProjectPage/esProjects.json";
import enProject from "../Utilities/texts/TextProjectPage/enProjects.json";
import esTechs from "../Utilities/texts/TextTechsPage/esTechs";
import enTechs from "../Utilities/texts/TextTechsPage/enTechs";
import esBlog from "../Utilities/texts/TextBlogPage/esBlog.json";
import enBlog from "../Utilities/texts/TextBlogPage/enBlog.json";

const useLanguage = ({ typeText = ""}) => {
  const languageContext = useSelector((state) => state);

  switch (typeText) {
    case "projectText":{
      const projectText = languageContext === "es" ? esProject : enProject;
      return { projectText };}

    case "globalText":{
      const globalText = languageContext === "es" ? esText : enText;
      return { globalText };}

    case "blogText":{
      const blogText = languageContext === "es" ? esBlog : enBlog;
      return { blogText };}

    case "techText":{
      const techText = languageContext === "es" ? esTechs : enTechs;
      return { techText };}
  }

};

export default useLanguage;
