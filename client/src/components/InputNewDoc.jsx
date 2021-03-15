import React, { useContext, useState } from 'react'
import DashboardAPI from '../apis/DashboardAPI'
import { TestContext } from '../context/TestContext';


//Lets user input a test object into backend db
const InputNewDoc = () => {
    const [practiceName, setPractice] = useState("");
    const [doctor, setDoctor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await DashboardAPI.post("/add_doctor", {
                practiceName: practiceName,
                doctor: doctor,
            })
            console.log(response.data.data)
        }
        catch (err) {
            console.log(err)
        }
        setPractice("");
        setDoctor("");
    }

    return(
        <form>
            <input 
                id="input-practice" 
                value={practiceName} 
                placeholder="Practice" 
                onChange={e => setPractice(e.target.value)} 
            />
            <input 
                id="input-doctor" 
                value={doctor} 
                placeholder="Doctor" 
                onChange={e => setDoctor(e.target.value)} 
            />
            <button type="submit" onClick={handleSubmit}>
                Insert New Doctor
            </button>
        </form>
    )
}

export default InputNewDoc;