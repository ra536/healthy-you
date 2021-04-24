import React, { useState, useContext, useEffect } from "react";
import DoctorAPI from "../apis/DoctorAPI";
import { AppContext } from "../context/AppContext";

const RemoveCategory = (props) => {
    const [category, setCategory] = useState("");
    const { categories, setCategories, removeCategory } = useContext(
        AppContext
    );

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await DoctorAPI.post(
                    "/findOne",
                    {
                        doctor_id: props.doctor_id,
                    },
                    {
                        withCredentials: true,
                    }
                );
                setCategories(response.data.data[0].category);
                setCategory(response.data.data[0].category[0]);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [props.doctor_id, setCategories]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await DoctorAPI.post(
                "/removeCategory",
                {
                    category: category,
                    doctorID: props.doctorID,
                },
                {
                    withCredentials: true,
                }
            );
            console.log(response.data.data);
            removeCategory(response.data.data.category);
        } catch (err) {
            console.log(err);
        }
        setCategory("");
    };

    const handleChange = (e) => {
        setCategory(e.target.value);
        console.log(e.target.value);
        e.preventDefault();
    };

    return (
        <form>
            <form onSubmit={handleSubmit}>
                <select value={category} onChange={handleChange}>
                    {categories.map((categories) => {
                        return (
                            <option key={"remove " + categories} value={categories}>
                                {categories}
                            </option>
                        );
                    })}
                </select>
                <input type="submit" value="Remove" />
            </form>
        </form>
    );
};

export default RemoveCategory;
