import React, { useContext, useState } from 'react'
import ArticleAPI from '../apis/ArticleAPI'
import { AppContext } from '../context/AppContext';


//Lets user input a test object into backend db
const InputNewArticle = (props) => {

    const { articles, setArticle, addArticle } = useContext(AppContext);

    const [headline, setHeadline] = useState("");
    const [category, setCategory] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await ArticleAPI.post("/create", {
                headline: headline,
                category: category,
                summary: summary,
                content: content,
                // doctorID: props.doctorID
            }) 
            console.log(response.data.data)
            addArticle(response.data.data);
        }
        catch (err) {
            console.log(err)
        }
        setHeadline("");
        setCategory("");
        setSummary("");
        setContent("");

        
    }

    return(
        <form>
            <input 
                id="input-headline" 
                value={headline} 
                placeholder="Headline" 
                onChange={e => setHeadline(e.target.value)} 
            />
            <input 
                id="input-category" 
                value={category} 
                placeholder="Category" 
                onChange={e => setCategory(e.target.value)} 
            />
            <input 
                id="input-summary" 
                value={summary} 
                placeholder="Summary" 
                onChange={e => setSummary(e.target.value)} 
            />
            <input 
                id="input-content" 
                value={content} 
                placeholder="Content" 
                onChange={e => setContent(e.target.value)} 
            />
            <button type="submit" onClick={handleSubmit}>
                Insert New Article
            </button>
        </form>
    )
}

export default InputNewArticle;