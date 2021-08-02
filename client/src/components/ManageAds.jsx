import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AdAPI from "../apis/AdAPI";
import { Table, Button } from "react-bootstrap";

const ManageAds = (props) => {
    const sizeList = ["250x250", "300x600", "1000x300", "728x90"];
    const [results, setResults] = useState([]);
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");
    const [size, setSize] = useState("250x250");

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
                //region: adRegion,
            })
            setResults([...results, result.data.data]);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setSize(e.target.value);
        console.log(e.target.value);
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