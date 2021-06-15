import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./screens/home";
import Register from "./screens/register";
import LoginScreen from "./screens/loginScreen";
import Footer from "./components/footer";
import Login from "./components/login";
import PageNotFound from "./screens/pageNotFound";
import About from "./screens/about";
import Contact from "./screens/contact";
import News from "./screens/news";
import Privacy from "./screens/privacy";
import Terms from "./screens/terms";

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
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/news-and-articles">
            <News />
          </Route>
          <Route path="/privacy-policy">
            <Privacy />
          </Route>
          <Route path="/terms-and-conditions">
            <Terms />
          </Route>
          <Route path="*">
            <PageNotFound />
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
