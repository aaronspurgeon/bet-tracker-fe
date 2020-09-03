import React from "react";
import Landing from "./comps/Landing";
import Home from "./comps/Home";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/landing" component={Landing} />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
