import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = props => {
    const [tests, setTests] = useState([])

    //updates state with new array when adding a test object
    //this is to have the client render a new test object automatically without having to refresh page
    const addTest = (test) => {
        setTests([...tests, test]);
    }

    // Practice List context
    const [practices, setPractices] = useState([]);

    const addPractice = (practice) => {
        setPractices([...practices, practice]);
    }

    const [articles, setArticles] = useState([]);

    const addArticle = (article) => {
        setArticles([...articles, article]);
    }

    const removeArticle = (articleID) => {
        setArticles(articles.filter(item => item.article_id !== articleID));
    }

    const [articleDeleteShow, setArticleDeleteShow] = useState(false);
    const [articleDeleteHeadline, setArticleDeleteHeadline] = useState("");
    const [articleDeleteID, setArticleDeleteID] = useState("");

    const [articleInsertShow, setArticleInsertShow] = useState(false);

    const [articleUpdateID, setArticleUpdateID] = useState("");
    const [articleUpdateShow, setArticleUpdateShow] = useState(false);
    const [articleUpdateHeadline, setArticleUpdateHeadline] = useState("");
    const [articleUpdateCategory, setArticleUpdateCategory] = useState("");
    const [articleUpdateSummary, setArticleUpdateSummary] = useState("");
    const [articleUpdateContent, setArticleUpdateContent] = useState("");
    const [articleUpdateImage, setArticleUpdateImage] = useState("");
    const [articleUpdateCaption, setArticleUpdateCaption] = useState("");

    return (
        <AppContext.Provider value={
            {
                tests, setTests, addTest,
                practices, setPractices, addPractice,
                articles, setArticles, addArticle, removeArticle,
                articleDeleteShow, setArticleDeleteShow,
                articleDeleteHeadline, setArticleDeleteHeadline,
                articleDeleteID, setArticleDeleteID,
                articleInsertShow, setArticleInsertShow,
                articleUpdateID, setArticleUpdateID,
                articleUpdateShow, setArticleUpdateShow,
                articleUpdateHeadline, setArticleUpdateHeadline,
                articleUpdateCategory, setArticleUpdateCategory,
                articleUpdateSummary, setArticleUpdateSummary,
                articleUpdateContent, setArticleUpdateContent,
                articleUpdateImage, setArticleUpdateImage,
                articleUpdateCaption, setArticleUpdateCaption,

            }}>
            { props.children }
        </AppContext.Provider>
    )
}

// When fetching data from the backend it is a good idea to store the data in a context API rather then local state
// A context API allows for data to be passed down to every component automatically rather than having components fetch data through props or lifting state