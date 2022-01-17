import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import AppRouter from "./router/AppRouter";

import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </Provider>
  );
};

export default App;
