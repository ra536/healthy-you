import React, { useContext } from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Button } from 'react-bootstrap'
import LoginAPI from '../apis/LoginAPI'
import { AuthContext } from '../context/AuthContext';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  role: yup.string().required(),
})

const LoginForm = () => {
  const { role, setRole } = useContext(AuthContext);
  return (
    <Formik
        initialValues={{
            email: "",
            password: "",
            role: "",
        }}
        validationSchema={ schema }
        onSubmit={ async (data, { setErrors }) => {
            console.log(data);
            try {
                const response = await LoginAPI.post("/", {
                    email: data.email,
                    password: data.password,
                    role: data.role
                })
                console.log(response.data)
                if (response.data.status == "success") {
                  alert("You have successfully logged in!")
                  setRole(data.role)
                  console.log(role)
                } else {
                  if (response.data.target == "email") {
                    setErrors({ email: response.data.status})
                  } else {
                    setErrors({ password: response.data.status})
                  }
                }
            }
            catch (err) {
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
            console.log(values)
            return (
                <Form onSubmit={ handleSubmit }>
                    <Form.Group controlId="formEmail">
                        <Form.Label> Email </Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            values={ values.email }
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            placeholder="Enter your email!"
                            isInvalid={ !!(errors.email && touched.email) }
                        />
                        <Form.Control.Feedback type="invalid">
                            { errors.email }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label> Password </Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            values={ values.password }
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            placeholder="Enter your password!"
                            isInvalid={ !!(errors.password && touched.password) }
                        />
                        <Form.Control.Feedback type="invalid">
                            { errors.password }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="role">
                      <Form.Label>I am logging in as a:</Form.Label>
                      <Form.Control
                        as="select"
                        htmlSize={3}
                        custom
                        values={ values.role }
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        isInvalid={ !!(errors.role && touched.role) }
                      >
                        <option value="User"> User </option>
                        <option value="Doctor"> Doctor </option>
                        <option value="Writer"> Writer </option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                            { errors.role }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            )
        }}
    </Formik>
)
}

export default LoginForm;
// import React, { useContext, useState } from "react";
// import LoginAPI from '../apis/LoginAPI';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { Redirect, Link } from 'react-router-dom'
// import { LoginContext } from '../context/LoginPersistence';



// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const { loggedIn, setLoggedIn, userID, setUserID, isDoctor, isUser, onlineStatus, isRoleDoctor , isRoleUser } = useContext(LoginContext)
    

//     function validateForm() {
//         return email.length > 0 && password.length > 0;
//     }

//     const handleSubmit = async (e, value) => {

//       let endpoint = "/" + email + " " + password;
//       e.preventDefault();
//       try {
//           const response = await LoginAPI.get(endpoint, {
//             userEmail: email,
//             practicePassword: password
//             });
//           console.log(response.data.data)
//           setUserID(response.data.data.doctor_id);
//           if(response.data.data){
//             onlineStatus(true);
//             setLoggedIn(true);
//               if (response.data.data.role === undefined){
//               isRoleDoctor(true)
//               setUserID(response.data.data.doctor_id);
//               localStorage.setItem('userRole', response.data.data.role);
//               localStorage.setItem('userID', response.data.data.doctor_id);
//               }


//             else{
//               isRoleUser(true)
//               setUserID(response.data.data.user_id);
//               localStorage.setItem('userRole', response.data.data.role);
//               localStorage.setItem('userID', response.data.data.user_id);
//               }
//           }

//           else{
//             //return error on screen/ incremented times attempted
//           }

//         }
//        catch (err) {
//         console.log(err)
//     }
//     setPassword("");
//   };

//   return loggedIn && isUser ? (
//     <Redirect to='/' />
//   ) : loggedIn && isDoctor ? (
//     <Redirect to={'/doctor-dashboard/' + userID} />
//   ) : (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             placeholder="Enter email"
//             autoFocus
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             placeholder="Enter password"
//             type="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//         <p>
//             New Account? <a href="/register">Register here</a>
//         </p>
//       </Form>
//     </div>
//   );
// }

// export default Login;