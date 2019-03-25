import React, { Component } from "react";
import { Image, Button, Table } from "semantic-ui-react";

class CryptoMenu extends Component {
  // doubleClick = () => {
  //   this.props.handleClickPost();
  //   this.props.showDetails(this.props.id);
  // };

  render() {
    // console.log("Menu Props", this.props);
    return (
      <Table.Row>
        <Table.Cell>
          <Image
            onClick={() => this.props.showDetails(this.props.id)}
            src={`http://cryptocompare.com/${this.props.image}`}
            size="mini"
            circular
            centered
          />
        </Table.Cell>
        <Table.Cell>{this.props.company}</Table.Cell>
        <Table.Cell>{this.props.ticker}</Table.Cell>
        <Table.Cell>{this.props.market}</Table.Cell>
        <Table.Cell>{this.props.price}</Table.Cell>
        <Table.Cell>{this.props.CHANGEPCTDAY}%</Table.Cell>
        <Table.Cell>{this.props.MKTCAP}</Table.Cell>
        <Table.Cell>{this.props.SUPPLY}</Table.Cell>
        <Table.Cell>
          <Button
            onClick={() => this.props.addFav(this.props.id)}
            icon="heart"
          />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default CryptoMenu;
