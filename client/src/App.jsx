import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext';
import Home from "./routes/Home";
import DoctorDashboard from "./routes/DoctorDashboard";
import Review from "./routes/Review";
import Appointments from "./routes/Appointments";
import Register from './routes/Register'
import Blog from "./routes/Blog";
import DoctorProfile from "./routes/DoctorProfile";
import DoctorReview from "./routes/DoctorReview";

const App = () => {
    return (
        <AppContextProvider>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/register" component = { Register }/>
                        <Route exact path="/doctor-dashboard/:doctorID" component = { DoctorDashboard }>
                        </Route>
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
        </AppContextProvider>
    )
};

export default App;