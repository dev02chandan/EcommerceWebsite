import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import PageNotFound from "./components/PageNotFound";

import "./App.css";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      {/* <HashRouter> */}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/aboutus">
          <AboutUs></AboutUs>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
