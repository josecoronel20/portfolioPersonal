import React from "react";
import { styleContainerTop } from "../utilities/customStyles";
import ContactContent from "../components/ReutilizableComponents/ContactContent";

const Contact = ():JSX.Element => {
  return (
    <main className={styleContainerTop}>
      <div className="flex justify-center">
        <ContactContent />
      </div>
    </main>
  );
};

export default Contact;
