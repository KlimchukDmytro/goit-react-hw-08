import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    await dispatch(login(values));
    navigate("/contacts"); 
    actions.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
