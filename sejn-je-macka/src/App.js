import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navigation/navbar";
import Cards from "./Components/cards";
import Cart from "./Components/Cart/Cart";
import Footer from "./Navigation/footer";
import Carousel from "./Navigation/carousel";
import Search from "./Components/Search";
import Drama from "./Components/Categories/Drama";
import Adventure from "./Components/Categories/Adventure";
import Horror from "./Components/Categories/Horror";
import Lifestyle from "./Components/Categories/Lifestyle";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />

        <Switch>
          <Route exact path="/" component={Cards} />
          <Route path="/cart" component={Cart} />
          <Route path="/Lifestyle" component={Lifestyle} />
          <Route path="/Adventure" component={Adventure} />
          <Route path="/Drama" component={Drama} />
          <Route path="/Horror" component={Horror} />
          <Route path="/Search" component={Search} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
