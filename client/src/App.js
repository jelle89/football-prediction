import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import signIn from "./components/signIn";
import footballPage from "./components/footballPage";



class App extends Component {
  render() {
    return (

      <BrowserRouter >
      <div className="App">
        <Switch>
          <Route exact path="/" component={signIn} />
          <Route exact path="/test" component={footballPage} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
