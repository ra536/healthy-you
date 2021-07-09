import React, { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Home from "./routes/Home";
import DoctorDashboard from "./routes/DoctorDashboard";
import Review from "./routes/Review";
import Registration from "./routes/Registration";
import WriterDashboard from "./routes/WriterDashboard";
import AdminDashboard from "./routes/AdminDashboard";
import Article from "./routes/Article";
import Login from "./routes/Login";
import Search from "./routes/Search";
import Results from "./routes/Results";
import ProtectedRoute from "./components/ProtectedRoute";
import DoctorProfile from "./routes/DoctorProfile";
import WriterProfile from "./routes/WriterProfile";
import { AuthContext } from "./context/AuthContext";
import LoginAPI from "./apis/LoginAPI";
import Appointment from "./routes/Appointment";
import ArticleCategory from "./routes/ArticleCategory";
import ReviewSuccess from "./routes/ReviewSuccess";
import Blog from "./routes/Blog";
import UserDashboard from "./routes/UserDashboard";
import Author from "./routes/ArticlesBy";
import Category from "./routes/Category";
import LatestArticles from "./routes/LatestArticles";
import ContactUs from "./routes/ContactUs";
import Subscribe from "./routes/SubscriberForm";
import AboutUs from "./routes/AboutUs";

const App = () => {
  const { loggedIn, setLoggedIn, setRole, setId } = useContext(AuthContext);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await LoginAPI.get("/user", {
          withCredentials: true,
        });
        console.log(response.data.role);
        if (Object.keys(response.data).length > 0) {
          setLoggedIn(true);
          setRole(response.data.role);
          if (response.data.role === "Doctor") {
            setId(response.data.doctor_id);
          } else if (response.data.role === "Writer") {
            setId(response.data.writer_id);
          } else if(response.data.role === "User"){
            setId(response.data.user_id);
          }
        } else {
          setLoggedIn(false);
          setRole("None");
          setId(null);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [setLoggedIn, setRole, setId]);

  return (
    <AppContextProvider>
      <div>
        <Switch>
          <Route exact path="/register" component={Registration} />
          <Route exact path="/login" component={Login} loggedIn={loggedIn} />
          <Route exact path="/search" component={Search} />
          <Route path="/results" component={Results} />
          <Route path="/doctor-profile/:doctorID" component={DoctorProfile} />
          <Route path="/writer-profile/:writerID" component={WriterProfile} />
          <ProtectedRoute
            path="/doctor-dashboard/:doctorID"
            component={DoctorDashboard}
            requiredRoles={["Doctor"]}
          />
          <ProtectedRoute
            path="/admin-dashboard/:adminID"
            component={AdminDashboard}
            requiredRoles={["Admin"]}
          />
          <ProtectedRoute
            path="/user-dashboard/:userID"
            component={UserDashboard}
            requiredRoles={["User"]}
          />
          <Route path="/leaveReview/:id">
            <Review url={window.location.href} />
          </Route>
          <ProtectedRoute
            path="/writer-dashboard/:id"
            component={WriterDashboard}
            requiredRoles={["Writer"]}
          />{" "}
          <Route path="/article/:id" component={Article} />
          <ProtectedRoute 
            path="/book-appointment/:doctorID" 
            component={Appointment} 
            requiredRoles={["User", "Admin", "Doctor", "Writer"]}
          />
          <Route exact path="/about-us" component={AboutUs} /> 
          <Route exact path="/category/Blog/:region" component={Blog} />
          <Route path="/category/:id/:region" component={Category} />
          <Route path="/reviewSuccess" component={ReviewSuccess} />
          <Route path="/author/:id/:count" component={Author}/>
          <Route path="/sameCategory/:id/:count" component={ArticleCategory}/>
          <Route path="/LatestArticles/:count/:region" component={LatestArticles}/>
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/subscribe" component={Subscribe}/>
		  <Route exact path="/:region" component={Home} />
		  <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </AppContextProvider>
  );
};

export default App;
