import * as React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_DRAWER_STATE":
      return {
        ...state,
        drawerOpen: action.payload,
      };
    case "OPEN_AUTH":
      return {
        ...state,
        authOpen: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      throw new Error();
  }
}

const GlobalContext = React.createContext();

function GlobalProvider({ children }) {
  const [globalState, dispatchGlobal] = React.useReducer(reducer, {
    drawerOpen: false,
    authOpen: false,
    user: null,
  });

  return (
    <GlobalContext.Provider value={{ globalState, dispatchGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
