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

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        console.log(props.id);
        const response = await ArticleAPI.post("/", {
          writer_id: props.id,
        });
        console.log("INCOMING ARTICLES");
        console.log(response.data.data);
        setArticles(response.data.data);
        console.log(response.data.debug);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props.id, articles]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Headline</th>
            <th>Summary</th>
            <th>Category</th>
            <th>Actions</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((articles) => {
            console.log(articles);
            // let TYPED_ARRAY = new Uint8Array(articles.image_data);
            // const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
            // let base64String = btoa(String.fromCharCode(...new Uint8Array(articles.image_data)));
            // console.log(articles.image_data);
            // const img = new Buffer.from(articles.image_data).toString("ascii");
            // console.log(img);
            // console.log(base64String);
            return (
              <tr key={articles.article_id}>
                <td>{articles.headline}</td>
                <td> {articles.summary}</td>
                <td> {articles.category}</td>
                <td>
                  <Link to={"/article/" + articles.article_id}>
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
