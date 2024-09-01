import { useSelector } from "react-redux";
import esText from "../Utilities/texts/TextApp/esText";
import enText from "../Utilities/texts/TextApp/enText";

import esProject from "../Utilities/texts/TextProjectPage/esProjects.js";
import enProject from "../Utilities/texts/TextProjectPage/enProjects.js";

import esTechs from "../Utilities/texts/TextTechsPage/esTechs";
import enTechs from "../Utilities/texts/TextTechsPage/enTechs";

import esBlog from "../Utilities/texts/TextBlogPage/esBlog";
import enBlog from "../Utilities/texts/TextBlogPage/enBlog";
import { string } from "prop-types";

const useLanguage = ({ typeText = string}) => {
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
