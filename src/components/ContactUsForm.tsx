"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import SpinnerLoader from "@/utils/icons";
import BottomLinks from "./BottomLinks";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    name: Yup.string().required("Required"),
    phone: Yup.string()
      .matches(
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        "Invalid phone number"
      )
      .required("Required"),
    company: Yup.string(),
    message: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  };

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      setLoading(true);
      const response = await fetch("/api/contact-us", {
        body: JSON.stringify(values),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      setLoading(false);

      if (response?.data?.mailId) {
        toast.success("Email sent successfully");
        resetForm();
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container text-black mx-auto pt-20">
      <h2 className="max-sm:text-[25px] w-[90%] mx-auto max-sm:font-semibold max-lg:text-3xl text-[64.08px] text-center font-semibold text-primary-orange  leading-[75px] max-sm:mb-8 mb-16">
        Looking to Boost Your Social Media Presence? Let's Connect!
      </h2>

      <div className="flex justify-between max-lg:flex-col">
        <div className="lg:w-1/2 space-y-4">
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
                    className="bg-transparent text-black focus:outline-none border border-b-2 border-black border-x-0 border-t-0 p-4 w-full"
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
                    className="bg-transparent text-black focus:outline-none border border-b-2 border-black border-x-0 border-t-0 p-4 w-full"
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
                    className="bg-transparent border text-black focus:outline-none border-b-2 border-black border-x-0 border-t-0 p-4 w-full"
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
                    className="bg-transparent text-black focus:outline-none border border-b-2 border-black border-x-0 border-t-0 p-4 w-full"
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
                  className="bg-transparent text-black focus:outline-none border border-b-2 border-black border-x-0 border-t-0 p-4 w-full h-32"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 mt-2"
                />
              </div>
              <div className="flex max-md:justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-orange-600 text-white py-2 px-6 rounded-md mt-4 w-fit ${
                    loading ? "cursor-auto" : ""
                  }`}
                >
                  {loading ? (
                    <span>
                      <SpinnerLoader />
                    </span>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <BottomLinks />
    </div>
  );
};

export default ContactForm;
