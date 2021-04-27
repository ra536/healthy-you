import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleAPI from "../apis/ArticleAPI";
import { Container } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";
import TopNavBar from "../components/TopNavBar";
import SocialShareButtons from "../components/SocialShareButtons";
import "bootstrap/dist/css/bootstrap.css";
import HomeSideBar from "../components/HomeSideBar";
import Footer from "../components/Footer";
import ListGroup from 'react-bootstrap/ListGroup'

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
  const [sameAuthor, setSameAuthor] = useState([]);
  const [authorLinks, setAuthorLinks] = useState([])
  const [authorImages, setAuthorImages] = useState([])
  const [sameCategory, setSameCategory] = useState([]);
  const [categoryLinks, setCategoryLinks] = useState([])
  const [categoryImages, setCategoryImages] = useState([])

  const link =
    "https://healthy-you-project.herokuapp.com/article/87918716-f71f-4548-aea3-ad0496d44c9a";

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await ArticleAPI.post("/find", {
          article_id: id,
        });

        const views = await ArticleAPI.post("/pageView",{
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

        for(var i = 0; i < (relatedAuthor.data.data.length); i++)
        {
          setSameAuthor(oldList => [...oldList, relatedAuthor.data.data[i].headline])
          setAuthorLinks(oldList => [...oldList,  "/article/" + relatedAuthor.data.data[i].article_id])
          setAuthorImages(oldList => [...oldList, relatedAuthor.data.data[i].image_data])
        }
        // setSameAuthor(relatedAuthor.data.data)
        for(var i = 0; i < (relatedCategory.data.data.length); i++)
        {
          setSameCategory(oldList => [...oldList, relatedCategory.data.data[i].headline])
          setCategoryLinks(oldList => [...oldList, "/article/" + relatedCategory.data.data[i].article_id])
          setCategoryImages(oldList => [...oldList, relatedCategory.data.data[i].image_data])
        }

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
      <Container style={{  width: "65%", display: "inline-block"  }}>
        <h1>{headline}</h1>
        Category: <a href={"/category/" + category}>{category}</a>
        <br />
        <br />
        <a href={"/writer-profile/" + writerID}>{author}</a> |{" "}
        <Moment format="dddd MMMM Do, YYYY [at] h:mm A">{publishDate}</Moment> |{" "}
        {numViews} views
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
        <br />

        <ListGroup horizontal>
          {sameAuthor.map((i,key) => {
            return( 
              <> 
                <img  src={authorImages[key]} />
                <ListGroup.Item key={key}> <a  href = {authorLinks[key]}> {i} </a> </ListGroup.Item> 
              </>
            )
          })}
        </ListGroup>
        <br />

        <ListGroup horizontal>
        {sameCategory.map((j, ckey) => {
            return (
              <> 
                <img  src={categoryImages[ckey]} />
                <ListGroup.Item key={ckey}> <a href = {categoryLinks[ckey]} > {j} </a></ListGroup.Item>
              </>
            )
          })}

        </ListGroup>

      </Container>
      <Container
          id="Right Sidebar"
          style={{ width: "35%", display: "inline-block" }}
        >
          <br /> 
          <HomeSideBar />
          <br />
        </Container>
        <Footer />   
    </>
  );
};

export default Article;
