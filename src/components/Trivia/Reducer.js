import { combineReducers } from "redux";

let initialProduct = [
  { id: 1, name: "Honor 7", price: 45000 },
  { id: 2, name: "iPhone 6s", price: 50000 },
];

const Productlist = (state = initialProduct, action) => {
  return state;
};

const Cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART":
      return [...state, action.payload];

    case "REMOVE_CART":
      return state.filter(({ id }) => id !== action.payload);

    default:
      return state;
  }
};

export default combineReducers({ list: Productlist, cart: Cart });
