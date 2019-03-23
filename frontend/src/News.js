import React, { Component } from "react";
import { Image, Button, Table } from "semantic-ui-react";

class News extends Component {
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
            // onClick={() => this.props.showDetails(this.props.id)}
            src={this.props.img}
            size="mini"
            centered
          />
        </Table.Cell>
        <Table.Cell>{this.props.title}</Table.Cell>
        <Table.Cell>{this.props.source}</Table.Cell>
        {/* <Table.Cell>{this.props.market}</Table.Cell>
        <Table.Cell>{this.props.price}</Table.Cell>
        <Table.Cell>{this.props.CHANGEPCTDAY}%</Table.Cell>
        <Table.Cell>{this.props.MKTCAP}</Table.Cell>
        <Table.Cell>{this.props.SUPPLY}</Table.Cell> */}
      </Table.Row>
    );
  }
}

export default News;
