import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Header from "./components/header";
import HomeHeader from "./screens/home/components/homeHeader";
import LoginHeader from "./screens/login/components/loginHeader";
import Footer from "./components/footer";

import Home from "./screens/home/home";
import Search from "./screens/search/search";
import ListProperty from "./screens/list-property/listProperty";
import Register from "./screens/login/register";
import LoginScreen from "./screens/login/loginScreen";
import PageNotFound from "./screens/pageNotFound";
import About from "./screens/about";
import Contact from "./screens/contact";
import News from "./screens/news";
import SingleNews from "./screens/singleNews";
import Privacy from "./screens/privacy";
import Terms from "./screens/terms";
import Favourites from "./screens/favourites";
import RentPayment from "./screens/rentPayment/rentPayment";
import RentAgreement from "./screens/rentAgreement";
import PackersMovers from "./screens/packersMovers";
import TenantVerification from "./screens/tenantVerification/tenantVerification";
import OwnerVerification from "./screens/ownerVerification";
import EcoManagement from "./screens/ecoManagement";
import { AuthProvider } from "./hooks/AuthContext";
import User from "./screens/user/User";

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={HomeHeader} />
            <Route path="/search" />
            <Route path="/login" component={LoginHeader} />
            <Route path="/register" component={LoginHeader} />
            <Route path="/user" component={LoginHeader} />
            <Route path="*" component={Header} />
          </Switch>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/user" component={User} />
            <Route path="/about-us" component={About} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/news-and-articles" component={News} />
            <Route path="/news" component={SingleNews} />
            <Route path="/privacy-policy" component={Privacy} />
            <Route path="/terms-and-conditions" component={Terms} />
            <PrivateRoute path="/favourites" component={Favourites} />
            <PrivateRoute path="/list-property" component={ListProperty} />
            <Route path="/rent-payment" component={RentPayment} />
            <Route path="/rent-agreement" component={RentAgreement} />
            <Route path="/packers-and-movers" component={PackersMovers} />
            <PrivateRoute
              path="/tenant-verification"
              component={TenantVerification}
            />
            <Route path="/owner-verification" component={OwnerVerification} />
            <Route path="/eco-management" component={EcoManagement} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </AuthProvider>
        <Footer />
      </Router>
    );
  }
}

export default App;
