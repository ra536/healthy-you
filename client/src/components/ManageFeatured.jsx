import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FeaturedAPI from "../apis/FeaturedAPI";
import { Table, Button } from "react-bootstrap";

const ManageFeatured = (props) => {

    const [results, setResults] = useState([]);
    const [deleteID, setDeleteID] = useState("");
    const [type, setType] = useState("");
    const [typeID, setTypeID] = useState("");

    // Fix to work with FeaturedAPI>>>>>>>>>>>>
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await FeaturedAPI.post("/create", {
                type: type,
                id: typeID,
            });
            console.log(response.data.data);
            setResults([...results, response.data.data])
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await FeaturedAPI.post("/delete", {
                featured_id: e.target.id,
            });
            setResults(results.filter((item) => item.featured_id !== e.target.id));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FeaturedAPI.post(
                    "/findAll",
                    {

                    }
                );
                setResults(response.data.data);
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
                <input type="text" placeholder="Type" onChange={(e) => setType(e.target.value)}></input>
                {" "}
                <input type="text" placeholder="ID" onChange={(e) => setTypeID(e.target.value)}></input>
                {" "}
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            </form>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Element ID</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((obj, index) => {
                        return (
                            <React.Fragment key={index}>
                                <tr>
                                    <td>{obj.type}</td>
                                    <td>{obj.item_id}</td>
                                    <td><Button variant="danger" id={obj.featured_id} onClick={handleDelete}>Delete</Button></td>
                                </tr>
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default ManageFeatured;