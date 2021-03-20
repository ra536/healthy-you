import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext';
import Home from "./routes/Home";
import DoctorDashboard from "./routes/DoctorDashboard";
import Review from "./routes/Review";
import Register from './routes/Register'
import Search from './routes/Search'
import SearchResults from './components/SearchResults'

const App = () => {
    return (
        <AppContextProvider>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/search" component={ Search }/>
                        <Route path="/results" component={ SearchResults }/>
                        <Route exact path="/register" component = { Register }/>
                        <Route exact path="/doctor-dashboard/:doctorID" component = { DoctorDashboard }>
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