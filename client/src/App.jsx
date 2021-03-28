import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext';
import Home from "./routes/Home";
import DoctorDashboard from "./routes/DoctorDashboard";
import Review from "./routes/Review";
import UserRegistrationForm from './routes/UserRegistration'
import WriterDashboard from './routes/WriterDashboard';
import Article from './routes/Article';
import Login from "./routes/Login";
import Search from './routes/Search'
import SearchResults from './components/SearchResults'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContext } from './context/AuthContext'
import LoginAPI from './apis/LoginAPI'

const App = () => {
    const { loggedIn, setLoggedIn, role, setRole } = useContext(AuthContext);

    useEffect(() => {
        // Define a function fetchData that calls APIs which is then called in useEffect
        const fetchData = async () => {
            try {
                const response = await (LoginAPI.get("/user", {
                    withCredentials: true
                }));
                console.log(Object.keys(response.data).length)
                if (Object.keys(response.data).length > 0) {
                    setLoggedIn(true);
                    setRole(response.data.role)
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);

    return (
        <AppContextProvider>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <ProtectedRoute exact path="/register" component = { UserRegistrationForm } role={ role }/>
                        <Route exact path="/login" component={ Login } loggedIn={ loggedIn }/>
                        <Route exact path="/search" component={ Search }/>
                        <Route path="/results" component={ SearchResults }/>
                        <ProtectedRoute exact path="/doctor-dashboard/:doctorID" component = { DoctorDashboard } requiredRole="Doctor" role={ role } />
                        <Route path="/leaveReview/:id">
                            <Review url={window.location.href}/>
                        </Route>
                        <ProtectedRoute path="/writer-dashboard/:id" component = { WriterDashboard } requiredRole="Writer" role={ role } />                            <Route path="/article/:id" component = { Article } />
                    </Switch>
                </Router>
            </div>
        </AppContextProvider>
    )
};

export default App;