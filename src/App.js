import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./screens/home";
import Register from "./screens/register";
import Footer from "./components/footer";
import Login from "./components/login";

class App extends Component {
  state = {
    loginModal: false,
  };
  toggleLogin = () => {
    this.setState({ loginModal: !this.state.loginModal });
  };
  render() {
    return (
      <Router>
        <Header onLoginToggle={this.toggleLogin} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer />
        <Login
          loginModal={this.state.loginModal}
          onLoginToggle={this.toggleLogin}
        />
      </Router>
    );
  }
}

export default App;
