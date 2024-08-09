import React from "react";
import ServicesComponent from "./_components/ServicesComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Media Solutions Pvt. Ltd.",
  description: "Services provided by Media Solutions Pvt. Ltd. Company",
};

const ServicesPage = () => {
  return <ServicesComponent />;
};

export default ServicesPage;
