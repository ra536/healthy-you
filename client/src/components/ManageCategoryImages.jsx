import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ImageAPI from "../apis/ImageAPI";
import { Table, Button } from "react-bootstrap";

const ManageCategoryImages = (props) => {
    const [results, setResults] = useState([]);

    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

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
            const result = await ImageAPI.post("/create", {
                category: category,
                image: image,
            })
            setResults([...results, result.data.data]);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (e) => {
        try {
            const response = await ImageAPI.post("/delete", {
                image_id: e.target.id,
            });
            console.log(response.data.data);
            setResults(results.filter((item) => item.image_id !== e.target.id));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await ImageAPI.post("/getAll", {});
                setResults(result.data.data);
                console.log(result.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        console.log("use effect happened!");
        fetchData();
    }, []);

    return (
        <>
        <br />
            <form>
                <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)}></input>
                {" "}
                <input
                    id="input-file"
                    name="article-image"
                    type="file"
                    onChange={(e) => previewImage(e)}
                />
                {" "}
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                <br />
                <img src={image} alt="" width="200px" id="preview"></img>

            </form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((obj) => {
                        return (
                            <>
                                <tr>
                                    <td>{obj.category}</td>
                                    <td><img width="200px" src={obj.image}></img></td>
                                    <td><Button variant="danger" id={obj.image_id} onClick={handleDelete}>Delete</Button></td>
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

export default ManageCategoryImages;