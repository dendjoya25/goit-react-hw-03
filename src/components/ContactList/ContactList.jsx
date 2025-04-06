import React from "react";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => onDelete(contact.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
