// src/components/ContactForm.tsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";

import vector51 from "@/assets/vector-51.svg";
import vector53 from "@/assets/vector-53.svg";
import vector54 from "@/assets/vector-54.svg";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  };

  const handleSubmit = (values: any) => {
    // Handle form submission
    console.log(values);
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-6xl font-bold text-orange-600 mb-10">
        Have a project!
        <br />
        Let’s diascuss
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange }) => (
          <Form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Field
                  name="name"
                  placeholder="Your Name"
                  className="border border-gray-300 p-4 w-full"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 mt-2"
                />
              </div>
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 p-4 w-full"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-2"
                />
              </div>
              <div>
                <Field
                  name="phone"
                  placeholder="Phone Number"
                  className="border border-gray-300 p-4 w-full"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 mt-2"
                />
              </div>
              <div>
                <Field
                  name="company"
                  placeholder="Company Name"
                  className="border border-gray-300 p-4 w-full"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-red-500 mt-2"
                />
              </div>
            </div>
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                className="border border-gray-300 p-4 w-full h-32"
                onChange={handleChange}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 mt-2"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-white py-2 px-6 rounded-md mt-4 w-fit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
