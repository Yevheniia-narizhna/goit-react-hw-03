import { Field, Form, Formik, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const phoneRe = /(\+)?(\(?\d+\)?)(([\s-]+)?(\d+)){0,}/g;
const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRe, "Phone number is not valid")
    .required("Required"),
});

export default function ContactForm({ onAddContact }) {
  const handleSubmit = (values, options) => {
    const initialValues = {
      name: values.name,
      number: values.number,
      id: nanoid(),
    };
    onAddContact(initialValues);
    options.resetForm();
  };

  return (
    <div className={s.form}>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          handleSubmit(values, { resetForm });
          setSubmitting(false);
        }}
        validationSchema={validSchema}
      >
        {({ isSubmitting }) => (
          <Form className={s.formik}>
            <label htmlFor="name" className={s.label}>
              <span>Name</span>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="span" className={s.error} />
            </label>
            <label htmlFor="number" className={s.label}>
              <span>Number</span>
              <Field type="text" name="number" />
              <ErrorMessage
                name="number"
                component="span"
                className={s.error}
              />
            </label>
            <button disabled={isSubmitting} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
