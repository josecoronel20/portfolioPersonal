"use client";

import React from "react";
import { styleContainerTop } from "@/app/lib/utilities/customStyles";
import ContactContent from "@/app/Components/ContactContent";

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
