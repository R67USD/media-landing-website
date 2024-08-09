import { Metadata } from "next";
import AboutUsMainSection from "./_components/AboutUsMainSection";

export const metadata: Metadata = {
  title: "About Us | Media Solutions Pvt. Ltd.",
  description: "About Us by Media Solutions Pvt. Ltd. Company",
};

const AboutUsPage = () => {
  return <AboutUsMainSection />;
};

export default AboutUsPage;
