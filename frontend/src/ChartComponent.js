import React, { Component } from "react";

import AreaChart from "./AreaChart";
import { TypeChooser } from "react-stockcharts/lib/helper";

export default class ChartComponent extends Component {
  render() {
    return (
      <TypeChooser>
        {type => (
          <AreaChart
            type={type}
            clikcedCrypto={this.props.clickedCrypto}
            data={this.props.data}
          />
        )}
      </TypeChooser>
    );
  }
}
