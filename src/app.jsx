import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NavbarReact from "./component/navbar";
import Home from "./pages/home";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarReact />
        <div className="container">
          <h1>Hello</h1>
          <Route path="/home" component={Home} />
        </div>
      </div>
    );
  }
}

export default App;
