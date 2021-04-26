import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";

import "moment-timezone";

import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  subject: yup.string().required("Please enter a subject for the email!"),
  message: yup.required("Please enter a body for the email!"),
});

const ContactUs = () => {
  let history = useHistory();
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        subject: "",
        message: "",
      }}
      validationSchema={schema}
      onSubmit={async (data, { setErrors }) => {
        // console.log(data);
        try {
          const response = await ContactAPI.post("/", {
            email: data.email,
            name: data.name,
            subject: data.subject,
            body: data.body,
          });
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
            <Form.Group controlId="formConfirmPassword">
              <Form.Label> Confirm your password </Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                values={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirm your password!"
                isInvalid={
                  !!(errors.confirmPassword && touched.confirmPassword)
                }
              />
              <Form.Control.Feedback type="invalid">
                Passwords do not match!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formFirstName">
              <Form.Label> First Name </Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                values={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your first name!"
                isInvalid={!!(errors.firstName && touched.firstName)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label> Last Name </Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                values={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your last name!"
                isInvalid={!!(errors.lastName && touched.lastName)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label> City </Form.Label>
              <Form.Control
                type="text"
                name="city"
                values={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your city!"
                isInvalid={!!(errors.city && touched.city)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label> State </Form.Label>
              <Form.Control
                type="text"
                name="state"
                values={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your state!"
                isInvalid={!!(errors.state && touched.state)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBirthdate">
              <Form.Label> Birthdate </Form.Label>
              <Form.Control
                type="text"
                name="birthdate"
                values={values.birthdate}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your birthdate! (MM/DD/YYYY)"
                isInvalid={!!(errors.birthdate && touched.birthdate)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.birthdate}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formInviteCode">
              <Form.Label> Invite Code (Optional) </Form.Label>
              <Form.Control
                type="text"
                name="inviteCode"
                values={values.inviteCode}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Invite Code"
                isInvalid={!!(errors.inviteCode && touched.inviteCode)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.inviteCode}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
  // return (
  //   <>
  //     <TopNavBar />
  //     <Container>
  //       <Row>
  //         <Col>
  //           <div align="center">
  //             <h1>Contact Us</h1>
  //           </div>
  //           <Form>
  //             <Form.Row>
  //               <Form.Group as={Col} controlId="formGridEmail">
  //                 <Form.Label>Email</Form.Label>
  //                 <Form.Control type="email" />
  //               </Form.Group>

  //               <Form.Group as={Col} controlId="formGridName">
  //                 <Form.Label>Name</Form.Label>
  //                 <Form.Control type="name" />
  //               </Form.Group>
  //             </Form.Row>

  //             <Form.Row>
  //               <Form.Group as={Col} controlId="formGridSubject">
  //                 <Form.Label>Subject</Form.Label>
  //                 <Form.Control />
  //               </Form.Group>
  //             </Form.Row>
  //             <Form.Group controlId="exampleForm.ControlTextarea1">
  //               <Form.Label>Message</Form.Label>
  //               <Form.Control as="textarea" rows={3} />
  //             </Form.Group>
  //             <br></br>
  //             <Button variant="primary" type="submit" block>
  //               Submit
  //             </Button>
  //             <br />
  //             <br />
  //             <br />
  //             <br />
  //             <br />
  //             <br />
  //             <br />
  //             <br />
  //             <br />
  //             <br />
  //             <br />
  //             <br />
  //           </Form>
  //         </Col>
  //       </Row>
  //     </Container>
  //     <Footer />
  //   </>
  // );
};

export default ContactUs;
