import React, { useEffect, useState, useContext } from "react";
import ArticleAPI from "../apis/ArticleAPI";
import { AppContext } from "../context/AppContext";
import { Button, FormControl, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export const InsertArticleModal = (props) => {
  const { addArticle, articleInsertShow, setArticleInsertShow } = useContext(
    AppContext
  );

  const [headline, setHeadline] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const [file, setFile] = useState("");

  const previewImage = async (e) => {
    var reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        var image = new Image();
        image.height = 200;
        image.width = 300;
        image.title = "Name";
        image.src = this.result;
        document.getElementById("input-file").appendChild(image);
        setImage(this.result);
      },
      false
    );

    setFile(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ArticleAPI.post("/create", {
        headline: headline,
        category: category,
        summary: summary,
        content: content,
        image: image,
        caption: caption,
        writer_id: props.id,
        // doctorID: props.doctorID
      });
      addArticle(response.data.data);
    } catch (err) {
      console.log(err);
    }
    setHeadline("");
    setCategory("");
    setSummary("");
    setContent("");
    setImage("");
    setCaption("");

    setArticleInsertShow(false);

    //console.log(document.getElementById("input-file").files[0]);
  };

  const handleClose = () => {
    setArticleInsertShow(false);
  };
  const handleShow = () => {
    setArticleInsertShow(true);
  };
  // const handleInsert = async () => {
  //     // const response = await ArticleAPI.post("/delete", {
  //     //     article_id: articleDeleteID
  //     // })

  // }
  //const [practices, setPractices] = useState([]);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {};
    fetchData();
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        [+] Insert Article
      </Button>
      
      <Modal show={articleInsertShow} 
      onHide={handleClose}
      size = "xl"
      
      >
        
        <Modal.Header closeButton>
          <Modal.Title>Insert Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            
            
            <input
              style={{width: "300px"}}
              id="input-headline"
              value={headline}
              placeholder="Headline"
              onChange={(e) => setHeadline(e.target.value)}
            />
            {' '}
            <input
              style={{width: "150px"}}
              id="input-category"
              value={category}
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
            />
            {' '}
            <input
              style={{width: "300px"}}
              id="input-summary"
              value={summary}
              placeholder="Summary"
              onChange={(e) => setSummary(e.target.value)}
            />
            {' '}

            {' '}
            <br />
            <br/>
            <br/>
            <textarea
              id="input-content"
              width="300%"
              style = {{width: "1100px"}}
              value={content}
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
            />
            {' '}

            {' '}
            <br/>
            <br/>
            <input
              style={{width: "250px"}}
              id="input-caption"
              value={caption}
              placeholder="Caption"
              onChange={(e) => setCaption(e.target.value)}
              />

            <br/>

            <br/>
            
            <input
              id="input-file"
              name="article-image"
              type="file"
              onChange={(e) => previewImage(e)}
            />

            <img src={image} alt="" width="200px" id="preview"></img>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Insert
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
};
