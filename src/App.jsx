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
    news: [
      {
        id: 1,
        title:
          "Housing subsidy scheme for middle-income families extended till March 2021",
        details:
          "Nirmala Sitharman on Thursday announced a Rs 70,000-crore boost to sector by extending the subsidy scheme for affordable housing for the middle income group.",
        news: "Nirmala Sitharman on Thursday announced a Rs 70,000-crore boost to sector by extending the subsidy scheme for affordable housing for the middle income group.The credit-linked subsidy scheme for the middle income group with an annual income of Rs 6 lakh to Rs 18 lakh was operationalised from May 2017 and extended up to March 2020.She said the scheme is being extended by one year to benefit 2.5 lakh middle income families.She also announced a Rs 5,000-crore special credit facility for street vendors by providing them with working capital of up to Rs 10,000, she said adding this would support 50 lakh street vendors.For farmers, she announced a Rs 30,000-crore additional emergency working capital funding through the National Bank for Agriculture and Rural Development (NABARD).NABARD will extend additional refinance support of Rs 30,000 crore for crop loan requirement of rural co-op banks and regional rural banks.This, she said, would benefit 3 crore farmers, mostly small and marginal.",
        imageUrl: "images/news1.jpg",
      },
      {
        id: 2,
        title:
          "Banks not passing lower rate benefits to borrowers, developers: Credai to RBI",
        details:
          "NEW DELHI: Realtors' apex body Credai has written a letter to RBI (Reserve Bank of India), complaining that banks are not passing lower rate benefits to home loan borrowers and cash-starved developers",
        news: 'NEW DELHI: Realtors\' apex body Credai has written a letter to RBI (Reserve Bank of India), complaining that banks are not passing lower rate benefits to home loan borrowers and cash-starved developers.The association requested RBI governor Shaktikanta Das to direct banks to pass on the rate cuts to non-banking finance companies (NBFCs) and housing finance companies (HFCs), which are the major source of funds for real estate developers.In its letter to the Reserve Bank, Credai said that the central bank has taken various steps to infuse liquidity in the system during this current crisis, including reduction in repo rates and reverse repo rates and providing moratorium on loan repayment."The real estate sector, however, is not able to leverage the benefits of this reduction in repo rates," the association said. RBI has directed the banks to link floating rates on housing loans to external benchmarks, but the same is not made applicable to NBFCs and HFCs, it added."While the RBI has reduced 2.50 per cent in repo rates since January 2019, the maximum reduction passed on by banks to the borrowers has been between 0.7-1.3 per cent, largely from August 2019 till date. In some cases, however, no benefit of repo rate reduction has been passed on at all," Credai said in the letter.Stating that NBFCs and HFCs are the major financing source for the real estate sector, the industry body said that because of these impediments, the industry is getting access to finance at much higher rates.CREDAI said RBI should issue appropriate directions to banks to pass on the benefits of rate cuts to NBFCs/HFCs to enable them to lend to the real estate sector at a lower rate of interest.Earlier this week, Credai also wrote a letter to Prime Minister Narendra Modi, recommending seven measures for survival of the industry during the pandemic.The real estate sector is facing a multi-year demand slowdown and has huge unsold inventories. The stress has exacerbated due to the coronavirus pandemic.The sector got a breather from the over Rs 20 lakh crore economic package announced by Centre in the form of extension of interest subsidy scheme till March 2021, and 6 months extension for completion of existing projects.However, the industry body has said that this is not enough and more needs to be done to boost demand.',
        imageUrl: "images/news2.jpg",
      },
      {
        id: 3,
        title: "Affordable rental housing for poor soon",
        details:
          " With many migrant workers facing eviction for not being able to pay rent as businesses came to a halt during lockdown, the government on Thursday said it will roll out affordable",
        news: " With many migrant workers facing eviction for not being able to pay rent as businesses came to a halt during lockdown, the government on Thursday said it will roll out affordable rental housing for the poor in urban areas and, in a first tranche, over one lakh unoccupied houses across cities being built under different government schemes could be put to use in a short time frame.This includes projects under JNNURM and can be readied with minor refurbishment, sources said. Announcing the scheme for Affordable Rental Housing Complexes (ARHCs) under Pradhan Mantri Awas Yojana (PMAY), finance minister Nirmala Sitharaman said migrant workers need affordable and convenient rental housing in urban areas in addition to social security.The lockdown has exposed the vulnerability of migrant labourers, skilled and unskilled, to sudden disruptions that require provision of emergency rations and protection from being unhoused. Several employers have refused to pay salaries, while daily wagers have no protection at all. Similarly, it is difficult to ensure government’s advice to landlords to not to demand rent for a couple of months.Sitharaman said detailed guidelines will be issued soon. The scheme will have three components. Government-funded housing in cities will be converted into ARHC under public-private partnership mode. The second component will be incentivising manufacturing units, industries, institutions and associations to develop ARHC on their private land and also operate them.“Some spade work has been done. Factories which have excess land would be encouraged to develop rental housing units for their employees and also for outsiders, if they want. This will help unlock unused land parcels in industrial estates,” a source said.",
        imageUrl: "images/news3.jpg",
      },
      {
        id: 4,
        title: "Housing sales nearly back to pre-Covid levels",
        details:
          "Residential sales across the country in the first quarter of this year is almost back to pre-Covid levels helped by strong sales in cities like Hyderabad, Kolkata, Pune and Chennai which have performed better",
        news: ' Residential sales across the country in the first quarter of this year is almost back to pre-Covid levels helped by strong sales in cities like Hyderabad, Kolkata, Pune and Chennai which have performed better than the three major metros, as per a report from property consultancy JLL.About 25,583 units were sold in the current quarter, compared to 27,451 in the same period last year, a recovery of 93%. When compared sequentially, sale volumes are up 17% across the seven major cities. Bengaluru had the slowest recovery rate at 57%.Kolkata, Chennai and Hyderabad saw sales exceeding that of last year as more people bought properties in the eastern and southern suburbs."The buoyancy in the market manifested in the form of low mortgage rates and stable prices are expected to continue and attract fence-sitters and serious end users,” said Siva Krishnan, managing director of residential services at JLL India.The pandemic has also tilted the scale further in favor of established developers. As the sector shows signs of recovery, prominent developers are expected to be at an advantage and capture a greater share of the market.Development focus on mid and affordable segments continues in Q1 2021 with 69% of the new launches in the sub INR 10 million categories. Developers continued to focus on mid and affordable segments, that is units priced up to Rs 1 crore.',
        imageUrl: "images/news4.jpg",
      },
      {
        id: 5,
        title: "5 Reasons Why Buying A Plot Can Be A Wonderful Idea",
        details:
          "Homes are no longer just a place to stay or an ‘asset’ to own. They are an expression of who we are, a portrayal of our lifestyle, a semblance of stability. And when no two people are the same, how can ‘the place they live in’ be identical?",
        news: "Homes are no longer just a place to stay or an ‘asset’ to own. They are an expression of who we are, a portrayal of our lifestyle, a semblance of stability. And when no two people are the same, how can ‘the place they live in’ be identical?As more people embrace their individuality, they are changing the way they live. Today as apartment living thrives with state-of-the-amenities, bespoke residences are fuelling people’s imaginations. But one more living avenue is taking the spotlight – tailored homes, built the way you love them, in communities which offer the finest amenities possible, in strategic locations. With mega infrastructure giants planning to build lifestyle facilities around lucrative acres of plots, plot living is getting more interesting with each passing day. If you too are someone looking to invest in a roof above your head, here’s why plot living may be for you:<br><br>#1 For the love of customisation and to embrace flexibility A house should not only fulfil your requirements, but it must also reflect your personality and match your lifestyle. Design your home from the scratch, tailor it as you deem fit and make provisions for any changes in the future. Plot living lets you make your house, at your pace, as and when your pocket allows.What’s more, this arrangement gives you the greater flexibility to make material, architectural and design choices that give you satisfaction and not strain. After all, a house lasts you a lifetime. And the decisions that you take for it should too.<br><br>#2 Because you don’t deserve deal breakers and you make a good-value buy.When you invest in an unfinished house, you are at the mercy of construction delays. Final handovers may take forever, and you may lose out on many precious years in the bargain. Plots are a time saver what you see, is what you get. Plots can have a greater resale value as they may appreciate better than apartments. They also have much more to offer, given their lower investment and higher returns, within a shorter period.<br><br>#3 Be one with nature.Very often, plot living offers you a life surrounded by the goodness of lush, green nature. This option helps you lead a quality life, away from the typical mid-city sound and noise pollution. With a house on a plot, you can stay close enough to the bustle and far away from a crowd.People have long forgotten the chirping of birds, dense forest cover and tree shades all we see everywhere is just honking cars and concrete. Come let us take you through an amazing journey amidst nature, give you a glimpse of what you have missed over the years and help you earn it back.Construction giants like Godrej are advocating the new trend of plot buying. Pioneers in creating indigenous amenities around acres of cut-out plots, their latest project has state-of-the-art lifestyle services, recreational facilities, themed gardens, planned infrastructure, project and plot services to plot owners and more.",
        imageUrl: "images/news5.jpg",
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
            <Home news={this.state.news} />
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
            <News news={this.state.news} />
          </Route>
          <Route path="/news">
            <SingleNews news={this.state.news} />
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
