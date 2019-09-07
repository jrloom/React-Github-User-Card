import React from "react";
import UserCard from "./UserCard";
import { Grid, Segment } from "semantic-ui-react";

const User = props => {
  return (
    <Grid centered>
      <Segment>
        <UserCard
          img={props.img}
          name={props.name}
          joined={props.joined}
          hire={props.hire}
          email={props.email}
          location={props.location}
          bio={props.bio}
          repos={props.repos}
          followers={props.followers}
          following={props.following}
        />
      </Segment>
    </Grid>
  );
};

export default User;

//// bio
//// avatar_url
// company
//// email
// //followers (#)
//// following (#)
//// hireable
// html_url (github.com/[username])
//// location
//// repos (# of)
//// repos_url
//// created_at (member since) - use Moment for this
// updated_at
//// name
