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
import AreaChart from "./AreaChart";

class CryptoChartDash extends Component {
  render() {
    console.log("chartDash", this.props.historicals);
    const length = this.props.historicals.length;

    return (
      <div>
        {/* <Container style={{ padding: "5em 0em" }}> */}
        <Segment>
          <AreaChart
            historicals={this.props.historicals.filter(obj => {
              return obj.x > length - 12;
            })}
          />
          <TableHeader historicals={this.props.historicals} />
        </Segment>
        {/* </Container> */}
      </div>
    );
  }
}

export default CryptoChartDash;
