import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext';
import { AuthContextProvider } from './context/AuthContext';
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

const App = () => {
    return (
        <AppContextProvider>
            <AuthContextProvider>
                <div>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={ Home }/>
                            <Route exact path="/register" component = { UserRegistrationForm }/>
                            <ProtectedRoute exact path="/login" component={ Login }/>
                            <Route exact path="/search" component={ Search }/>
                            <Route path="/results" component={ SearchResults }/>
                            <ProtectedRoute exact path="/doctor-dashboard/:doctorID" component = { DoctorDashboard } requiredRole="Doctor" />
                            <Route path="/leaveReview/:id">
                                <Review url={window.location.href}/>
                            </Route>
                            <Route path="/writer-dashboard/:id" component = { WriterDashboard }/>
                            <Route path="/article/:id" component = { Article } />
                        </Switch>
                    </Router>
                </div>
            </AuthContextProvider>
        </AppContextProvider>
    )
};

export default App;