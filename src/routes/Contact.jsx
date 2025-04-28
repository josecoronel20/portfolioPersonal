import React from "react";
import { styleContainerTop } from "../Utilities/customStyles";
import ContactContent from "../components/ReutilizableComponents/ContactContent.tsx";

const Contact = () => {
  return (
    <main className={styleContainerTop}>
      <div className="flex justify-center">
        <ContactContent />
      </div>
    </main>
  );
};

export default Contact;
