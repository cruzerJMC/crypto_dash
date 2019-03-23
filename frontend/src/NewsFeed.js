import React from "react";
import News from "./News";
import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Table
} from "semantic-ui-react";

const NewsFeed = props => {
  console.log("newsfeed", props);
  return (
    <div>
      <Header as="h4">
        <Icon name="bar chart" />
        Cyrpto News Feed
      </Header>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">Git Repository</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.filteredNews.map((article, index) => {
            return <News key={index} {...article} />;
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
export default NewsFeed;
