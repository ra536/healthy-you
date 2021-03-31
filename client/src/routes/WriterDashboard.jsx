import React, { useEffect } from "react";
// import ArticleAPI from '../apis/ArticleAPI';
import { useParams } from "react-router-dom";
// import InputNewArticle from '../components/InputNewArticle';
import ArticleList from "../components/ArticleList";
// import file from './file.jpg';
import { Container } from 'react-bootstrap';
import { InsertArticleModal } from '../components/InsertArticleModal';
import 'bootstrap/dist/css/bootstrap.css';
import TopNavBar from '../components/TopNavBar';


const WriterDashboard = (props) => {
    let { id } = useParams();
    useEffect( () => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                console.log(id);
                //const response = await (ArticleAPI.get("/"));
                //console.log(response.data.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [id]);

            

  return (
      <>
    <TopNavBar />
    <Container>
    <h1>Writer Dashboard</h1>
            <br/>

      <InsertArticleModal id={id} />
      <br />
      <br />

            <ArticleList id={id}/>
        </Container>
        </>
    )
};

export default WriterDashboard;
