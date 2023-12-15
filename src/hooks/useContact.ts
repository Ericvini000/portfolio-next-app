"use client";

import { ContactContext } from "@/contexts/contact.context";
import { useContext } from "react";

const useContact = () => {
  const context = useContext(ContactContext);
  return context;
};

export default useContact;
