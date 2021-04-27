import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleAPI from "../apis/ArticleAPI";
import { Container, Row, Col } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";
import TopNavBar from "../components/TopNavBar";
import SocialShareButtons from "../components/SocialShareButtons";
import "bootstrap/dist/css/bootstrap.css";
import HomeSideBar from "../components/HomeSideBar";
import Footer from "../components/Footer";
import ListGroup from 'react-bootstrap/ListGroup'
import ArticleComponent from "../components/ArticleComponent";

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
  const [writerID, setWriterID] = useState(null);
  const [numViews, setNumViews] = useState(0);
  const [link, setLink] = useState(null);

  // const link =
  //   "https://healthy-you-project.herokuapp.com/article/87918716-f71f-4548-aea3-ad0496d44c9a";
  const [sameAuthor, setSameAuthor] = useState([]);
  const [sameCategory, setSameCategory] = useState([]);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await ArticleAPI.post("/find", {
          article_id: id,
        });

        const views = await ArticleAPI.post("/pageView", {
          id: id,
        });

        const relatedAuthor = await ArticleAPI.post("/author", {
          article_id: id,
          numOfArticles: 3
        })

        const relatedCategory = await ArticleAPI.post("/sameCategory", {
          article_id: id,
          numOfArticles: 3
        })

        console.log("data", views.data.data[0])

        setHeadline(response.data.data[0].headline);
        setCategory(response.data.data[0].category);
        setSummary(response.data.data[0].summary);
        setContent(response.data.data[0].content);
        setImage(response.data.data[0].image_data);
        setCaption(response.data.data[0].image_caption);
        setPublishDate(response.data.data[0].createdAt);
        setNumViews(response.data.data[0].page_views);
        // setAuthor(
        //   response.data.writer.firstName + " " + response.data.writer.lastName
        // );
        setWriterID(response.data.data[0].writer_id);
        setLink("https://healthy-you-project.herokuapp.com/article/" + id);
        console.log(response.data.data[0]);


        setSameAuthor(relatedAuthor.data.data);
        setSameCategory(relatedCategory.data.data);

      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  console.log(summary); // Make use of unused summary variable

  return (
    // Return different webpage, depending on the validity of the ID provided
    <>
      <TopNavBar />
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <h1>{headline}</h1>
            Category: <a href={"/category/" + category}>{category}</a>
            <br />
            <br />
            <a href={"/writer-profile/" + writerID}>{author}</a> |{" "}
            <Moment format="dddd MMMM Do, YYYY [at] h:mm A">
              {publishDate}
            </Moment>{" "}
            | {numViews} views
            <br />
            <br />
            <SocialShareButtons link={link} />
            <br />
            <br />
            <img src={image} width="100%" alt="" />
            <p>
              <i>Above: {caption}</i>
            </p>
            <br />
            <p>
              {content.split("\n").map((i, key) => {
                return <p key={key}>{i}</p>;
              })}
            </p>
            <br />
            <br />
            <hr />
            <h3>Other {category} Articles</h3>
            {sameCategory.map((art) => {
              return (
                <Container>
                  <Row>


                    <ArticleComponent type="horizontal" article={art} />

                  </Row>
                  <br />
                </Container>
              )
            })}
            <hr />
            <h3>Articles from the Same Author</h3>
            {sameAuthor.map((art) => {
              return (
                <Container>
                  <Row>


                    <ArticleComponent type="horizontal" article={art} />

                  </Row>
                  <br />
                </Container>
              )
            })}
            
            <br />
          </Col>
          <Col xs={6} md={4}>
            <br />
            <HomeSideBar />
            <br />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Article;
