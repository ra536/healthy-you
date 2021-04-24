import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [tests, setTests] = useState([]);

  //updates state with new array when adding a test object
  //this is to have the client render a new test object automatically without having to refresh page
  const addTest = (test) => {
    setTests([...tests, test]);
  };

  // Practice List context
  const [practices, setPractices] = useState([]);

  const addPractice = (practice) => {
    setPractices([...practices, practice]);
  };

  const [specialties, setSpecialties] = useState([]);

  const addSpecialty = (specialty) => {
    setSpecialties([...specialties, specialty]);
  };

  const removeSpecialty = (specialty) => {
    setSpecialties(specialties.filter((item) => item !== specialty));
  };

  const [results, setResults] = useState([]);
  const addResult = (result) => {
    setResults([...results, result]);
  };

  const [articles, setArticles] = useState([]);

  const addArticle = (article) => {
    setArticles([...articles, article]);
  };

  const removeArticle = (articleID) => {
    setArticles(articles.filter((item) => item.article_id !== articleID));
  };

  const updateArticle = (article) => {
    // setArticles(articles.filter(item => item.article_id !== article.article_id));
    // setArticles([...articles, article]);
    // console.log("UPDATING");
    // const idx = articles.find(item => item === article);
    // const newArticles = [...articles];
    // newArticles[idx] = article;
    // console.log(newArticles[idx]);
    // console.log(newArticles);
    // setArticles(newArticles); // Data transferring, just array not mutable...
  };

  const [categories, setCategories] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const removeCategory = (category) => {
    setCategories(categories.filter((item) => item !== category));
  };

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
    <AppContext.Provider
      value={{
        tests,
        setTests,
        addTest,
        practices,
        setPractices,
        addPractice,
        articles,
        setArticles,
        addArticle,
        removeArticle,
        updateArticle,
        articleDeleteShow,
        setArticleDeleteShow,
        articleDeleteHeadline,
        setArticleDeleteHeadline,
        articleDeleteID,
        setArticleDeleteID,
        articleInsertShow,
        setArticleInsertShow,
        articleUpdateID,
        setArticleUpdateID,
        articleUpdateShow,
        setArticleUpdateShow,
        articleUpdateHeadline,
        setArticleUpdateHeadline,
        articleUpdateCategory,
        setArticleUpdateCategory,
        articleUpdateSummary,
        setArticleUpdateSummary,
        articleUpdateContent,
        setArticleUpdateContent,
        articleUpdateImage,
        setArticleUpdateImage,
        articleUpdateCaption,
        setArticleUpdateCaption,
        results,
        setResults,
        addResult,
        specialties,
        setSpecialties,
        addSpecialty,
        removeSpecialty,
        categories,
        setCategories,
        addCategory,
        removeCategory,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

// When fetching data from the backend it is a good idea to store the data in a context API rather then local state
// A context API allows for data to be passed down to every component automatically rather than having components fetch data through props or lifting state
