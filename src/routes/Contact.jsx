import React from "react";
import { styleCustomContainerTop } from "../utilities/styles";
import ContactContent from "../components/header/ContactComponents/ContactContent";

const Contact = () => {
  return (
    <main className={styleCustomContainerTop}>
      <div className="flex justify-center">
        <ContactContent />
      </div>
    </main>
  );
};

export default Contact;
