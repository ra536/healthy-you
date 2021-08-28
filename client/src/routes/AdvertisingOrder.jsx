import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Container,
  Row,
  Col,
  Form,
  Jumbotron,
  Carousel,
  Card,
  Image,
  Badge,
  Button,
} from "react-bootstrap";
import ArticleAPI from "../apis/ArticleAPI";
import FeaturedAPI from "../apis/FeaturedAPI";
import { useHistory } from "react-router-dom";

// bootstrap styles library (gives automatic styling)
import "bootstrap/dist/css/bootstrap.css";
import TopNavBar from "../components/TopNavBar";
import ArticleComponent from "../components/ArticleComponent";
import HealthGuide from "../components/HealthGuide";
import AdvertisingSideBar from "../components/AdvertisingSideBar";
import TopFeaturedAds from "../components/TopFeaturedAds";
import AdBreak from "../components/AdBreak";
import CategoryCarousel from "../components/CategoryCarousel";
import food_pic from "./food_pic_front.jpg";
import food_pic2 from "./food_pic_front.jpg";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Advertising = () => {
  ///// Look up how to set parameter default
  let { region } = useParams(); //Redirect to default if region is null

  const history = useHistory();
  const handleSubmit = () => {
    history.push("/order/" + region);
  };

  // Store the data retrieved from backend API into context
  const { loggedIn, role } = useContext(AuthContext);
  //const { featuredArticles, setFeaturedArticles } = useContext(ArticleContext);
  const [featuredArticle, setFeaturedArticle] = useState("");
  const [featuredAuthor, setFeaturedAuthor] = useState("");

  const [featuredArticle2, setFeaturedArticle2] = useState("");
  const [featuredAuthor2, setFeaturedAuthor2] = useState("");

  const [featuredArticle3, setFeaturedArticle3] = useState("");
  const [featuredAuthor3, setFeaturedAuthor3] = useState("");

  const [latestArticles, setLatestArticles] = useState([]);

  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await ArticleAPI.get("/random");
        setFeaturedArticle(response.data.data);
        setFeaturedAuthor(
          response.data.writer.firstName + " " + response.data.writer.lastName
        );
      } catch (err) {
        console.log(err);
      }
      try {
        const response = await ArticleAPI.get("/random");
        setFeaturedArticle2(response.data.data);
        setFeaturedAuthor2(
          response.data.writer.firstName + " " + response.data.writer.lastName
        );
      } catch (err) {
        console.log(err);
      }
      try {
        const response = await ArticleAPI.get("/random");
        setFeaturedArticle3(response.data.data);
        setFeaturedAuthor3(
          response.data.writer.firstName + " " + response.data.writer.lastName
        );
      } catch (err) {
        console.log(err);
      }
      try {
        const response = await ArticleAPI.post("/latest", {
          numOfArticles: 8,
          currentRegion: region,
        });
        setLatestArticles(response.data.data);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await FeaturedAPI.post("/findFeaturedArticles", {});
        setFeaturedArticles(response.data.data);
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await ArticleAPI.post("/mostViewed", {
          numOfArticles: 3,
          region: region,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <TopNavBar currentRegion={region} />
        <Footer currentRegion={region} />
      </div>
    </div>
  );
};

export default Advertising;
