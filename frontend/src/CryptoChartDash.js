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
// import ChartMain from "./chart/ChartMain";
// import { AreaChart } from "react-easy-chart";

// const key = "fe278748eb49ae23227e6769d92ef40bde306a9f0c3d91513b3c09680189c717";
// const cc = require("cryptocompare");
// cc.setApiKey(key);
// const moment = require("moment");
// import PriceChart from "./PriceChart";
// import ReactChartkick, { AreaChart } from "react-chartkick";
// import Chart from "chart.js";
// ReactChartkick.addAdapter(Chart);
import AreaChart from "./AreaChart";

class CryptoChartDash extends Component {
  render() {
    // console.log("lenght", this.props.historicals.length);
    const length = this.props.historicals.length;
    return (
      <div>
        {/* <Container style={{ padding: "5em 0em" }}> */}
        <Segment>
          {/* <ChartMain data={this.props.historicals} /> */}
          {/* <AreaChart
            axes
            margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
            axisLabels={{ x: "My x Axis", y: "My y Axis" }}
            width={250}
            interpolate={"cardinal"}
            height={250}
            data={}
          /> */}
          <AreaChart
            chart={this.props.historicals.filter(object => {
              let index = length - 31;
              return object.x > index;
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
