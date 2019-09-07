import React from "react";
import "./App.scss";
import User from "./Components/User";
import Follower from "./Components/Follower";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      follower: []
    };
  }

  render() {
    return (
      <div>
        <User />
        <Follower />
      </div>
    );
  }
}

export default App;
