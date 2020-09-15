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
  const [signedIn, setSignedIn] = useState(localStorage.getItem("token"));
  // const [id, setId] = useState(null);
  // const [wins, setWins] = useState(null);
  // const [loss, setLoss] = useState(null);
  const [userData, setUserData] = useState({
    id: null,
    firstName: null,
    lastName: null,
    wins: null,
    loss: null,
  });

  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Protected path="/home" component={Home} userData={userData} />
      <Route
        path="/login"
        render={(props) => {
          return (
            <Login {...props} setUserData={setUserData} userData={userData} />
          );
        }}
      />
      <Route path="/signup" component={Signup} />
      <Protected exact path="/logout" component={Logout} />
    </div>
  );
}

export default App;
