import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TestContextProvider } from './context/TestContext';
import Home from "./routes/Home";
import Review from "./routes/Review";
import Appointments from "./routes/Appointments";
import Blog from "./routes/Blog";
import DoctorProfile from "./routes/DoctorProfile";
import DoctorReview from "./routes/DoctorReview";

const App = () => {
    return (
        <TestContextProvider>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/doctor" component={ DoctorProfile }/>
						<Route exact path="/DoctorReview" component={ DoctorReview }/>
                        <Route path="/leaveReview/:id">
                            <Review url={window.location.href}/>
                        </Route>
                        <Route exact path="/appt" component={ Appointments }/>
                        <Route exact path="/blog" component={ Blog }/>
                    </Switch>
                </Router>
            </div>
        </TestContextProvider>
    )
};

export default App;