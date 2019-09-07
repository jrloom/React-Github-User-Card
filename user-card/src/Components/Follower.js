import React from "react";
import UserCard from "./UserCard";
import { Grid, Segment } from "semantic-ui-react";

const Follower = props => {
  return (
    <Grid centered>
      <Segment>
        <UserCard />
      </Segment>
    </Grid>
  );
};

export default Follower;
