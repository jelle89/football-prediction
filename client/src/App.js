import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import FootballPage from "./components/FootballPage";



class App extends Component {
  render() {
    return (

      <BrowserRouter >
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/test" component={FootballPage} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
