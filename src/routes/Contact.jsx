import React from "react";
import { styleCustomContainerTop } from "../Utilities/customStyles";

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
