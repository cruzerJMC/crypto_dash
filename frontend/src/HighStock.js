const { PropTypes } = React;
import React, { Component } from "react";
import Highcharts from "highcharts";
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Subtitle,
  Legend,
  LineSeries
} from "react-jsx-highcharts";

class Highstock extends React.Component {
  constructor(props) {
    super(props);

    // Reference to the element containing chart
    this.chartElem = null;
    // highstock chart object
    this.chart = null;

    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  componentDidMount() {
    const { props } = this;
    this.renderChart(props.config, props.animation);
  }

  componentWillReceiveProps(newProps) {
    const { props } = this;
    const { config } = props;
    const newConfig = newProps.config;

    const destroyChart =
      // If series is empty, chart.update() won't work
      !config.series || !config.series.length;
      // Rendering after load finishes

    this.renderChart(
      newProps.config,
      newProps.animation,
      newProps.alwaysDestroy || destroyChart
    );
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  handleTouchEnd() {
    if (!this.chart) return;

    const { tooltip, hoverSeries } = this.chart;
    //tooltip.hide && tooltip.hide();
    //tooltip.hideCrosshairs && tooltip.hideCrosshairs();

    if (hoverSeries) {
      //hoverSeries.onMouseOut();
      // Fade out pie chart halo
      //hoverSeries.halo && hoverSeries.halo.fadeOut();
    }
  }

  renderChart(config, animation = true, destroy = false) {
    if (!Highcharts) return;

    // Avoid modifying config Object directly
    config = Object.assign({}, config);

    if (!this.chartElem) {
      throw new Error("Highstock Component: renderChart called before mount");
    }

    config.chart = config.chart || {};
    config.chart.renderTo = this.chartElem;

    // Configure animation
    config.chart.animation = animation;
    config.plotOptions = config.plotOptions || {};
    config.plotOptions.series = config.plotOptions.series || {};
    config.plotOptions.series.animation = animation;

    if (!this.chart) {
      this.chart = new Highcharts.StockChart(config);
    } else if (destroy) {
      this.chart.destroy();
      this.chart = new Highcharts.StockChart(config);
    } else {
      this.chart.update(config);
    }
  }

  render() {
    const { props } = this;

    return (
      <div styleName="main">
        <div
          styleName="chart"
          ref={elem => {
            this.chartElem = elem;
          }}
          onTouchEnd={this.handleTouchEnd}
        />
      </div>
    );
  }
}

Highstock.propTypes = {
  config: PropTypes.object.isRequired,
  animation: PropTypes.bool,
  alwaysDestroy: PropTypes.bool
};

Highstock.defaultProps = {
  // TODO: find better way to trigger animation
  animation: true,
  alwaysDestroy: false
};
