"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    name: Yup.string().required("Required"),
    phone: Yup.string()
      .matches(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        "Invalid phone number"
      )
      .required("Required"),
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
      <h2 className="text-[45px] text-center font-normal text-black leading-[50px] mb-16">
        Let's Bring Your Vision to Life!
      </h2>

      <div className="flex justify-between max-lg:flex-col">
        <div className="lg:w-1/2">
          <h1 className="text-[64px] font-semibold text-primary-orange mb-10">
            Got a Project?
            <br />
            Lets Discuss!
          </h1>
          <span className="leading-[50px] text-[30px] max-lg:hidden">
            Thank you for reaching out!
          </span>
          <p className="max-lg:hidden">{`
        Please fill out the form below, and we’ll get back to you as soon as possible.We look forward to collaborating with you!
        `}</p>
        </div>
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
                    className="bg-transparent border border-b-2 border-black border-x-0 border-t-0 p-4 w-full"
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
                    className="bg-transparent border border-b-2 border-black border-x-0 border-t-0 p-4 w-full"
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
                    className="bg-transparent border border-b-2 border-black border-x-0 border-t-0 p-4 w-full"
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
                    className="bg-transparent border border-b-2 border-black border-x-0 border-t-0 p-4 w-full"
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
                  className="bg-transparent border border-b-2 border-black border-x-0 border-t-0 p-4 w-full h-32"
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

      <div className="w-full flex items-center justify-center pt-36">
        <div className=" items-center flex lg:gap-8 max-lg:gap-4  text-custom-gray">
          <span className="leading-about text-[35px] font-semibold">
            Youtube
          </span>
          <span className="leading-about text-[35px] font-semibold">
            Facebook
          </span>
          <span className="leading-about text-[35px] font-semibold">
            Instagram
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
