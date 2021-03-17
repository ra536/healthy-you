import React, { useContext, useState } from 'react'
import RegisterAPI from '../apis/RegisterAPI'


//Lets user input a test object into backend db
const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await RegisterAPI.post("/", {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                city: city,
                state: state,
                email: email,
                birthdate: birthdate
            })
            console.log(response.data.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <form>
            <div>
                <input
                    value={ username }
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    value={ password }
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    value={ firstName }
                    placeholder="First Name"
                    onChange={e => setFirstName(e.target.value)}
                />
                <input
                    value={ lastName }
                    placeholder="Last Name"
                    onChange={e => setlastName(e.target.value)}
                />
                <input
                    value={ city }
                    placeholder="City"
                    onChange={e => setCity(e.target.value)}
                />
                <input
                    value={ state }
                    placeholder="State"
                    onChange={e => setState(e.target.value)}
                />
                <input
                    value={ email }
                    placeholder="Email Address"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    value={ birthdate }
                    placeholder="Birthdate"
                    onChange={e => setBirthdate(e.target.value)}
                />
            </div>
            <button
                onClick={ handleSubmit }
                type="submit"
            >
                Submit
            </button>
        </form>
    )
}

export default RegisterForm;


