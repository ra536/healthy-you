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
                        return (
                            <li key={articles.article_id}>
                                ID: {articles.article_id} <br />
                                HEADLINE: { articles.headline } <br />
                                SUMMARY: { articles.summary } <br />
                                CONTENT: { articles.content } <br />
                                CATEGORY: { articles.category } <br /><br />
                            </li>
                        )
                    })
            }
        </div>
    )
}

export default ArticleList;