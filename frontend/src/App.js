import React, { Component } from "react";
import "./App.css";
import { Header, Container, Segment } from "semantic-ui-react";
// import socketIOClient from "socket.io-client";

import Homepage from "./Homepage";

class App extends Component {
  // state = {
  //   coinlist: [],
  //   newsList: [],
  //   coinDetails: []
  // };

  // componentDidMount() {
  //   fetch("http://localhost:5000/coinlist")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(coinData => {
  //       return this.setState({
  //         coinlist: coinData
  //       });
  //     });
  //   fetch("http://localhost:5000/news")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(newsData => {
  //       return this.setState({
  //         newslist: newsData
  //       });
  //     });
  //   fetch("http://localhost:5000/details")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(coinInfo => {
  //       return this.setState({
  //         coinDetails: coinInfo
  //       });
  //     });
  // }
  render() {
    return (
      <div>
        <style>
          {`
      html, body {
        background-color: #252839 !important;
      }
      `}
        </style>
        {/* <div className="App"> */}
        <div className="ui raised segment">
          <div className="ui segment violet inverted">
            <Header color={"violet"} inverted as="h1">
              CryptoCurrency Dashboard
            </Header>
          </div>
        </div>
        {/* <Segment color="black"> */}
        <Homepage />
        {/* </Segment> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
