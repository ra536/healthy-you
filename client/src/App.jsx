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
import HomeDefault from "./routes/HomeDefault";
import Advertising from "./routes/Advertising";
import Order from "./routes/Order";

const App = () => {
  const { loggedIn, setLoggedIn, setRole, setId } = useContext(AuthContext);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await LoginAPI.get("/user", {
          withCredentials: true,
        });
        if (Object.keys(response.data).length > 0) {
          setLoggedIn(true);
          setRole(response.data.role);
          if (response.data.role === "Doctor") {
            setId(response.data.doctor_id);
          } else if (response.data.role === "Writer") {
            setId(response.data.writer_id);
          } else if (response.data.role === "User") {
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
          <Route exact path="/register/:region" component={Registration} />
          <Route
            exact
            path="/login/:region"
            component={Login}
            loggedIn={loggedIn}
          />
          <Route exact path="/search/:region" component={Search} />
          <Route path="/results/:region" component={Results} />
          <Route path="/advertising/:region" component={Advertising} />
          <ProtectedRoute
            path="/order/:region"
            component={Order}
            requiredRoles={["Admin"]}
          />
          <Route
            path="/doctor-profile/:doctorID/:region"
            component={DoctorProfile}
          />
          <Route
            path="/writer-profile/:writerID/:region"
            component={WriterProfile}
          />
          <ProtectedRoute
            path="/doctor-dashboard/:doctorID/:region"
            component={DoctorDashboard}
            requiredRoles={["Doctor"]}
          />
          <ProtectedRoute
            path="/admin-dashboard/:adminID/:region"
            component={AdminDashboard}
            requiredRoles={["Admin"]}
          />
          <ProtectedRoute
            path="/user-dashboard/:userID/:region"
            component={UserDashboard}
            requiredRoles={["User"]}
          />
          <Route path="/leaveReview/:id/:region">
            <Review url={window.location.href} />
          </Route>
          <ProtectedRoute
            path="/writer-dashboard/:id/:region"
            component={WriterDashboard}
            requiredRoles={["Writer"]}
          />{" "}
          <Route path="/article/:id/:region" component={Article} />
          <ProtectedRoute
            path="/book-appointment/:doctorID/:region"
            component={Appointment}
            requiredRoles={["User", "Admin", "Doctor", "Writer"]}
          />
          <Route exact path="/about-us/:region" component={AboutUs} />
          <Route exact path="/category/Blog/:region" component={Blog} />
          <Route path="/category/:id/:region" component={Category} />
          <Route path="/reviewSuccess/:region" component={ReviewSuccess} />
          <Route path="/author/:id/:count/:region" component={Author} />
          <Route
            path="/sameCategory/:id/:count/:region"
            component={ArticleCategory}
          />
          <Route
            path="/LatestArticles/:count/:region"
            component={LatestArticles}
          />
          <Route path="/contact-us/:region" component={ContactUs} />
          <Route path="/subscribe/:region" component={Subscribe} />
          <Route exact path="/:region" component={Home} />
          <Route exact path="/" component={HomeDefault} />
        </Switch>
      </div>
    </AppContextProvider>
  );
};

export default App;
