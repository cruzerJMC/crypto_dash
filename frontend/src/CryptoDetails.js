import React, { Component } from "react";
import {
  Image,
  Button,
  Table,
  Container,
  Segment,
  Card,
  Icon,
  Divider,
  Header,
  List
} from "semantic-ui-react";
import NewsFeed from "./NewsFeed";
// import ChartComponent from "./ChartComponent";

class CryptoDetails extends Component {
  render() {
    console.log("CryptoDetails", this.props);
    return (
      <div>
        <Container>
          <Segment>
            <Card>
              <Image
                src={`http://cryptocompare.com/${
                  this.props.clickedCrypto.image
                }`}
                size="medium"
                circular
              />
              <Card.Content>
                <Card.Header>
                  {" "}
                  <h1>{this.props.clickedCrypto.company}</h1>
                </Card.Header>
                <Card.Meta>
                  <h2>{this.props.clickedCrypto.ticker}</h2>
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  10 Friends
                </a>
              </Card.Content>
            </Card>
          </Segment>
          {/* <Divider horizontal>
            <ChartComponent data={this.props.historicals} />
          </Divider> */}
          <Divider horizontal>
            <NewsFeed filteredNews={this.props.filteredNews} />
          </Divider>
        </Container>
      </div>
    );
  }
}

export default CryptoDetails;
