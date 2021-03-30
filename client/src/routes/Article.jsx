import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ArticleAPI from '../apis/ArticleAPI';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import TopNavBar from '../components/TopNavBar';

const Article = (props) => {
    let { id } = useParams();

    const [headline, setHeadline] = useState("");
    const [category, setCategory] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (ArticleAPI.post("/find", {
                    article_id: id
                }));
                setHeadline(response.data.data[0].headline);
                setCategory(response.data.data[0].category);
                setSummary(response.data.data[0].summary);
                setContent(response.data.data[0].content);
                setImage(response.data.data[0].image_data);
                setCaption(response.data.data[0].image_caption);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);
    // font-size="inherit" color="inherit" border="initial" padding="initial" font-family="inherit"

    return (
        // Return different webpage, depending on the validity of the ID provided
        <>
        <TopNavBar />
        <Container>
            {console.log(content)}
            <h1>{headline}</h1>
            <a href="/">{category}</a>
            <br />
            <br/><img src={image}/><p><i>Above: {caption}</i></p>
            <br />
            <p>{content.split("\n").map((i,key) => {
            return <p key={key}>{i}</p>;
        })}</p>
            
            
        </Container>
        </>
    )
}

export default Article;