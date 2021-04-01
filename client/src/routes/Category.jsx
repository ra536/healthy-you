import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ArticleAPI from '../apis/ArticleAPI';
import { ListGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

const ArticleCategory = (props) =>{
    let { id } = useParams();

    const [headlineList, setHeadlineList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [summaryList, setSummaryList] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ArticleAPI.post("/category", {
                    category: id
                })

                console.log("response:", response.data.data)
                const articleJson = response.data.data;
                const jsonLength = Object.keys(articleJson).length;

                for(var i = 0; i < jsonLength; i++){
                    setHeadlineList( prevArray => [...prevArray, articleJson[i].headline])
                    setCategoryList( prevArray => [...prevArray, articleJson[i].category]) 
                    setSummaryList( prevArray => [...prevArray, articleJson[i].summary]) 
                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Article Category: {id} </h1>

            <div>
                {headlineList.map((headline, index) => {

                    return(
                        <ListGroup>
                            <ListGroup.Item>
                                {headline}
                                <br/>
                                {categoryList[index]}
                                <br/>
                                {summaryList[index]}
                            </ListGroup.Item>
                        </ListGroup>
                    )

                })}
            </div>

        </div>
    )
}

export default ArticleCategory;
