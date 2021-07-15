import React, { useEffect, useState } from "react";
import WriterAPI from "../apis/WriterAPI";
import ArticleAPI from "../apis/ArticleAPI";
import { useParams } from "react-router-dom";
import {
  Container,
  Image,
  Row,
  Col,
  Card,
  Button,
  Accordion,
  ListGroup,
} from "react-bootstrap";
import ArticleComponent from "../components/ArticleComponent";

// import axios from "axios";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";

const WriterProfile = (props) => {
  let { writerID, region } = useParams();
  const [name, setName] = useState();
  const [cityState, setCityState] = useState();
  const [email, setEmail] = useState("");
  const [articles, setArticles] = useState([]);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await WriterAPI.post(
          "/findOne",
          {
            writer_id: writerID,
          },
          {
            withCredentials: false,
          }
        );
        console.log(response.data.data);
        setName(
          response.data.data.firstName + " " + response.data.data.lastName
        );
        setCityState(response.data.data.city + ", " + response.data.data.state);
        setEmail(response.data.data.email);
      } catch (err) {
        console.log(err);
      }
      try {
        const articleResponse = await ArticleAPI.post(
          "/findByWriterID",
          {
            writer_id: writerID,
          },
          {
            withCredentials: false,
          }
        );
        console.log(articleResponse.data);
        setArticles(articleResponse.data.data);
        setAuthor(
          articleResponse.data.writer.firstName +
            " " +
            articleResponse.data.writer.lastName
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <TopNavBar currentRegion={region}/>
      <br />
      <Row>
        <Col>
          <br></br>
          <Card.Text>TODO</Card.Text>
          <br></br>
        </Col>

        <Col>
          <Card style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {cityState}
              </Card.Subtitle>
              <br></br>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>{email}</Card.Text>
              <br />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Container style={{ width: "65%", display: "inline-block" }}>
        <br />
        <div align="left">
          <h2>{author}'s Articles</h2>
        </div>
        {articles.map((articles, index) => {
          return (
            <div>
              <Row>
                <ArticleComponent
                  article={articles}
                  currentRegion={region}
                  writer={author}
                  type="horizontal"
                />
              </Row>
              <br />
            </div>
          );
        })}
      </Container>
      <Footer currentRegion={region}/>
    </>
  );
};

export default WriterProfile;
