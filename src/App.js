import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PlayerList from "./contents/PlayerList";
import Team from "./contents/Team";
import Home from "./contents/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/playerlist">PlayerList</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/playerlist" component={PlayerList} />
          <Route path="/team" component={Team} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
