import React, { useContext, useState } from 'react'
import RegisterAPI from '../apis/RegisterAPI'
import { Redirect, Link } from 'react-router-dom'
import { LoginContext } from '../context/LoginPersistence';

//Lets user input a test object into backend db
const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const { loggedIn, isDoctor, isUser, onlineStatus, isRoleDoctor , isRoleUser } = useContext(LoginContext)

      function validateForm() {
        return email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0 && city.length > 0 && state.length > 0 && birthdate.length > 0;
    } // TODO - 'Cosmetic' Specialty is picked in register.js, although it should be an option when setting up an account

    const handleSubmit = async (e) => {
        e.preventDefault()
        var roleChosen = document.getElementById("mySelect").value;
        console.log("role is", roleChosen)
        try {
            const response = await RegisterAPI.post("/", {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                city: city,
                state: state,
                birthdate: birthdate,
                role: roleChosen
            })
            console.log(response.data.data)

            if (response.data.data === null){
                //return error profile exists
            }

            else{
                //redirect to proper dashboard
                onlineStatus(true)
                    if (response.data.data.role === undefined){
                    isRoleDoctor(true)
                    localStorage.setItem('userRole', response.data.data.role);
                    localStorage.setItem('userID', response.data.data.doctor_id);
                }

                else{
                    isRoleUser(true)
                    localStorage.setItem('userRole', response.data.data.role);
                    localStorage.setItem('userID', response.data.data.user_id);
                }
            }
            
        }
        catch (err) {
            console.log(err)
        }
    }

    return loggedIn && isUser ? (
        <Redirect to='/' />
      ) : loggedIn && isDoctor ? (
        <Redirect to='/doctorid/doctor-dashboard' />
      ) : (
        <form>
            <div>
                <input
                    value={ email }
                    type = "email"
                    placeholder="Email Address"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    value={ password }
                    type = "password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    value={ firstName }
                    type = "text"
                    placeholder="First Name"
                    onChange={e => setFirstName(e.target.value)}
                />
                <input
                    value={ lastName }
                    type = "text"
                    placeholder="Last Name"
                    onChange={e => setlastName(e.target.value)}
                />
                <input
                    value={ city }
                    type = "text"
                    placeholder="City"
                    onChange={e => setCity(e.target.value)}
                />
                <input
                    value={ state }
                    type = "text"
                    placeholder="State"
                    onChange={e => setState(e.target.value)}
                />
               
                <input
                    value={ birthdate }
                    type = "text"
                    placeholder="Birthdate (MM/DD/YYYY)"
                    onChange={e => setBirthdate(e.target.value)}
                />

                <form>
                Select a Role:
                    <select id="mySelect">
                        <option value="User">User</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Writer">Writer</option>
                    </select>
                </form>
            </div>
            <button
                onClick={ handleSubmit }
                type="submit"
                disabled={!validateForm()}
            >
                Submit
            </button>
        </form>
    )
}

export default RegisterForm;


