import React, { useContext } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import LoginAPI from "../apis/LoginAPI";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  role: yup.string().required(),
});

const LoginForm = (props) => {
  const region = props.currentRegion;
  let history = useHistory();
  const { setRole, setLoggedIn } = useContext(AuthContext);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        role: "",
      }}
      validationSchema={schema}
      onSubmit={async (data, { setErrors }) => {
        try {
          const response = await LoginAPI.post(
            "/",
            {
              email: data.email,
              password: data.password,
              role: data.role,
            },
            {
              withCredentials: true,
            }
          );
          if (response.data.status === "success") {
            // alert("You have successfully logged in!");
            if (response.data.user.role === "Doctor") {
              setLoggedIn(true);
              setRole(response.data.user.role);
              history.push("/doctor-dashboard/" + response.data.user.doctor_id + "/" + region);
            } else if (response.data.user.role === "Writer") {
              setLoggedIn(true);
              setRole(response.data.user.role);
              history.push("/writer-dashboard/" + response.data.user.writer_id + "/" + region);
            } else if (response.data.user.role === "Admin") {
              setLoggedIn(true);
              setRole(response.data.user.role);
              history.push("/admin-dashboard/" + response.data.user.user_id + "/" + region);
            } else {
              setLoggedIn(true);
              setRole(response.data.user.role);
              history.push("/user-dashboard/" + response.data.user.user_id + "/" + region);
            }
          } else {
            if (response.data.target === "email") {
              setErrors({ email: response.data.status });
            } else {
              setErrors({ password: response.data.status });
            }
          }
        } catch (err) {
          console.log(err)
        }
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isInvalid,
      }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label> Email </Form.Label>
              <Form.Control
                type="text"
                name="email"
                values={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email!"
                isInvalid={!!(errors.email && touched.email)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label> Password </Form.Label>
              <Form.Control
                type="password"
                name="password"
                values={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your password!"
                isInvalid={!!(errors.password && touched.password)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="role">
              <Form.Label>I am logging in as a:</Form.Label>
              <Form.Control
                as="select"
                htmlSize={4}
                custom
                values={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!(errors.role && touched.role)}
              >
                <option value="User"> User </option>
                <option value="Doctor"> Doctor </option>
                <option value="Writer"> Writer </option>
                <option value="Admin"> Admin </option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.role}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
