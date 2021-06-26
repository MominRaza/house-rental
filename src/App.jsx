import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import HomeHeader from "./screens/home/components/homeHeader";
import SearchHeader from "./screens/search/components/searchHeader";
import LoginHeader from "./screens/login/components/loginHeader";
import Footer from "./components/footer";
import Login from "./components/login";

import Home from "./screens/home/home";
import Search from "./screens/search/search";
import ListProperty from "./screens/list-property/listProperty";
import Register from "./screens/register";
import LoginScreen from "./screens/login/loginScreen";
import PageNotFound from "./screens/pageNotFound";
import About from "./screens/about";
import Contact from "./screens/contact";
import News from "./screens/news";
import Privacy from "./screens/privacy";
import Terms from "./screens/terms";
import Favourites from "./screens/favourites";
import RentPayment from "./screens/rentPayment";
import RentAgreement from "./screens/rentAgreement";
import PackersMovers from "./screens/packersMovers";
import TenantVerification from "./screens/tenantVerification";
import OwnerVerification from "./screens/ownerVerification";
import EcoManagement from "./screens/ecoManagement";

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
          </Route>
          <Route path="/search">
            <SearchHeader onLoginToggle={this.toggleLogin} />
          </Route>
          <Route path="/login">
            <LoginHeader />
          </Route>
          <Route path="/register">
            <LoginHeader />
          </Route>
          <Route path="*">
            <Header onLoginToggle={this.toggleLogin} />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search properties={this.state.properties} />
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
          <Route path="/favourites">
            <Favourites />
          </Route>
          <Route path="/list-property">
            <ListProperty />
          </Route>
          <Route path="/rent-payment">
            <RentPayment />
          </Route>
          <Route path="/rent-agreement">
            <RentAgreement />
          </Route>
          <Route path="/packers-and-movers">
            <PackersMovers />
          </Route>
          <Route path="/tenant-verification">
            <TenantVerification />
          </Route>
          <Route path="/owner-verification">
            <OwnerVerification />
          </Route>
          <Route path="/eco-management">
            <EcoManagement />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
        <Switch>
          <Route path="/login" />
          <Route path="/register" />
          <Route path="*">
            <Login
              loginModal={this.state.loginModal}
              onLoginToggle={this.toggleLogin}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
