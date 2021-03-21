import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext';
import Home from "./routes/Home";
import DoctorDashboard from "./routes/DoctorDashboard";
import Review from "./routes/Review";
<<<<<<< HEAD
import Appointments from "./routes/Appointments";
=======
import Register from './routes/Register'
>>>>>>> 46aa4ec252561d7fbacef6bb72cca5bba6c445a5

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
                        <Route path="/leaveReview/:id">
                            <Review url={window.location.href}/>
                        </Route>
                        <Route exact path="/appt" component={ Appointments }/>
                    </Switch>
                </Router>
            </div>
        </AppContextProvider>
    )
};

export default App;