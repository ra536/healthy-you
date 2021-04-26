import React, { useEffect, useState, useContext } from "react";
import ad300 from "../components/ads/ad300.jpg";
import { useParams } from "react-router-dom";
import ArticleAPI from "../apis/ArticleAPI";
import { ListGroup, Container, Row, Badge, Col, Image } from "react-bootstrap";
import BlogSideBar from "../components/BlogSideBar";
import ImageAPI from "../apis/ImageAPI";

import "bootstrap/dist/css/bootstrap.css";
import ArticleComponent from "../components/ArticleComponent";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import sky from "./Sky.jpg";

const ArticleCategory = (props) => {
  let { id } = useParams();

  const [articles, setArticles] = useState([]);
  const [image, setImage] = useState(sky);

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

      try {
        const response = await ImageAPI.post("/getCategoryImage", {
          category: id,
        });
        setImage(response.data.data);
        console.log(response.data.data);

      } catch (err){
        console.log(err);
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
      <div align="center">
        <Badge variant="primary">

          <h1>
            &nbsp;
          {id}
          &nbsp;
          </h1>

        </Badge>
        <br /><br />
        <Image src={image} width="75%"></Image>

      </div>
      <br />




      <Container>
        <Row>
          <Col xs={12} md={8}>



            {articles.map((article) => {
              return (
                <>
                  <hr />
                  <Container>
                    <Row>
                      <ArticleComponent
                        article={article}
                        writer="Anonymous Writer"
                        type="horizontal"
                      />
                    </Row>
                  </Container>
                </>
              );
            })}
          </Col>
          <Col xs={6} md={4}>
              <BlogSideBar />
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </>

  );
};

export default ArticleCategory;
