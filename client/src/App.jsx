import React, { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Home from "./routes/Home";
import DoctorDashboard from "./routes/DoctorDashboard";
import Review from "./routes/Review";
import Registration from "./routes/Registration";
import WriterDashboard from "./routes/WriterDashboard";
import Article from "./routes/Article";
import Login from "./routes/Login";
import Search from "./routes/Search";
import SearchResults from "./components/SearchResults";
import ProtectedRoute from "./components/ProtectedRoute";
import DoctorProfile from "./routes/DoctorProfile";
import { AuthContext } from "./context/AuthContext";
import LoginAPI from "./apis/LoginAPI";
import { Button } from "react-bootstrap";
import Appointment from "./routes/Appointment";
import ArticleCategory from './routes/Category';
import Blog from './routes/Blog';

const App = () => {
  const { loggedIn, setLoggedIn, setRole } = useContext(AuthContext);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await LoginAPI.get("/user", {
          withCredentials: true,
        });
        console.log(Object.keys(response.data).length);
        if (Object.keys(response.data).length > 0) {
          setLoggedIn(true);
          setRole(response.data.role);
        } else {
          setLoggedIn(false);
          setRole("None");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [setLoggedIn, setRole]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginAPI.get("/logout", {
        withCredentials: true,
      });
      console.log(response);
      setLoggedIn(false);
      setRole(null);
    } catch (err) {
      console.log(err);
    }
  };
  return loggedIn ? (
    <AppContextProvider>
      <div>
        <Button onClick={handleClick}>Logout</Button>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/login" component={Login} loggedIn={loggedIn} />
          <Route exact path="/search" component={Search} />
          <Route path="/results" component={SearchResults} />
          <Route path="/doctor-profile/:doctorID" component={DoctorProfile} />
          <ProtectedRoute
            path="/doctor-dashboard/:doctorID"
            component={DoctorDashboard}
            requiredRoles={["Doctor"]}
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
          <Route path="/book-appointment" component={Appointment} />
          <Route exact path="/category/Blog" component = { Blog } />
          <Route path="/category/:id" component={ArticleCategory} />
        </Switch>
      </div>
    </AppContextProvider>
  ) : (
    <AppContextProvider>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/login" component={Login} loggedIn={loggedIn} />
          <Route exact path="/search" component={Search} />
          <Route path="/results" component={SearchResults} />
          <Route path="/doctor-profile/:doctorID" component={DoctorProfile} />
          <ProtectedRoute
            path="/doctor-dashboard/:doctorID"
            component={DoctorDashboard}
            requiredRoles={["Doctor"]}
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
          <Route path="/book-appointment" component={Appointment} />
          <Route exact path="/category/Blog" component = { Blog } />
          <Route path="/category/:id" component={ArticleCategory} />
        </Switch>
      </div>
    </AppContextProvider>
  );
};

export default App;
