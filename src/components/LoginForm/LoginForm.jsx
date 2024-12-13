import { useDispatch, useSelector } from "react-redux";
import s from "./LoginForm.module.css";
import { Field, Formik, Form } from "formik";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { login } from "../../redux/auth/operation";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const handieSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className={s.wrapper}>
      <h2>Login</h2>
      <Formik onSubmit={handieSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field name="email" placeholder="Enter email" />
          <Field name="password" type="password" placeholder="Enter pass" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
