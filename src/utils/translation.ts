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
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    team: "Team",
    letsDoIt: "Let's do it! —",
  },
  aboutUs: {
    title: "About Us",
    description: `We are a dynamic team of social media enthusiasts dedicated to helping
      brands connect with their audience in meaningful ways. With a strategic
      approach to content creation and engagement, we empower businesses to
      amplify their voice and reach new heights in the digital landscape`,
  },
  services: {
    title: "Services",
    description: "",
  },
  home: {
    main: {
      title: "Building Connections, One Click at a Time.",
      description:
        "Join the Community of Engaged Audiences. Share, Like, and Grow with Our Innovative Social Media Strategies",
      info: {
        1: {
          title: "Targeted Advertising",
          description:
            "Reach your ideal audience with precision. Tailor ads to specific demographics, interests, and behaviors for maximum impact",
        },
        2: {
          title: "Engagement Strategies",
          description:
            "Boost interaction with your brand. Implement tactics that encourage likes, shares, and comments to grow your online community.",
        },
        3: {
          title: "Performance Analytics",
          description:
            "Measure your success with detailed analytics. Track key metrics to optimize campaigns and achieve your social media goals.",
        },
      },
    },
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
