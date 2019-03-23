import React, { Component } from "react";
import LineChart from "react-svg-line-chart";
class AreaChart extends Component {
  state = {
    activePoint: null
  };

  handlePointHover = (activePoint, e) => {
    this.setState({ activePoint });
  };

  render() {
    const { activePoint } = this.state;

    const data = this.props.chart.map(obj => {
      return { x: obj.x, y: obj.d };
    });
    return (
      <LineChart
        data={data.map((point, i) => ({
          ...point,
          active: point.x === activePoint.x ? true : false
        }))}
        pointsOnHover={this.handlePointHover}
      />
    );
  }
}

export default AreaChart;
