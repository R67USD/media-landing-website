// src/utils/translation.ts

const translation = {
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact Us",
  },
  hero: {
    title: "Have a project!\nLet’s discuss",
    buttonLabel: "Submit",
    thankYou:
      "Thank you for getting in touch! Kindly. Fill the form, have a great day!",
  },
  contactForm: {
    name: "Your Name",
    email: "Your Email",
    phone: "Phone Number",
    company: "Company Name",
    message: "Message",
    interestedIn: "Interested in",
    country: "Country",
  },
  footer: {
    about: "About",
    features: "Features",
    pricing: "Pricing",
    gallery: "Gallery",
    team: "Team",
    letsDoIt: "Let's do it! —",
  },
};

export const t = (key: string) => {
  const keys = key.split(".");
  let current: any = translation;

  for (const k of keys) {
    if (!current[k]) {
      return key;
    }
    current = current[k];
  }

  return current;
};
