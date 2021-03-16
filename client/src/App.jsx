import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TestContextProvider } from './context/TestContext';
import Home from "./routes/Home";
import Review from "./routes/Review";
import Appointments from "./routes/Appointments";

const App = () => {
    return (
        <TestContextProvider>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route path="/leaveReview/:id">
                            <Review url={window.location.href}/>
                        </Route>
                        <Route exact path="/appt" component={ Appointments }/>
                    </Switch>
                </Router>
            </div>
        </TestContextProvider>
    )
};

export default App;