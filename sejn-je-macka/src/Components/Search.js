import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../Store/actions/cartActions";
import Card from "./card";
import "./Search.scss";

class Search extends Component {
  state = {
    input: ""
  };

  handleClick = id => {
    this.props.addToCart(id);
  };
  handleSubmit = event => {
    event.preventDefault();

    this.setState({ input: event.target.value });
  };

  render() {
    let erroMsg = "";
    let itemList = this.props.items.map(item => {
      let regex = RegExp(this.state.input, "i");

      return regex.test(".*" + item.title + ".*") ? (
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
      ) : null;
    });
    let filtered = itemList.filter(el => el != null);

    if (filtered.length === 0) {
      erroMsg = "No RESULTS";
    } else {
      erroMsg = "";
    }

    return (
      <div className="cardsLayout">
        <div className="container">
          <div className="container__item">
            <form autoComplete="off" className="form">
              <input
                type="text"
                name="searchInput"
                onChange={this.handleSubmit}
                className="form__field"
                placeholder="Enter the name of a book"
              />
            </form>
          </div>
        </div>

        <h1> {erroMsg}</h1>
        {itemList}
      </div>
    );
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
)(Search);
