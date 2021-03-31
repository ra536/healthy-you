import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleAPI from '../apis/ArticleAPI';
import { Container } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment-timezone';

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
    const [publishDate, setPublishDate] = useState("");
    const [author, setAuthor] = useState("");

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
                setPublishDate(response.data.data[0].createdAt);
                setAuthor(response.data.writer.firstName + " " + response.data.writer.lastName);
                console.log(response.data.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [id]);

    return (
        // Return different webpage, depending on the validity of the ID provided
        <>
            <TopNavBar />
            <Container>
                {console.log(content)}
                <h1>{headline}</h1>
            Categories: <a href="/">{category}</a>
                <br />
                <br />
                <a href="/">{author}</a> | <Moment format="dddd MMMM Do, YYYY [at] h:mm A">{publishDate}</Moment>
                <br />

                <br /><img src={image} /><p><i>Above: {caption}</i></p>
                <br />
                <p>{content.split("\n").map((i, key) => {
                    return <p key={key}>{i}</p>;
                })}</p>
                <br />
                <br />
                <br />

            </Container>
        </>
    )
}

export default Article;