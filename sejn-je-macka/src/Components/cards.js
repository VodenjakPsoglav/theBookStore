import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../Store/actions/cartActions";
import Card from "./card";
import "./cards.scss";

class Cards extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };
  //preuzeti podatke iz reduksa i filtrirati ih u kategorije,filter na sve po imenu uz regex

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <Card
          key={item.id}
          title={item.title}
          text={item.desc}
          price={item.price}
          oldprice={item.oldPrice}
          cartClick={() => {
            this.handleClick(item.id);
          }}
          imgURL={item.imgURL}
          category={item.category}
        />
      );
    });

    return <div className="cardsLayout">{itemList}</div>;
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
