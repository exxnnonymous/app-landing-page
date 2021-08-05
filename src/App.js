import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ContactPage from "./components/Contact/ContactPage";
import Pages from "./components/Pages/Pages";
import Download from "./components/Download/Download";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';




export default function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/pages">
            <Pages />
          </Route>
          <Route exact path="/download">
            <Download />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
