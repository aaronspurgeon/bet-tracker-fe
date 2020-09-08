import React, { useState } from "react";
import Landing from "./comps/Landing";
import Home from "./comps/Home";
import { Route } from "react-router-dom";
import Protected from "./comps/Protected";
import Login from "./comps/Login";
import Logout from "./comps/Logout";
import Signup from "./comps/Signup";
import Nav from "./comps/Nav";
import "./App.css";

function App() {
  const [id, setId] = useState(null);

  console.log(id);

  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Protected path="/home" component={Home} />
      <Route
        path="/login"
        render={(props) => {
          return <Login {...props} setId={setId} />;
        }}
      />
      <Route path="/signup" component={Signup} />
      <Protected exact path="/logout" component={Logout} />
    </div>
  );
}

export default App;
