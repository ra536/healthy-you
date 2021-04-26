import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import ContactAPI from "../apis/ContactAPI";
import { useHistory } from "react-router-dom";

import "moment-timezone";

import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  subject: yup.string().required("Please enter a subject for the email!"),
  body: yup.string().required("Please enter a body for the email!"),
});

const ContactUs = () => {
  let history = useHistory();
  return (
    <>
      <TopNavBar />
      <Container>
        <Row>
          <Col>
            <div align="center">
              <h1>Contact Us</h1>
            </div>
            <Formik
              initialValues={{
                email: "",
                name: "",
                subject: "",
                body: "",
              }}
              validationSchema={schema}
              onSubmit={async (data, { setErrors }) => {
                console.log(data);
                try {
                  const response = await ContactAPI.post("/", {
                    email: data.email,
                    name: data.name,
                    subject: data.subject,
                    body: data.body,
                  });
                  alert("Email successfully sent!");
                  history.push("/");
                  console.log(response.data);
                } catch (err) {
                  console.log(err);
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
                    <Form.Row>
                      <Form.Group as={Col} controlId="formEmail">
                        <Form.Label> Email </Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          values={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!(errors.email && touched.email)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group as={Col} controlId="formName">
                        <Form.Label> Name </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          values={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!(errors.name && touched.name)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formSubject">
                        <Form.Label> Subject </Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          values={values.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!(errors.subject && touched.subject)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.subject}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formBody">
                        <Form.Label> Message </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          name="body"
                          values={values.body}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!(errors.body && touched.body)}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.body}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Button type="submit">Submit</Button>
                  </Form>
                );
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default ContactUs;
