import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AdAPI from "../apis/AdAPI";
import RegionAPI from "../apis/RegionAPI";
import CategoryAPI from "../apis/CategoryAPI";
import { Table, Button } from "react-bootstrap";
import AppointmentAPI from "../apis/AppointmentAPI";

const ManageAds = (props) => {
    const sizeList = ["250x250", "300x600", "1000x300", "728x90"];
    const [results, setResults] = useState([]);
    const [size, setSize] = useState("250x250");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");
    const [regions, setRegions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [allRegions, setAllRegions] = useState(["one", "two", "three"]);
    const [allCategories, setAllCategories] = useState(["A", "B", "C"]);

    const [file, setFile] = useState("");

    const previewImage = async (e) => {
        var reader = new FileReader();

        reader.addEventListener(
            "load",
            function () {
                var image = new Image();
                image.height = 200;
                image.width = 300;
                image.title = "Name";
                image.src = this.result;
                document.getElementById("input-file").appendChild(image);
                setImage(this.result);
                console.log(this.result);
                console.log(typeof this.result);
            },
            false
        );

        setFile(e.target.files[0]);
        reader.readAsDataURL(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(size);
            const result = await AdAPI.post("/create", {
                size: size,
                link: link,
                image: image,
                region: regions,
                categories: categories,
            })
            setResults([...results, result.data.data]);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        //let value = Array.from(e.target.selectedOptions, option => option.value);
        //console.log(value);
        setSize(e.target.value);
        e.preventDefault();
    };

    const handleRegionChange = (e) => {
        let arrayOfSelectedOptions = e.target.selectedOptions;
        let arrayOfSelected = [];

        for (let i = 0; i < arrayOfSelectedOptions.length; i++) {
            let value = arrayOfSelectedOptions[i].value;
            arrayOfSelected[i] = value;
        }
        console.log(arrayOfSelected);
        setRegions(arrayOfSelected)
        // console.log(arrayOfSelectedOptions);
        e.preventDefault();
    };

    const handleCategoryChange = (e) => {
        let arrayOfSelectedOptions = e.target.selectedOptions;
        let arrayOfSelected = [];

        for (let i = 0; i < arrayOfSelectedOptions.length; i++) {
            let value = arrayOfSelectedOptions[i].value;
            arrayOfSelected[i] = value;
        }
        console.log(arrayOfSelected);
        setCategories(arrayOfSelected)
        // console.log(arrayOfSelectedOptions);
        e.preventDefault();
    };

    const handleDelete = async (e) => {
        try {
            const response = await AdAPI.post("/delete", {
                ad_id: e.target.id,
            });
            console.log(response.data.data);
            setResults(results.filter((item) => item.ad_id !== e.target.id));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await AdAPI.post("/getAll", {});
                console.log(result.data.data);
                setResults(result.data.data);
            } catch (err) {
                console.log(err);
            }
        };

        const fetchData2 = async () => {
            try {
                // Collect an array of all regions in database.
                const allReg = await RegionAPI.get("/findAll", {});
                const length = allReg.data.data.length;
                let arrayOfAllRegions = [];
                for (let i = 0; i < length; i++) {
                    let value = allReg.data.data[i].name;
                    arrayOfAllRegions[i] = value;
                }
                console.log(arrayOfAllRegions);
                setAllRegions(arrayOfAllRegions);
            } catch (err) {
                console.log(err);
            }
        };

        const fetchData3 = async () => {
            try {
                // Collect an array of all categories in database.
                const allCate = await CategoryAPI.get("/findAll", {});
                const lengthOfCat = allCate.data.data.length;
                let arrayOfAllCategories = [];
                for (let i = 0; i < lengthOfCat; i++) {
                    let value = allCate.data.data[i].category;
                    arrayOfAllCategories[i] = value;
                }
                console.log(arrayOfAllCategories);
                setAllCategories(arrayOfAllCategories);

            } catch (err) {
                console.log(err);
            }

        };

        console.log("use effect happened!");
        fetchData();
        fetchData2();
        fetchData3();
    }, []);

    const handleArray = (array) =>{
        if (array !== null) {
            var text = "";
            array.map((area, index) => {
              if (index === array.length - 1) {
                  text = text + area;
              } else {
                  text = text + area + ", ";
              }
            })
            return (text);
        }
    }
    console.log(results);
/*
    <select value={regions} onChange={handleRegionChange} multiple>
        {allRegions.map((aRegion) => {
            return (
                <option
                    key={"add " + aRegion}
                    value={aRegion}
                >
                    {aRegion}
                </option>
            );
        })}
    </select>*/

    return (
        <>
        <br />
            <form>
                <select value={size} onChange={handleChange}>
                    {sizeList.map((aSize) => {
                        return (
                            <option
                                key={"add " + aSize}
                                value={aSize}
                            >
                                {aSize}
                            </option>
                        );
                    })}
                </select>
                {" "}
                <input type="text" placeholder="Link" onChange={(e) => setLink(e.target.value)}></input>
                {" "}
                <input
                    id="input-file"
                    name="article-image"
                    type="file"
                    onChange={(e) => previewImage(e)}
                />
                {" "}
                <br/>
                <label htmlFor="regionChoice">Choose your regions: (Hold ctrl for multiple)</label>
                <select id="regionChoice" onChange={handleRegionChange} multiple>
                    {allRegions.map((aRegion) => {
                        return (
                            <option key={"add " + aRegion} value={aRegion}>
                                {aRegion}
                            </option>
                        );
                    })}
                </select>
                <br/>
                <label htmlFor="categoryChoice">Choose your categories:</label>
                <select id="categoryChoice" onChange={handleCategoryChange} multiple>
                    {allCategories.map((aCategory) => {
                        return (
                            <option key={"add " + aCategory} value={aCategory}>
                                {aCategory}
                            </option>
                        );
                    })}
                </select>
                {" "}
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                <br />
                <img src={image} alt="" width="200px" id="preview"></img>

            </form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Link</th>
                        <th>Image</th>
                        <th>Regions</th>
                        <th>Categories</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((obj) => {
                        return (
                            <>
                                <tr>
                                    <td>{obj.type}</td>
                                    <td>{obj.ad_link}</td>
                                    <td><img width="200px" src={obj.ad_image}></img></td>
                                    <td> {handleArray(obj.region)}
                                    </td>
                                    <td> {handleArray(obj.categories)}</td>
                                    <td><Button variant="danger" id={obj.ad_id} onClick={handleDelete}>Delete</Button></td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </Table>
            <br />
            <br />
        </>
    );
};

export default ManageAds;