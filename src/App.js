import React, { useState, useEffect } from "react";
import Landing from "./comps/Landing";
import Home from "./comps/Home";
import { Route } from "react-router-dom";
import Protected from "./comps/Protected";
import Login from "./comps/Login";
import Logout from "./comps/Logout";
import Signup from "./comps/Signup";
import Nav from "./comps/Nav";
import "./App.css";

function App(props) {
  const [signedIn, setSignedIn] = useState(localStorage.getItem("token"));
  const [id, setId] = useState(null);
  // const [wins, setWins] = useState(null);
  // const [loss, setLoss] = useState(null);
  const [userData, setUserData] = useState({
    firstName: null,
    lastName: null,
    wins: null,
    loss: null,
  });
  const [active, setActive] = useState(0);

  const activeHandler = (id, sp) => {
    // e.preventDefault();
    console.log(id);
    setActive(id);
    setSport(sp);
  };

  const [betState, setBetState] = useState(null);
  const [sport, setSport] = useState("All");
  const [tabs, setTabs] = useState([
    { sport: "All", icon: "💰" },
    { sport: "MMA", icon: "🥊" },
    { sport: "NBA", icon: "🏀" },
    { sport: "NFL", icon: "🏈" },
    { sport: "MLB", icon: "⚾️" },
    { sport: "NHL", icon: "🏒" },
  ]);

  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Protected
        path="/home"
        component={Home}
        userData={userData}
        id={id}
        active={active}
        setActive={setActive}
        activeHandler={activeHandler}
        betState={betState}
        setBetState={setBetState}
        sport={sport}
        setSport={setSport}
        tabs={tabs}
        setTabs={setTabs}
        bets={props.bets}
      />
      <Route
        path="/login"
        render={(props) => {
          return (
            <Login
              {...props}
              setUserData={setUserData}
              userData={userData}
              setId={setId}
            />
          );
        }}
      />
      <Route path="/signup" component={Signup} />
      <Protected exact path="/logout" component={Logout} />
    </div>
  );
}

export default App;
