import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import HomeHeader from "./screens/home/components/homeHeader";
import SearchHeader from "./screens/search/components/searchHeader";
import Footer from "./components/footer";
import Login from "./components/login";

import Home from "./screens/home/home";
import Search from "./screens/search/search";
import ListProperty from "./screens/list-property/listProperty";
import Register from "./screens/register";
import LoginScreen from "./screens/loginScreen";
import PageNotFound from "./screens/pageNotFound";
import About from "./screens/about";
import Contact from "./screens/contact";
import News from "./screens/news";
import Privacy from "./screens/privacy";
import Terms from "./screens/terms";
import Favourites from "./screens/favourites";

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
        <Switch>
          <Route exact path="/">
            <HomeHeader onLoginToggle={this.toggleLogin} />
            <Home />
          </Route>
          <Route path="/search">
            <SearchHeader onLoginToggle={this.toggleLogin} />
            <Search />
          </Route>
          <Route path="/login">
            <Header onLoginToggle={this.toggleLogin} />
            <LoginScreen />
          </Route>
          <Route path="/register">
            <Header onLoginToggle={this.toggleLogin} />
            <Register />
          </Route>
          <Route path="/about-us">
            <Header onLoginToggle={this.toggleLogin} />
            <About />
          </Route>
          <Route path="/contact-us">
            <Header onLoginToggle={this.toggleLogin} />
            <Contact />
          </Route>
          <Route path="/news-and-articles">
            <Header onLoginToggle={this.toggleLogin} />
            <News />
          </Route>
          <Route path="/privacy-policy">
            <Header onLoginToggle={this.toggleLogin} />
            <Privacy />
          </Route>
          <Route path="/terms-and-conditions">
            <Header onLoginToggle={this.toggleLogin} />
            <Terms />
          </Route>
          <Route path="/favourites">
            <Header onLoginToggle={this.toggleLogin} />
            <Favourites />
          </Route>
          <Route path="/list-property">
            <Header onLoginToggle={this.toggleLogin} />
            <ListProperty />
          </Route>
          <Route path="*">
            <Header onLoginToggle={this.toggleLogin} />
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
