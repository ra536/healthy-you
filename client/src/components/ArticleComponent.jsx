import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';
import { Col, Card } from 'react-bootstrap';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, LinkedinShareButton, EmailShareButton } from "react-share";
import Moment from 'react-moment';
import 'moment-timezone';
import 'bootstrap/dist/css/bootstrap.css';
require("dotenv").config();

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
                    <FacebookShareButton url={process.env.REACT_APP_HOME_URL + "/article/" + articleInfo.article_id}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
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
    if (componentType === "horizontal") {
        return (
            <>
                <Col md="auto">
                    <Link to={"/article/" + articleInfo.article_id} style={{ textDecoration: "none", color: "black" }}>
                        <Image src={articleInfo.image_data} alt="strech" width={330} height={210} mode='fit' rounded />
                    </Link>
                </Col>

                <Col>
                    <Link to={"/article/" + articleInfo.article_id} style={{ textDecoration: "none", color: "black" }}>
                        <a href="/">{articleInfo.category}</a>
                        <h4>{articleInfo.headline}</h4>


                        {articleInfo.summary}

                        <br />
                        <small className="text-muted">{writerInfo} | <Moment format="dddd MMMM Do, YYYY">{articleInfo.createdAt}</Moment></small>
                    </Link>
                </Col>
            </>

        );
    }
    if (componentType === "carousel") {
        return (
            <>
                <Link to={"/article/" + articleInfo.article_id} style={{ textDecoration: "none", color: "black" }}>
                    <Image rounded src={articleInfo.image_data} alt="healthpic2" width={250} mode='fit' />
                    <br /><span style={{ color: "blue" }}>{articleInfo.category}</span>
                    <h4>
                        {articleInfo.headline}
                    </h4>
                    <p>{articleInfo.summary}</p>
                </Link>
            </>
        );
    }
    return (
        <>
        </>
    );
}

export default ArticleComponent;