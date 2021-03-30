import React, { useContext, useState } from 'react'
import TestAPI from '../apis/TestAPI'
import { AppContext } from '../context/AppContext';
import { Button, Form } from 'react-bootstrap';

// bootstrap styles library (gives automatic styling)
import 'bootstrap/dist/css/bootstrap.css';


//Lets user input a test object into backend db
const InputTest = () => {
    const { addTest } = useContext(AppContext);
    const [testID, setTestID] = useState();
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await TestAPI.post("/", {
                test_id: testID,
                content: content
            })
            addTest(response.data.data)
            console.log(response.data.data)
        }
        catch (err) {
            console.log(err)
        }
        // clear input
        setTestID("");
        setContent("");
    }

    return (
        <Form>
            <div>
                <Form.Group>
                    <Form.Label>TestID</Form.Label>
                    <Form.Control
                        type="text"
                        id="testID"
                        placeholder="Enter testID"
                        value={ testID }
                        onChange={e => setTestID(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                    Choose a unique number
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        type="text"
                        id="content"
                        placeholder="Enter content"
                        value={ content }
                        onChange={e => setContent(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                    Enter some text
                    </Form.Text>
                </Form.Group>
                <Button
                    onClick={ handleSubmit }
                    type="submit"
                >
                    Add
                </Button>
            </div>
        </Form>
    )
}

export default InputTest;


