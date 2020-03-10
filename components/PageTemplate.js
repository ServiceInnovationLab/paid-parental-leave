import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "../assets/scss/mdb.scss";
import Header from "./Header";
import Footer from "./Footer";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
            "First name": "Ingoa tuatahi",
            "Last name": "Ingoa whānau",
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default ({ children }) => {
  return (
    <>
      <Header />
      <div className="pageContainer">{children}</div>
      <Footer />
    </>
  );
};
