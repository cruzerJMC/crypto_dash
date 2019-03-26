import React from "react";
import { Line } from "react-chartjs-2";

const PriceChart = props => <Line data={props.data} options={props.options} />;

export default PriceChart;
