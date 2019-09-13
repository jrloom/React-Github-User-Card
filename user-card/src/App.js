import React from "react";
import "./App.scss";
import axios from "axios";
import { Container } from "semantic-ui-react";
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

  componentDidMount() {
    console.log("Mounties!");
    axios
      .get("https://api.github.com/users/jrloom")
      .then(resolve => {
        this.setState({ user: resolve.data });
        console.log("good things > ", resolve.data);
      })
      .catch(error => console.log("bad things > ", error));

    // axios
    // .get("https://api.github.com/users/jrloom/followers");
    // .then(resolve => console.log('followers - good things > ', resolve))
    // .catch(error => console.log('followers - bad things > ', error))
  }

  render() {
    return (
      <Container>
        <User
          img={this.state.user.avatar_url}
          name={this.state.user.name}
          joined={this.state.user.created_at}
          hire={this.state.user.hireable}
          email={this.state.user.email}
          location={this.state.user.location}
          bio={this.state.user.bio}
          repos={this.state.user.public_repos}
          repo-url={this.state.user.repos_url}
          followers={this.state.user.followers}
          following={this.state.user.following}
        />
        <Follower />
      </Container>
    );
  }
}

export default App;
