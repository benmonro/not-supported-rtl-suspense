import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LazyThing from "my-consumer-pkg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LazyThing />
      </div>
    );
  }
}

export default App;
