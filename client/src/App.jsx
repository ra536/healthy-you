import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TestContextProvider } from './context/TestContext';
import Home from "./routes/Home";
import Review from "./routes/Review";
import SearchDoctor from "./routes/SearchDoctor";

const App = () => {
    return (
        <TestContextProvider>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/search" component={ SearchDoctor }/>
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