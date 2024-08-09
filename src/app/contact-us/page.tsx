import ContactForm from "@/components/ContactUsForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Media Solutions Pvt. Ltd.",
  description: "Contact Us by Media Solutions Pvt. Ltd. Company",
};

const ContactUsPage = () => {
  return <ContactForm />;
};

export default ContactUsPage;
