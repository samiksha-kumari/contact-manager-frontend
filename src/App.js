import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ContactList from "./components/contacts/List";
import ContactShow from "./components/contacts/Show";
import ContactNew from "./components/contacts/New";
import ContactEdit from "./components/contacts/Edit";

//import './App.css';

function App() {
  return (
    <div>
      <h1>
        <em>Contact Manager App</em>
      </h1>
      <BrowserRouter>
        <Link to="/users/contacts">
          <em>contacts</em>
        </Link>
        <Switch>
          <Route
            path="/users/contacts/new"
            component={ContactNew}
            exact={true}
          />

          <Route path="/users/contacts" component={ContactList} exact={true} />
          <Route
            path="/users/contacts/edit/:id"
            component={ContactEdit}
            exact={true}
          />
          <Route
            path="/users/contacts/:id"
            component={ContactShow}
            exact={true}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
