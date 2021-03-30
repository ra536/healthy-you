import React, { useContext, useState } from 'react'
import PracticeAPI from '../apis/PracticeAPI'
import { AppContext } from '../context/AppContext';


const RemovePractice = (props) => {

    const [practiceName, setPractice] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await PracticeAPI.post("/remove", {
                practiceName: practiceName,
                location: location,
                doctorID: props.doctorID
            }) 
            console.log(props.doctorID);
            console.log(response.data.data)
        }
        catch (err) {
            console.log(err)
        }
        setPractice("");
        setLocation("");
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
                id="input-location" 
                value={location} 
                placeholder="Location" 
                onChange={e => setLocation(e.target.value)} 
            />
            <button type="submit" onClick={handleSubmit}>
                Remove Practice
            </button>
        </form>
    )
}

export default RemovePractice;