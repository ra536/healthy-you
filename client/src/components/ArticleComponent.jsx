import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const ArticleComponent = (props) => {
    const componentType = props.type;
    const articleInfo = props.article;
    const writerInfo = props.writer;

    if (componentType === "featured-large") {
        return (
            <Link to={"/article/" + articleInfo.article_id} style={{ textDecoration: "none", color: "black" }}>
                <span textAlign="left">
                    <br />
                    <Image src={articleInfo.image_data} className="mx-auto d-block" style={{ width: '70%' }} fluid rounded />
                    <span style={{ color: "blue" }}>{articleInfo.category}</span>
                    <h2>
                        {articleInfo.headline}
                    </h2>
                    <p>{articleInfo.summary}</p>
                </span>
            </Link>
        );
    }
    if (componentType === "featured-small") {
        return (
            <Link to={"/article/" + articleInfo.article_id} style={{ textDecoration: "none", color: "black" }}>
                <span align="center">
                    <Image src={articleInfo.image_data} fluid rounded />
                    <span style={{ color: "blue" }}>{articleInfo.category}</span>
                    <h4>
                        {articleInfo.headline}

                    </h4>
                    <p>{articleInfo.summary}</p>
                </span>
            </Link>
        );
    }
    return (
        <>
        </>
    );
}

export default ArticleComponent;