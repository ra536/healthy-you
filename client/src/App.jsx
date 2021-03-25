import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TestContextProvider } from './context/TestContext';
import Home from "./routes/Home";
import Review from "./routes/Review";
import Blog from "./routes/Blog";
import Setup from './routes/Setup';

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
                        <Route exact path="/blog" component={ Blog }/>
                        <Route exact path="/doc" component={Setup}/>
                    </Switch>
                </Router>
            </div>
        </TestContextProvider>
    )
};

export default App;