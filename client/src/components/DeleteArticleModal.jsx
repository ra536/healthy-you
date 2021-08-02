import React, { useEffect, useContext } from "react";
import ArticleAPI from "../apis/ArticleAPI";
import { AppContext } from "../context/AppContext";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export const DeleteArticleModal = (props) => {
  const {
    removeArticle,
    articleDeleteShow,
    setArticleDeleteShow,
    articleDeleteHeadline,
    setArticleDeleteHeadline,
    articleDeleteID,
    setArticleDeleteID,
  } = useContext(AppContext);

  const handleClose = () => {
    setArticleDeleteShow(false);
  };
  const handleShow = () => {
    setArticleDeleteHeadline(props.name);
    setArticleDeleteID(props.id);
    setArticleDeleteShow(true);
  };
  const handleDelete = async () => {
    const response = await ArticleAPI.post("/delete", {
      article_id: articleDeleteID,
    });
    removeArticle(articleDeleteID);
    setArticleDeleteShow(false);
  };

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {};
    fetchData();
  }, []);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        [-] Delete Article
      </Button>

      <Modal show={articleDeleteShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Article?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the article titled: <br />"
          {articleDeleteHeadline}"<br />
          {articleDeleteID}
          <br />
          <br />
          This will <b>permanently</b> delete the article from your account.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
