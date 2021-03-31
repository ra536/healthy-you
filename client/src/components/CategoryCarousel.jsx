import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ArticleComponent from './ArticleComponent';

const CategoryCarousel = (props) => {
    const articleInfo = props.article;
    const writerInfo = props.writer;
    const category = props.category;

    return (
        
        <Container id="health">
            <br />
            <div align="center">
                <h2>{category}</h2>
            </div>
            <br />
            <Row>

                <Col>
                    <ArticleComponent article={props.article} writer={props.writer} type="carousel"/>
                </Col>

                <Col>
                    <ArticleComponent article={props.article} writer={props.writer} type="carousel"/>
                </Col>


                <Col>
                    <ArticleComponent article={props.article} writer={props.writer} type="carousel"/>
                </Col>
            </Row>


        </Container>
    );
}

export default CategoryCarousel;