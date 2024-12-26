import React from "react";
import { useEffect, useRef } from "react";
import { ContactForm } from "../components/Hero";

const Contact = () => {
  const getRef = useRef(0);

  useEffect(() => {
    document.title = `Contact Us`;
  }, [getRef.current]);
  return <ContactForm />;
};

export default Contact;
