import React, { useContext, useState } from 'react'
import DashboardAPI from '../apis/DashboardAPI'
import { TestContext } from '../context/TestContext';


//Lets user input a test object into backend db
const InputNewPractice = () => {

    const [practiceName, setPractice] = useState("");
    const [website, setWebsite] = useState("");
    const [socialMedia, setSocialMedia] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await DashboardAPI.post("/add_practice", {
                practiceName: practiceName,
                website: website,
                socialMedia: socialMedia
            }) 
            console.log(response.data.data)
        }
        catch (err) {
            console.log(err)
        }
        setPractice("");
        setWebsite("");
        setSocialMedia("");
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
                id="input-website" 
                value={website} 
                placeholder="Website" 
                onChange={e => setWebsite(e.target.value)} 
            />
            <input 
                id="input-social-media" 
                value={socialMedia} 
                placeholder="Social Media" 
                onChange={e => setSocialMedia(e.target.value)} 
            />
            <button type="submit" onClick={handleSubmit}>
                Insert New Practice
            </button>
        </form>
    )
}

export default InputNewPractice;