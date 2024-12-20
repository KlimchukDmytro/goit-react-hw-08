import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    await dispatch(register(values));
    navigate("/contacts"); 
    actions.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form>
        <label htmlFor="name">Username</label>
        <Field type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" id="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
