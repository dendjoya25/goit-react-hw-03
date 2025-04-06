import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import s from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, options) => {
    onSubmit(values.contactName, values.number);
    options.resetForm();
  };

  const initialValues = {
    contactName: "",
    number: "",
  };
  const ContactFormSchema = Yup.object().shape({
    contactName: Yup.string()
      .min(3, "Min 3 characters!")
      .max(50, "Max 50 characters!")
      .required("Fill the field!"),
    number: Yup.string()
      .min(3, "Min 3 characters!")
      .max(50, "Max 50 characters!")
      .required("Fill the field!"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form className={s.form}>
          <div>
            <label>
              <>Name: </>
              <Field
                className={s.input}
                type="text"
                name="contactName"
                placeholder="Enter full name"
              />
              <ErrorMessage
                className={s.error}
                name="contactName"
                component="span"
              />
            </label>
            <label>
              <p>Number: </p>
              <Field
                className={s.input}
                type="text"
                name="number"
                placeholder="Enter phone number"
              />
              <ErrorMessage
                className={s.error}
                name="number"
                component="span"
              />
            </label>
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
