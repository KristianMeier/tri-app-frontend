import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Practices from "./components/practices";
import MyBookings from "./components/myBookings";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import auth from "./services/authService";
import Footer from "./components/footer";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route
              path="/practices"
              render={(props) => (
                <Practices {...props} user={this.state.user} />
              )}
            />
            <Route path="/myBookings" component={MyBookings} />
            <Redirect from="/" exact to="/practices" />
            <Redirect to="/myBookings" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
