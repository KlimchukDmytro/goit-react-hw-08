import { Field, Formik, Form } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/operation";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(registration(values));
    options.resetForm();
  };
  const initialValues = {
    name: "",
    email: "",
    password: ""
  }
  return (
    <div className={s.wrapper}>
      <h2>Registration</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field name="name" placeholder="Enter name" />
          <Field name="email" placeholder="Enter email" />
          <Field name="password" type="password" placeholder="Enter pass" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
