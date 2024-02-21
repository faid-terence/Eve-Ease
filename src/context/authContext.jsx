import { createContext } from "react";
import { useContext, useEffect, useReducer } from "react";

const initialState = {
  user: null,
  token: null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token: null,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOG_OUT":
      return {
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider
      value={{ user: state.user, token: state.token, dispatch }}
    >
      {children}
    </authContext.Provider>
  );
};
