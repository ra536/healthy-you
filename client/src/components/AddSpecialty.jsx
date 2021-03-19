import React, { useEffect, useState, useContext } from 'react'
import SpecialtyAPI from '../apis/SpecialtyAPI'
import DoctorAPI from '../apis/DoctorAPI'
import { AppContext } from '../context/AppContext';

const AddSpecialty = (props) => {
    // const [specialties, setSpecialties] = useState([]);
    const [specialty, setSpecialty] = useState("");
    const [ allSpecialties, setAllSpecialties ] = useState([]);
    const { specialties, addSpecialty } = useContext(AppContext);

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (SpecialtyAPI.get("/findAll"));
                //console.log(response.data.data)
                setAllSpecialties(response.data.data)
                setSpecialty(response.data.data[0].specialty)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        setSpecialty(e.target.value);
        console.log(e.target.value);
        e.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await DoctorAPI.post("/addSpecialty", {
                specialty: specialty,
                doctorID: props.doctorID
            })
            //addTest(response.data.data)
            console.log("SPECIALTY");
            console.log(response.data.data)
            addSpecialty(response.data.data.specialty);
            console.log(specialties);
        }
        catch (err) {
            console.log(err)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={specialty} onChange={handleChange}>
                    {allSpecialties.map(specialties => {
                        return (
                            <option key={"add " + specialties.specialty} value={specialties.specialty}>
                                { specialties.specialty}
                            </option>
                        )
                    })
                    }
                </select>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddSpecialty;


