import {
  ADD_ITEM,
  GET_ITEMS,
  DELETE_ITEMS,
  ITEMS_LOADING,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
};

const itemReducer = (state = initialState, action) => {
  // console.log("ok");
  // console.log(action.payload);
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: [...action.payload],
        loading: false,
      };
    case DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case ITEMS_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default itemReducer;
