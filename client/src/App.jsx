import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext';
import Home from "./routes/Home";
import DoctorDashboard from "./routes/DoctorDashboard";
import Review from "./routes/Review";
import Register from './routes/Register';
import WriterDashboard from './routes/WriterDashboard';
import Article from './routes/Article';

const App = () => {
    return (
        <AppContextProvider>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/register" component = { Register }/>
                        <Route exact path="/doctorid/doctor-dashboard">
                            <DoctorDashboard
                                doctorID = "test"
                            />
                        </Route>
                        <Route path="/leaveReview/:id">
                            <Review url={window.location.href}/>
                        </Route>
                        <Route path="/writer-dashboard/:id" component = { WriterDashboard }/>
                        <Route path="/article/:id" component = { Article } />
                    </Switch>
                </Router>
            </div>
        </AppContextProvider>
    )
};

export default App;