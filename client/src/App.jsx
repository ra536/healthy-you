import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext';
import Home from "./routes/Home";
import DoctorDashboard from "./routes/DoctorDashboard";
import Review from "./routes/Review";
import Register from './routes/Register';
import Login from "./routes/Login";

const App = () => {
    return (
        <AppContextProvider>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/register" component = { Register }/>
                        <Route exact path="/login" component={ Login }/>
                        <Route exact path="/doctorid/doctor-dashboard">
                            <DoctorDashboard
                                doctorID = "test"
                            />
                        </Route>
                        <Route path="/leaveReview/:id">
                            <Review url={window.location.href}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </AppContextProvider>
    )
};

export default App;