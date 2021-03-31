import React, { useState, createContext } from 'react';

export const ArticleContext = createContext();

export const ArticleContextProvider = props => {

    const [topArticles, setTopArticles] = useState([]);
    const [featuredArticles, setFeaturedArticles] = useState([]);

    return (
        <ArticleContext.Provider value={
            {
                topArticles, setTopArticles,
                featuredArticles, setFeaturedArticles,
            }}>
            { props.children }
        </ArticleContext.Provider>
    )
}