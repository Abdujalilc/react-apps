// State manager to manage states
import { GET_USER } from "../actions/user.action";
import { ADD_USER_LIKE } from "../actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    case ADD_USER_LIKE:
      return {
        ...state,
        likes: action.payload.likes,
      };
    default:
      return state;
  }
}
