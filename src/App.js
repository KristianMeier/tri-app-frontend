import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Practices from "./components/practices";
import MyBookings from "./components/myBookings";
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
            <Route path="/myBookings" component={MyBookings} />
            <Redirect from="/" exact to="/about-the-app" />
            <Redirect to="/myBookings" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
