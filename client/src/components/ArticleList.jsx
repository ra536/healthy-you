import React, { useEffect, useState, useContext } from 'react'
import ArticleAPI from '../apis/ArticleAPI'
import { AppContext } from '../context/AppContext';

const ArticleList = (props) => {
    const { articles, setArticles } = useContext(AppContext);
    //const [practices, setPractices] = useState([]);

    useEffect( () => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (ArticleAPI.get("/", {
                    // doctorID: props.doctorID
                }));
                console.log("INCOMING ARTICLES");
                console.log(response.data.data)
                setArticles(response.data.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {articles.map(articles => {
                console.log(articles);
                // let TYPED_ARRAY = new Uint8Array(articles.image_data);
                // const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
                // let base64String = btoa(String.fromCharCode(...new Uint8Array(articles.image_data)));
                // console.log(articles.image_data);
                // const img = new Buffer.from(articles.image_data).toString("ascii");
                // console.log(img);
                // console.log(base64String);
                        return (
                            <li key={articles.article_id}>
                                ID: {articles.article_id} <br />
                                HEADLINE: { articles.headline } <br />
                                SUMMARY: { articles.summary } <br />
                                CONTENT: { articles.content } <br />
                                CATEGORY: { articles.category } <br />
                                <img height="100px" src={articles.image_data}/> <br /><br />
                            </li>
                        )
                    })
            }
        </div>
    )
}

export default ArticleList;