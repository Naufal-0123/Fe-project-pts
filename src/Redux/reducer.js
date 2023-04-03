const initialState = {
    username: "",
    password: "",
    isAuth: false,
  };
  
  export const authProses = (state = initialState, action) => {
    if (action.type === "login") {
      return {
        ...state,
        username: action.username,
        password: action.password,  
        isAuth: action.isAuth,
      };
    };
    return state;
  };