import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import queryString from "query-string";
import ArticleAPI from "../apis/ArticleAPI";
import { Container, Row, Col, Card, Form, FormControl, Button, Image, Badge, Pagination } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";
import TopNavBar from "../components/TopNavBar";
import ad300 from "../components/ads/ad300.jpg";
import SocialShareButtons from "../components/SocialShareButtons";
import ArticleComponent from "../components/ArticleComponent";
import "bootstrap/dist/css/bootstrap.css";
import blogPage from "./BlogPage.jpg";
import AdAPI from "../apis/AdAPI";
import Footer from "../components/Footer";
import BlogSideBar from "../components/BlogSideBar";
import { useHistory } from "react-router-dom";

const Blog = (props) => {
    const [articles, setArticles] = useState([]);

    const [ads, setAds] = useState([]);
    const [ad1, setAd1] = useState({ ad_image: ad300, type: "300x600", ad_link: "/" });
    let { region } = useParams();
    const history = useHistory();

    const numResultsPerPage = 8;
    const [page, setPage] = useState(1);
    const [numOfPages, setNumPages] = useState([1]);

    const [filter, setFilter] = useState("");

    const link =
        "https://healthy-you-project.herokuapp.com/article/87918716-f71f-4548-aea3-ad0496d44c9a";

    useEffect(() => {
        const fetchData = async () => {
            try {
                var whereClause = { category: "Blog" };
                const search = props.location.search;
                const params = queryString.parse(search);
                // console.log(params);

                if (params.s == null) {
                    whereClause["filter"] = "";
                } else {
                    setFilter(params.s)
                    whereClause["filter"] = params.s;
                }
                console.log(whereClause);

                const response = await ArticleAPI.post("/category", {
                    category: whereClause.category,
                    filter: whereClause.filter,
                    currentRegion: region
                });

                console.log("response:", response.data.data)
                // const articleJson = response.data.data;
                // const jsonLength = Object.keys(articleJson).length;

                // for(var i = 0; i < jsonLength; i++){
                //     setHeadlineList( prevArray => [...prevArray, articleJson[i].headline])
                //     setCategoryList( prevArray => [...prevArray, articleJson[i].category]) 
                //     setSummaryList( prevArray => [...prevArray, articleJson[i].summary]) 
                // }
                setArticles(response.data.data)

                // console.log(typeof parseInt(params.page))
                // console.log(parseInt(params.page))
                if (parseInt(params.page) > 1) {
                    setPage(parseInt(params.page));
                }
                else {
                    setPage(1);
                }
  
                var temp = []
                for (var i = 0; i < Math.ceil(response.data.data.length / numResultsPerPage); i++) {
                  temp[i] = i + 1;
                }
                setNumPages(temp);
        
                // if user entered a number larger than total number of pages, bring them to last page
                if (parseInt(params.page) > temp.length) {
                  setPage(temp.length)
                }

            } catch (error) {
                console.log(error)
            }

            try {
                const response = await AdAPI.post("/getAdsBySize", { size: "300x600" });
                setAds(response.data.data);
                if (typeof (response.data.data[0]) == "object") {
                    setAd1(response.data.data[0]);
                }
                console.log(response.data.data);
                console.log(response.data.data[0].ad_image);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const nextPage = () => {
        if (page + 1 <= numOfPages.length) {
          changePage(page + 1)
        }
      }
    
      const prevPage = () => {
        if (page - 1 > 0) {
          changePage(page - 1)
        }
      }
    
      const firstPage = () => {
        if (page != 1) {
          changePage(1)
        }
      }
    
      const lastPage = () => {
        if (page != numOfPages.length) {
          changePage(numOfPages.length)
        }
      }
    
      const onClickPageNum = (data) => {
        changePage(data)
      }

      const changePage = (pageNum) => {
        history.push({
          pathname: "/category/Blog/" + region,
          search:
            "s=" +
            filter +
            "&page=" +
            pageNum
        });
      }

    return (
        // Return different webpage, depending on the validity of the ID provided
        <>
            <TopNavBar />
            <div align="center">
                    <h1>
                        Blog
                    </h1>
                <br />
                <Image src={blogPage} width="75%"></Image>
            </div>

            <br />

            <Container>
                <Row>
                    <Col xs={12} md={8}>

                        {articles.slice((page - 1) * numResultsPerPage, numResultsPerPage * page).map((article, index) => {

                            return (
                                <div key={index}>
                                    <hr />
                                    <Container>
                                        <Row>
                                            <ArticleComponent article={article} writer="Anonymous Writer" type="horizontal" />
                                            {/* {getAuthorName(article.writer_id)} */}
                                        </Row>
                                    </Container>
                                </div>
                            )

                        })}

                    </Col>

                    <Col xs={6} md={4}>
                       <BlogSideBar currentRegion={region} category="Blog"/>
                    </Col>
                </Row>
                <Pagination style={{ margin: 10, justifyContent:"center", display:"flex" }}>
                <Pagination.First onClick={firstPage} />
                <Pagination.Prev onClick={prevPage} />
                {(page == 1)
                    ? null
                    : (page == numOfPages.length && page-3 > 1 )
                    ? <>
                    <Pagination.Ellipsis />
                    <Pagination.Item onClick={() => onClickPageNum((page - 3))}>{page - 3}</Pagination.Item>
                    <Pagination.Item onClick={() => onClickPageNum(page - 2)}>{page - 2}</Pagination.Item>
                    <Pagination.Item onClick={() => onClickPageNum((page - 1))}>{page - 1}</Pagination.Item>
                    </>
                    : (page-3 == 1)
                    ? <>
                    <Pagination.Item onClick={() => onClickPageNum(page - 3)}>{page - 3}</Pagination.Item>
                    <Pagination.Item onClick={() => onClickPageNum(page - 2)}>{page - 2}</Pagination.Item>
                    <Pagination.Item onClick={() => onClickPageNum((page - 1))}>{page - 1}</Pagination.Item>
                    </>
                    : (page-3>0 && numOfPages.length > page)
                    ? <>
                    <Pagination.Ellipsis />
                        <Pagination.Item onClick={() => onClickPageNum(page - 3)}>{page - 3}</Pagination.Item>
                        <Pagination.Item onClick={() => onClickPageNum(page - 2)}>{page - 2}</Pagination.Item>
                        <Pagination.Item onClick={() => onClickPageNum((page - 1))}>{page - 1}</Pagination.Item>
                    </>
                    : (page-2>0 && page-1>0)
                    ? <>
                        <Pagination.Item onClick={() => onClickPageNum(page - 2)}>{page - 2}</Pagination.Item>
                        <Pagination.Item onClick={() => onClickPageNum((page - 1))}>{page - 1}</Pagination.Item>
                    </>
                    : (page > 2) ? <>
                        <Pagination.Ellipsis />
                        <Pagination.Item onClick={() => onClickPageNum(page - 1)}>{page - 1}</Pagination.Item>
                    </>
                    :
                    <>
                        <Pagination.Item onClick={() => onClickPageNum((page - 1))}>{page - 1}</Pagination.Item>
                    </>
                }
                {numOfPages.slice(page - 1, (page) + 3).map((n, index) => {
                    return (
                    <>
                        <Pagination.Item active={page == n} onClick={() => onClickPageNum(n)} key={index}>{n}</Pagination.Item>
                    </>
                    );
                })}
                {(page + 3 < numOfPages.length) ? <Pagination.Ellipsis /> : null}
                <Pagination.Next onClick={nextPage} />
                <Pagination.Last onClick={lastPage} />
                </Pagination>
            </Container>
            <br />
            <Footer />
        </>
    );
};

export default Blog;