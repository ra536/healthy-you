import React, { useEffect, useState, useContext } from "react";
import CategoryAPI from "../apis/CategoryAPI";
import DoctorAPI from "../apis/DoctorAPI";
import { AppContext } from "../context/AppContext";

const AddCategory = (props) => {

  const [category, setCategory] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const { categories, addCategory } = useContext(AppContext);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await CategoryAPI.get("/findAll");
        //console.log(response.data.data)
        setAllCategories(response.data.data);
        setCategory(response.data.data[0].category);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await DoctorAPI.post(
        "/addCategory",
        {
          category: category,
          doctor_id: props.doctorID,
        },
        {
          withCredentials: true,
        }
      );
      console.log("category");
      console.log(response.data.data);
      addCategory(response.data.data.category);
      console.log(categories);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={category} onChange={handleChange}>
          {allCategories.map((categories) => {
            return (
              <option
                key={"add " + categories.category}
                value={categories.category}
              >
                {categories.category}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddCategory;
