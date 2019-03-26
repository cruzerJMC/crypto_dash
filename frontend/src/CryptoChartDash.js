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
import TableHeader from "./TableHeader";
// import ChartContainer from "./ChartContainer";

class CryptoChartDash extends Component {
  render() {
    console.log("chartDash", this.props.historicals);
    const length = this.props.historicals.length;

    return (
      <div>
        {/* <Container style={{ padding: "5em 0em" }}> */}
        <Segment>
          {/* <ChartContainer lickedCrypto={this.props.clickedCrypto} /> */}
          <TableHeader historicals={this.props.historicals} />
        </Segment>
        {/* </Container> */}
      </div>
    );
  }
}

export default CryptoChartDash;
