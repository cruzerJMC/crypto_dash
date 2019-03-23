import React, { Component } from "react";
// import moment from 'moment';

import LineChart from "./LineChart";
import ToolTip from "./ToolTip";
// import InfoBox from "./InfoBox";

class App extends Component {
  state = {
    // fetchingData: true,
    // data: null,
    hoverLoc: null,
    activePoint: null
  };

  handleChartHover(hoverLoc, activePoint) {
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    });
  }

  // getData = () => {
  //   return this.setState({
  //     data: this.props.historicals
  //   });
  // };

  // getData()

  render() {
    console.log("chartMain", this.props.data[0]);
    return (
      <div className="container">
        <div className="row">
          <h1>30 Day Bitcoin Price Chart</h1>
        </div>
        {/* <div className="row">
          {!this.state.fetchingData ? <InfoBox data={this.state.data} /> : null}
        </div> */}
        <div className="row">
          <div className="popup">
            {this.state.hoverLoc ? (
              <ToolTip
                hoverLoc={this.state.hoverLoc}
                activePoint={this.state.activePoint}
              />
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="chart">
            {/* {!this.state.fetchingData ? ( */}
            <LineChart
              data={this.props.data}
              onChartHover={(a, b) => this.handleChartHover(a, b)}
            />
            {/* ) : null} */}
          </div>
        </div>
        {/* <div className="row">
          <div id="coindesk">
            {" "}
            Powered by <a href="http://www.coindesk.com/price/">CoinDesk</a>
          </div> */}
      </div>
      // </div>
    );
  }
}

export default App;
