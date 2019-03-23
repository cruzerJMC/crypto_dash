import React, { Component } from "react";
import CryptoList from "./CryptoList";
import CryptoDash from "./CryptoDash";
import Favorites from "./Favorites";
import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class Homepage extends Component {
  state = {
    coinList: [],
    newsList: [],
    coinDetails: [],
    coins: [],
    clickedCrypto: null
  };

  componentDidMount() {
    fetch("http://localhost:5000/allcoins")
      .then(response => {
        return response.json();
      })
      .then(allCoins => {
        return this.setState({
          coins: allCoins
        });
      });
    fetch("http://localhost:5000/news")
      .then(response => {
        return response.json();
      })
      .then(newsData => {
        return this.setState({
          newsList: newsData
        });
      });
    fetch("http://localhost:5000/coinlist")
      .then(response => {
        return response.json();
      })
      .then(coinList => {
        return this.setState({
          coinList: coinList
        });
      });
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  // callApi = async () => {
  //   const response = await fetch("/api/hello");
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };

  showDetails = itemId => {
    const clickedCrypto = this.state.coinList.find(item => item.id === itemId);
    console.log("showing", clickedCrypto);
    this.setState({
      clickedCrypto: clickedCrypto
    });
  };

  render() {
    // console.log("homepage", this.state.newsList);
    return (
      <div>
        {!this.state.clickedCrypto ? (
          <Segment raised>
            <Grid color="black" columns={2} textAlign="center">
              <Divider inverted vertical>
                ||
              </Divider>
              <Grid.Row color="black">
                <Grid.Column color="black">
                  <CryptoList
                    coinList={this.state.coinList}
                    showDetails={this.showDetails}
                  />
                </Grid.Column>
                {/* </Segment> */}

                {/* <Divider vertical>||</Divider> */}
                {/* <Segment> */}
                <Grid.Column color="black">
                  <Favorites coinList={this.state.coinList} />
                </Grid.Column>
                {/* </Segment> */}
              </Grid.Row>
            </Grid>
          </Segment>
        ) : (
          // {/* </Segment> */}
          <CryptoDash
            news={this.state.newsList}
            clickedCrypto={this.state.clickedCrypto}
          />
        )}
      </div>
    );
  }
}

export default Homepage;
