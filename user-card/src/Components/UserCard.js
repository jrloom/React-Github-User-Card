import React from "react";
import Moment from "react-moment";

import { Card, Image } from "semantic-ui-react";

const UserCard = props => {
  return (
    <Card>
      <Image src={props.img} />
      <Card.Content textAlign="left">
        <Card.Header as="h2">{props.name}</Card.Header>
        <Card.Meta>
          Joined on <Moment format="MMMM DD, YYYY">{props.joined}</Moment>
        </Card.Meta>
        <Card.Meta>{props.hire}</Card.Meta>
        <Card.Meta>{props.email}</Card.Meta>
        <Card.Meta>{props.location}</Card.Meta>
        <Card.Description>{props.bio}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {props.repos} repos {props.followers} followers {props.following} following
      </Card.Content>
    </Card>
  );
};

export default UserCard;
