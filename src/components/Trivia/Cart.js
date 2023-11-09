import React from "react";
import { connect } from "react-redux";
import { Remove_cart } from "./Action";

const Cart = (props) => {
  function renderlist() {
    return props.cart.map((el) => {
      return (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={el.name}
        >
          {el.name}
          <span className="badge badge-primary badge-pill">Rs.{el.price}</span>
          <button
            className="btn btn-danger"
            onClick={() => props.Remove_cart(el.id)}
          >
            Remove cart
          </button>
        </li>
      );
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="" style={{ paddingLeft: "0" }}>
            {renderlist()}
          </ul>
        </div>
      </div>
    </div>
  );
};

const MapStatetoProps = (state) => {
  return { cart: state.cart };
};

export default connect(MapStatetoProps, { Remove_cart })(Cart);
