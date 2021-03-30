import React, { useState, useContext } from 'react'
import ArticleAPI from '../apis/ArticleAPI'
import { AppContext } from '../context/AppContext';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// TODO - Update very similar to insert, just prepopulate fields and change route

export const UpdateArticleModal = (props) => {
    const { updateArticle, articleUpdateShow, setArticleUpdateShow, articleUpdateID, setArticleUpdateID, articleUpdateHeadline, setArticleUpdateHeadline, articleUpdateCategory, setArticleUpdateCategory,
        articleUpdateSummary, setArticleUpdateSummary,
        articleUpdateContent, setArticleUpdateContent,
        articleUpdateImage, setArticleUpdateImage,
        articleUpdateCaption, setArticleUpdateCaption } = useContext(AppContext);

    const [file, setFile] = useState("");

    // useEffect(() => {
    //     // Define a function fetchData that calls APIs which is then called in useEffect
    //     const fetchData = async () => {
    //         try {
    //             setArticleUpdateID(props.object.article_id);
    //             // const response = await (ArticleAPI.post("/find", {
    //             //     article_id: props.id
    //             // }));
    //             // console.log("INCOMING ARTICLE FOUND");
    //             // console.log(response.data.data)
    //             // console.log("FETCH");
    //             // console.log(response.data.data[0].headline);
    //             // console.log(response.data.debug);
    //             // setHeadline(response.data.data[0].headline);
    //             // setCategory("");
    //             // setSummary("");
    //             // setContent("");
    //             // setImage(response.data.data[0].image_data);
    //             // setCaption("");
    //         }
    //         catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchData();
    // }, []);

    const previewImage = async (e) => {
        var reader = new FileReader();

        reader.addEventListener("load", function () {
            var image = new Image();
            image.height = 100;
            image.title = "Name";
            image.src = this.result;
            document.getElementById('input-file').appendChild(image);
            setArticleUpdateImage(this.result);
            console.log(this.result);
            console.log(typeof this.result);
        }, false);

        setFile(e.target.files[0]);
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            console.log("WRITER ID");
            console.log(props.object.article_id);

            const response = await ArticleAPI.post("/update", {
                headline: articleUpdateHeadline,
                category: articleUpdateCategory,
                summary: articleUpdateSummary,
                content: articleUpdateContent,
                image: articleUpdateImage,
                caption: articleUpdateCaption,
                article_id: articleUpdateID
            })
            console.log(response.data.data)
            updateArticle(response.data.data); // TODO updateArticle
            // await removeArticle(response.data.data.article_id);
            // await addArticle(response.data.data);
        }
        catch (err) {
            console.log(err)
        }
    
        setArticleUpdateShow(false);

        console.log(document.getElementById("input-file").files[0]);
    }

    const handleClose = () => {
        setArticleUpdateShow(false);
    }
    const handleShow = async () => {
        setArticleUpdateID(props.object.article_id);
        setArticleUpdateHeadline(props.object.headline);
        setArticleUpdateCategory(props.object.category);
        setArticleUpdateSummary(props.object.summary);
        setArticleUpdateContent(props.object.content);
        setArticleUpdateImage(props.object.image_data);
        setArticleUpdateCaption(props.object.image_caption);
        setArticleUpdateShow(true);
    }
    // const handleInsert = async () => {
        // const response = await ArticleAPI.post("/delete", {
        //     article_id: articleDeleteID
        // })


    // }
    //const [practices, setPractices] = useState([]);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Update Article
            </Button>

            <Modal show={articleUpdateShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form>
                            <input
                                id="input-headline"
                                value={articleUpdateHeadline}
                                placeholder="Headline"
                                onChange={e => setArticleUpdateHeadline(e.target.value)}
                            />
                            <input
                                id="input-category"
                                value={articleUpdateCategory}
                                placeholder="Category"
                                onChange={e => setArticleUpdateCategory(e.target.value)}
                            />
                            <input
                                id="input-summary"
                                value={articleUpdateSummary}
                                placeholder="Summary"
                                onChange={e => setArticleUpdateSummary(e.target.value)}
                            />
                            <input
                                id="input-content"
                                value={articleUpdateContent}
                                placeholder="Content"
                                onChange={e => setArticleUpdateContent(e.target.value)}
                            />
                            <input
                                id="input-file"
                                name="article-image"
                                type="file"
                                onChange={e => previewImage(e)}
                            />
                            <input
                                id="input-caption"
                                value={articleUpdateCaption}
                                placeholder="Caption"
                                onChange={e => setArticleUpdateCaption(e.target.value)}
                            />

                            <img src={articleUpdateImage} alt="" width="200px" id="preview">
                            </img>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
