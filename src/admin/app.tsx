import type { StrapiApp } from "@strapi/strapi/admin";
import logo from "./extensions/Amata.png";

export default {
  config: {
    auth: {
      logo,
    },
    head: {
      favicon: logo,
    },
    menu: {
      logo,
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Amata",
        "Auth.form.welcome.subtitle": "From IT Team with love",
        "HomePage.head.title": "Welcome to Amata",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
