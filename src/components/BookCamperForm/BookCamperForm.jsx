import { useId } from "react";
import ButtonOrLink from "../REUSABLE/ButtonOrLink/ButtonOrLink.jsx";
import css from "./BookCamperForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

export default function BookCamperForm() {
  const nameId = useId();
  const emailId = useId();
  const bookingDateId = useId();
  const commentId = useId();

  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const bookCamperSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .email()
      .required("Required"),
    bookingDate: Yup.string()
      .required("Required"),
    comment: Yup.string().min(20, "Too Short!").max(500, "Too Long!"),
  });

  const notify = () => toast.success("Successfully booked a camper!");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookCamperSchema}
      onSubmit={(values, action) => {
        notify();
        action.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field
          className={css.input}
          name="name"
          id={nameId}
          placeholder="Name*"
        />
        <ErrorMessage name="name" component="span" className={css.errorMessage} />
        <Field
          className={css.input}
          name="email"
          id={emailId}
          placeholder="Email*"
        />
        <ErrorMessage name="email" component="span" className={css.errorMessage} />
        <Field
          className={css.input}
          name="bookingDate"
          id={bookingDateId}
          placeholder="Booking date*"
        />
        <ErrorMessage name="bookingDate" component="span" className={css.errorMessage} />
        <Field
          className={css.textarea}
          name="comment"
          id={commentId}
          as="textarea"
          placeholder="Comment"
        />
        <ErrorMessage name="comment" component="span" className={css.errorMessage} />
        <ButtonOrLink
          text={"Send"}
          buttonType={"submit"}
          addClass={css.submitButton}
        />
        <Toaster />
      </Form>
    </Formik>
  );
}
