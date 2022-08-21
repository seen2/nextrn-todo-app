import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { Container } from "reactstrap";

import store from "./redux/store";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ShopingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { loadUser } from "./redux/actions/authAction";

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    console.log(process.env.PORT);
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShopingList />
          </Container>
        </div>
      </Provider>
    );
  }
}
