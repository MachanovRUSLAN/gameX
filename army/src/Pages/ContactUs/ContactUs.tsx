import React from "react";
import Contact from "../../Components/Contact/Contact";
import ContactFom from "../../Components/ContactForm/ContactFom";
import ContactHead from "../../Components/ContactHead/ContactHead";

function ContactUs() {
  return (
    <div>
      <ContactHead />
      <Contact />
      <ContactFom />
    </div>
  );
}

export default ContactUs;
