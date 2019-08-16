import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  SET_BOOKS,
  FETCH_BOOKS_ERR
} from "./action-types/cart-actions";
import axios from "axios";

//add cart action
export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};
//remove item action
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
//subtract qt action
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};
//add qt action
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};
//set books/items when fetched
export const setBooks = items => {
  return {
    type: SET_BOOKS,
    items: items
  };
};
//fatch failed ,show error
export const fetchBooksErr = () => {
  return {
    type: FETCH_BOOKS_ERR
  };
};
//async get items from firebase,set them or handle error
export const initItems = () => {
  return dispatch => {
    axios
      .get("https://book-store")
      .then(response => {
        console.log(response.data);
        dispatch(setBooks(response.data));
      })
      .catch(error => {
        dispatch(fetchBooksErr());
      });
  };
};
