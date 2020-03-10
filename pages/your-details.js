import React, { useState } from "react";
import PageTemplate from "../components/PageTemplate";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required")
});

function YourDetails() {
  const { t } = useTranslation();
  return (
    <PageTemplate>
      <h1 className="h2">Your details</h1>
      <Formik
        initialValues={{ firstName: "Conrad" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={ValidationSchema}
      >
        {({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <label>
              {t("First name")}
              <Field name="firstName" />
            </label>
            <label>
              {t("Last name")}
              <Field name="lastName" />
            </label>
            {errors.firstName && <div>{errors.firstName}</div>}
            <button>Save draft</button>
            <button type="submit">Next</button>
          </form>
        )}
      </Formik>
    </PageTemplate>
  );
}

export default YourDetails;
