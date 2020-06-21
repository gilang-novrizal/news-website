import React from "react";

// import { BrowserRouter, Route } from "react-router-dom";
import NavbarReact from "./component/navbar";
import Home from "./pages/home";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarReact />
        <div className="container">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
