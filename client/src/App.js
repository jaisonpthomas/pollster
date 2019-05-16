import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import PollForm from "./components/PollForm";
import StripeWrapper from "./components/StripeWrapper";

import { fetchUser } from "./actions/auth";

const App = () => {
  useEffect(() => {
    store.dispatch(fetchUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Switch>
              <PrivateRoute exact path="/polls" component={Dashboard} />
              <PrivateRoute exact path="/polls/new" component={PollForm} />
              <PrivateRoute path="/credits" component={StripeWrapper} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
