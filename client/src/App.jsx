import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TestContextProvider } from './context/TestContext';
import Home from "./routes/Home";
import DoctorDashboard from "./routes/DoctorDashboard";
import Review from "./routes/Review";
import Register from './routes/Register'

const App = () => {
    return (
        <TestContextProvider>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/register" component = { Register }/>
                        <Route exact path="/doctor/dashboard" component={ DoctorDashboard }/>
                        <Route path="/leaveReview/:id">
                            <Review url={window.location.href}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </TestContextProvider>
    )
};

export default App;