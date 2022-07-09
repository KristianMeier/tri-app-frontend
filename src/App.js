import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Practices from "./components/practices";
import MyAccount from "./components/myAccount";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AboutTheApp from "./components/aboutTheApp";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/about-the-app" component={AboutTheApp} />
            <Route path="/practices" component={Practices} />
            <Route path="/myAccount" component={MyAccount} />
            <Redirect from="/" exact to="/practices" />
            <Redirect to="/practices" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
