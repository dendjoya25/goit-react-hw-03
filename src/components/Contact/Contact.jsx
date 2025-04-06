import React from "react";
import s from "./Contact.module.css";
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={s.contact}>
      <li>
        <h3>
          <IoIosContact className={s.contactLogo} />
          {name}
        </h3>
        <p>
          <FaPhoneAlt className={s.phoneLogo} />
          {number}
        </p>
      </li>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Contact;
