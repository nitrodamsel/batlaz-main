export const Fetch_Product = () => {
  return {
    type: "FETCH_PRODUCT",
    payload: {},
  };
};

export const Add_cart = (info) => {
  return {
    type: "ADD_CART",
    payload: info,
  };
};

export const Remove_cart = (info) => {
  return {
    type: "REMOVE_CART",
    payload: info,
  };
};
