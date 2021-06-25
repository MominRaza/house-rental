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
    properties: [
      {
        id: 1,
        price: "1200000",
        city: "lucknow",
        address: "Rudram city, Habuapur, Lucknow",
        userName: "Sachin Rawat",
        userImageUrl: "images/user1.jpg",
        propertyImageUrl: "images/property1.jpg",
        details:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam, cumque dolore maxime eius quis.",
        want: "sale",
        type: "Residencial Ploat",
      },
      {
        id: 2,
        price: "160000",
        city: "lucknow",
        address: "Rudram city, Habuapur, Lucknow",
        userName: "Harsh Rawat",
        userImageUrl: "images/user2.jpg",
        propertyImageUrl: "images/property2.jpg",
        details:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam, cumque dolore maxime eius quis.",
        want: "rent",
        type: "Residencial Ploat",
      },
      {
        id: 3,
        price: "140000",
        city: "lucknow",
        address: "Rudram city, Habuapur, Lucknow",
        userName: "Rajat Rawat",
        userImageUrl: "images/user3.jpg",
        propertyImageUrl: "images/property3.jpg",
        details:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam, cumque dolore maxime eius quis.",
        want: "sale",
        type: "Residencial Ploat",
      },
      {
        id: 4,
        price: "1200000",
        city: "lucknow",
        address: "Rudram city, Habuapur, Lucknow",
        userName: "Habib Rawat",
        userImageUrl: "images/user4.jpg",
        propertyImageUrl: "images/property4.jpg",
        details:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam, cumque dolore maxime eius quis.",
        want: "sale",
        type: "Residencial Ploat",
      },
      {
        id: 5,
        price: "100000",
        city: "lucknow",
        address: "Rudram city, Habuapur, Lucknow",
        userName: "Sachin Rawat",
        userImageUrl: "images/user5.jpg",
        propertyImageUrl: "images/property5.jpg",
        details:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam, cumque dolore maxime eius quis.",
        want: "pg",
        type: "Residencial Ploat",
      },
      {
        id: 6,
        price: "10000",
        city: "bareilly",
        address: "Rudram city, Habuapur, Lucknow",
        userName: "Mashhood Rawat",
        userImageUrl: "images/user6.jpg",
        propertyImageUrl: "images/property6.jpg",
        details:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam, cumque dolore maxime eius quis.",
        want: "rent",
        type: "Residencial Ploat",
      },
      {
        id: 7,
        price: "20000",
        city: "lucknow",
        address: "Rudram city, Habuapur, Lucknow",
        userName: "Najim Rawat",
        userImageUrl: "images/user7.jpg",
        propertyImageUrl: "images/property7.jpg",
        details:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta numquam, cumque dolore maxime eius quis.",
        want: "sale",
        type: "Residencial Ploat",
      },
    ],
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
            <Search properties={this.state.properties} />
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
