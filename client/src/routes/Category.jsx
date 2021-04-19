import React, { useEffect, useState, useContext, Col, Form, FormControl, Button } from "react";
import ad300 from "../components/ads/ad300.jpg";
import { useParams } from "react-router-dom";
import ArticleAPI from "../apis/ArticleAPI";
import { ListGroup, Container, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import ArticleComponent from "../components/ArticleComponent";
import TopNavBar from "../components/TopNavBar";

const ArticleCategory = (props) => {
  let { id } = useParams();

  const [articles, setArticles] = useState([]);

  // const [headlineList, setHeadlineList] = useState([]);
  // const [categoryList, setCategoryList] = useState([]);
  // const [summaryList, setSummaryList] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ArticleAPI.post("/category", {
          category: id,
        });

        console.log("response:", response.data.data);
        // const articleJson = response.data.data;
        // const jsonLength = Object.keys(articleJson).length;

        // for(var i = 0; i < jsonLength; i++){
        //     setHeadlineList( prevArray => [...prevArray, articleJson[i].headline])
        //     setCategoryList( prevArray => [...prevArray, articleJson[i].category])
        //     setSummaryList( prevArray => [...prevArray, articleJson[i].summary])
        // }
        setArticles(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const getAuthorName = async (writer_id) => {
  //     console.log("RUNNING AUTHOR");
  //     console.log(writer_id)
  //     try {
  //         const response = await ArticleAPI.post("/find", {
  //             writer_id: writer_id
  //         })

  //         console.log("response:", response.data.data)
  //         setArticles(response.data.data)

  //     } catch (error) {
  //         console.log(error)
  //     }
  // };

  return (
    <>
      <TopNavBar />
      <Container>
        <div align="center">
          <h1>{id} </h1>
        </div>
        <br />

        {articles.map((article) => {
          return (
            <>
              <hr />
              <Row>
                <ArticleComponent
                  article={article}
                  writer="Anonymous Writer"
                  type="horizontal"
                />
                {/* {getAuthorName(article.writer_id)} */}
              </Row>
            </>
          );
        })}
      </Container>

<Container style={{ width: "35%", display: "inline-block" }}>
    <Row>
        <Col>
            <Form inline>
                <FormControl type="text" placeholder="Search" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Col>
    </Row>
    <Row>
        <Col>
            <br />
        </Col>
    </Row>
    
    
    <Row>
        <Col>
            <br />
            <br />
            <h1>Recent Posts</h1>
            <br />
            <h2>Dental Care Basics</h2>
            <p>Think you know everything about proper brushing and flossing techniques? Understand the basics and what you can do to promote oral health.</p>
            <br />
            <h2>Fat Loss Done Right</h2>
            <p>Whether you’re looking to improve your overall health or simply slim down for summer, burning off excess fat can be quite challenging.</p>
            <br />
            <h2>Hyperthyroid</h2>
            <p>Hyperthyroidism is the production of too much thyroxine hormone. It can increase metabolism.
Symptoms include unexpected weight loss, rapid or irregular heartbeat, sweating, and irritability, although the elderly often experience no symptoms.</p>
            <br />
            <img src={ad300} alt="ad300" width={250} mode='fit' />

        </Col>
        
    </Row>
    <Row>
        <Col>
            <br />
        </Col>
    </Row>
    <Row>
        <Col>
            <br />
        </Col>
    </Row>
    <Row>
        <Col>
            <br />
        </Col>
    </Row>
    <Row>
        <Col>
            <br />
        </Col>
    </Row>
    <br />


</Container>
      


      
    </>
  );
};

export default ArticleCategory;
