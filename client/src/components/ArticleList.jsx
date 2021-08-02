import React, { useEffect, useContext } from "react";
import ArticleAPI from "../apis/ArticleAPI";
import { AppContext } from "../context/AppContext";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DeleteArticleModal } from "./DeleteArticleModal";
import { UpdateArticleModal } from "./UpdateArticleModal";
import "bootstrap/dist/css/bootstrap.css";

const ArticleList = (props) => {
  const { articles, setArticles } = useContext(AppContext);
  const region = props.currentRegion;

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await ArticleAPI.post("/", {
          writer_id: props.id,
        });
        setArticles(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props.id, articles]);

  const handleRegion = (array) =>{
    if (array !== null) {
      var text = "";
      array.map((area, index) => {
        if (index === array.length - 1) {
          text = text + area;
        } else {
          text = text + area + ", ";
        }
      })
      return (text);
    }
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Headline</th>
            <th>Summary</th>
            <th>Category</th>
            <th>Regions</th>
            <th>Actions</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((articles) => {
            // let TYPED_ARRAY = new Uint8Array(articles.image_data);
            // const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
            // let base64String = btoa(String.fromCharCode(...new Uint8Array(articles.image_data)));
            // const img = new Buffer.from(articles.image_data).toString("ascii");
            return (
              <tr key={articles.article_id}>
                <td>{articles.headline}</td>
                <td> {articles.summary}</td>
                <td> {articles.category}</td>
                <td> {handleRegion(articles.region)}</td>
                <td>
                  <Link to={"/article/" + articles.article_id + "/" + region}>
                    <Button>View Article</Button>
                  </Link>{" "}
                  <UpdateArticleModal object={articles} />{" "}
                  <DeleteArticleModal
                    id={articles.article_id}
                    name={articles.headline}
                  />
                </td>
                <td>
                  <img src={articles.image_data} alt="" height="100px" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ArticleList;
