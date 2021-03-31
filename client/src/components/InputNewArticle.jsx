import React, { useContext, useState } from 'react'
import ArticleAPI from '../apis/ArticleAPI'
import { AppContext } from '../context/AppContext';
<<<<<<< HEAD
import axios from 'axios';
=======
//import axios from 'axios';
>>>>>>> dc462a2de83cf2fb17bf561471f72eb53dd3b668


//Lets user input a test object into backend db
const InputNewArticle = (props) => {

    const { addArticle } = useContext(AppContext);

    const [headline, setHeadline] = useState("");
    const [category, setCategory] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(""); // image link
    const [caption, setCaption] = useState("");
    
    const [file, setFile] = useState("");

    // const uploadFile = () => {
    //     const formData = new FormData();        
    //     formData.append('file', file); // appending file
    //     formData.append('name', 'test');
    //     axios.post('http://localhost:8080/upload', formData
    //     ).then(res => {
    //         console.log(res);
    //         // getFile({ name: res.data.name,
    //         //          path: 'http://localhost:8080' + res.data.path
    //         //        })
    //     }).catch(err => console.log(err))
    // }

    const previewImage = async (e) => {
        var reader = new FileReader();
        
        reader.addEventListener("load", function() {
            var image = new Image();
            image.height = 100;
            image.title = "Name";
            image.src = this.result;
            document.getElementById('input-file').appendChild(image);
            setImage(this.result);
            console.log(this.result);
            console.log(typeof this.result);
        }, false);

        setFile(e.target.files[0]);
        reader.readAsDataURL(e.target.files[0]);
    }

    // const uploadImage = async (e) => {
    //     let imageFormObj = new FormData();

    //     imageFormObj.append("image_link", "multer-image-" + Date.now());

    //     // stores a readable instance of 
    //     // the image being uploaded using multer
    //     setImage(URL.createObjectURL(e.target.files[0]));

    //     axios.post(`http://localhost:3000/uploadmulter`, imageFormObj)
    //         .then((data) => {
    //             if (data.data.success) {
    //                 alert("Image has been successfully uploaded using multer");
    //                 // this.setDefaultImage("multer");
    //             }
    //         })
    //         .catch((err) => {
    //             alert("Error while uploading image using multer");
    //             // this.setDefaultImage("multer");
    //         });
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            //upload the image
            // const fileUpload = await ArticleAPI.post("/upload", {
            //     image: image
            // })
            // console.log(fileUpload.data.data);

            // const formData = new FormData();
            // formData.append("caption", caption);
            // formData.append("image", image);
            // formData.append("image",file);
            // console.log(formData);
            // submitForm("multipart/form-data", formData, (msg) => console.log(msg));
            
            // uploadFile();
            console.log(file);
            console.log(file.name);
            console.log(image);
            console.log("WRITER ID");
            console.log(props.id);

            const response = await ArticleAPI.post("/create", {
                headline: headline,
                category: category,
                summary: summary,
                content: content,
                image: image,
                caption: caption,
                writer_id: props.id
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
        setImage("");
        setCaption("");

        console.log(document.getElementById("input-file").files[0]);
    }
    //encType="multipart/form-data" method="POST"

    return (
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
            <input
                id="input-file"
                name="article-image"
                type="file"
                onChange={e => previewImage(e)}
            />
            <input
                id="input-caption"
                value={caption}
                placeholder="Caption"
                onChange={e => setCaption(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
                Insert New Article
            </button>
            <img src={image} width="200px" id="preview">
            </img>
        </form>
    )
}

export default InputNewArticle;