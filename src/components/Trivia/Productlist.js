import React from "react";
import { connect } from "react-redux";
import { Add_cart } from "./Action";

class ProductList extends React.Component {
  renderList = () => {
    return this.props.list.map((el) => {
      return (
        <div className="card m-3 p-3 bg-warning col-3" key={el.id}>
          <p>
            {el.name} | Rs.{el.price}
          </p>
          <button
            className="btn btn-danger"
            onClick={() => this.props.Add_cart(el)}
          >
            Add to cart
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderList()}</div>
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return state;
};

export default connect(MapStateToProps, { Add_cart })(ProductList);
