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
import FavoriteCard from "./FavoriteCard";

class FavoriteList extends Component {
  render() {
    return (
      <div>
        {this.props.coinList.map(crypto => {
          return <FavoriteCard key={crypto.id} {...crypto} />;
        })}
      </div>
    );
  }
}

export default FavoriteList;
