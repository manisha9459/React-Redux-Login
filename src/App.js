import React, { Component } from "react";
import Login from "./components/Login";
import Customers from "./components/Pages/Customers";
import { store } from "./helpers";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";

const wrapperCustomers = Wrapper(Customers);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/users" component={wrapperCustomers} />
            
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
