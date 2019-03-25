import React, { Component } from "react";
import CryptoList from "./CryptoList";
import CryptoDash from "./CryptoDash";
import Favorites from "./Favorites";
import Search from "./Search";
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
    clickedCrypto: null,
    favorites: [],
    favoriteHidden: true,
    inputValue: ""
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

  showDetails = itemId => {
    const clickedCrypto = this.state.coinList.find(item => item.id === itemId);
    console.log("showing", clickedCrypto);
    this.setState({
      clickedCrypto: clickedCrypto
    });
  };

  addFav = itemId => {
    // console.log("firing")
    const foundCrypto = this.state.coinList.find(item => item.id === itemId);
    const preventDoubles = this.state.favorites.find(
      item => item.id === itemId
    );
    if (!preventDoubles) {
      this.setState({
        favorites: [...this.state.favorites, foundCrypto]
      });
    }
  };
  handleChange = event => {
    // console.log("Changing")
    // console.log (event.target.name)
    this.setState({
      inputValue: event.target.value
    });
  };

  filterCryptos = () =>
    this.state.coinList.filter(item => {
      return (
        item.company
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        item.ticker
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        item.market.toLowerCase().includes(this.state.inputValue.toLowerCase())
      );
    });

  // deleteFav = itemId => {
  //   const userFavorites = this.state.favorites.map(item => {
  //     return item;
  //   });
  //   console.log("user weapons", userFavorites);
  //   const deleteFav = userFavorites.find(item => item);
  //   console.log("delete weapon", deleteFav);
  //   const updateFav = this.state.favorites(item => {
  //     return item.id !== itemId;
  //   });
  //   console.log("update Armory", updateFav);
  //   if (deleteFav) {
  //     this.setState({
  //       favorites: updateFav
  //     });
  //   }
  // };

  render() {
    // console.log("homepage", this.state.newsList);
    return (
      <div>
        {!this.state.clickedCrypto ? (
          <div>
            <Search
              handleChange={this.handleChange}
              inputValue={this.state.inputValue}
            />
            <Segment raised>
              <Grid color="black" columns={2} textAlign="center">
                <Grid.Row color="black">
                  <Grid.Column width={13} color="black">
                    <CryptoList
                      coinList={this.filterCryptos()}
                      showDetails={this.showDetails}
                      addFav={this.addFav}
                    />
                  </Grid.Column>
                  {/* </Segment> */}

                  {/* <Segment> */}
                  <Grid.Column width={3} color="black">
                    <Favorites
                      favorites={this.state.favorites}
                      showDetails={this.showDetails}
                    />
                  </Grid.Column>
                  {/* </Segment> */}
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
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
