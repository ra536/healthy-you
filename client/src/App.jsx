import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext';
import { LoginContextProvider } from './context/LoginPersistence';
import Home from "./routes/Home";
import DoctorDashboard from "./routes/DoctorDashboard";
import Review from "./routes/Review";
import UserRegistration from './routes/UserRegistration'
import WriterDashboard from './routes/WriterDashboard';
import Article from './routes/Article';
import Login from "./routes/Login";
import Search from './routes/Search'
import SearchResults from './components/SearchResults'

const App = () => {
    return (
        <AppContextProvider>
            <LoginContextProvider>
                <div>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={ Home }/>
                            <Route exact path="/register" component = { UserRegistration }/>
                            <Route exact path="/login" component={ Login }/>
                            <Route exact path="/search" component={ Search }/>
                            <Route path="/results" component={ SearchResults }/>
                            <Route exact path="/doctor-dashboard/:doctorID" component = { DoctorDashboard }/>
                            <Route path="/leaveReview/:id">
                                <Review url={window.location.href}/>
                            </Route>
                            <Route path="/writer-dashboard/:id" component = { WriterDashboard }/>
                            <Route path="/article/:id" component = { Article } />
                        </Switch>
                    </Router>
                </div>
            </LoginContextProvider>
        </AppContextProvider>
    )
};

export default App;