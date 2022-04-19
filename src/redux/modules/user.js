import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, deleteCookie, getCookie } from "../../shared/Cookie";

//ActionTypes
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const CHECK_DUP = "CHECK_DUP";
const LOG_OUT = "LOG_OUT";

//Action Creators
const getUser = createAction(GET_USER, (token) => ({ token }));
const setUser = createAction(SET_USER, (token) => ({ token }));
const checkDup = createAction(CHECK_DUP, (id) => ({ id }));
const logOut = createAction(LOG_OUT, (email) => ({email}));

//initialState
const initialState = {
  email: null,
  password: null,
  nickName: null,
  userProfile: null,
  is_check: false,
  is_login: false,
  token: null,
};

//Middleware Action
const loginAction = (email, password) => {
  return async function (dispatch, getState, {history}) {
    try {
      await axios({
        method: "post",
        url: "http://52.78.211.107/user/login",
        data: {
          email: email,
          password: password,
        },
      }).then((res) => {
        console.log(res);
        const accessToken = res.data.token;
        //쿠키에 토큰 저장
        setCookie("ok", `${accessToken}`);
        dispatch(setUser(res.data.token));
        document.location.href = "/";
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const logOutAction = () => {
  return function (dispatch, {history}) {
    dispatch(logOut());
    document.location.href = "/";
  }
}


const idCheck = (email, password, nickName, userProfile) => {
  return function (dispatch) {
    axios
      .post(
        "http://52.78.211.107/user/signUp",
        JSON.stringify({
          email: email,
          password: password,
          nickName: nickName,
          userProfile: userProfile,
        }),
        { header: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        console.log(res);
        dispatch(checkDup(true));
      })
      .catch((err) => {
        console.log(err);
        dispatch(checkDup(false));
      });
  };
};

const signupDB = (email, nickName , userProfile, password) => {
  console.log(email, nickName, userProfile, password);
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "post",
        url: "http://52.78.211.107/user/signUp",
        data: {
          email: email,
          nickName: nickName,
          userProfile:userProfile,
          password: password,
          
        },
      }).then((response) => {
        console.log(response);
        document.location.href = "/";
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const getUserDB = () => {
  return function (dispatch) {
    axios({
      method: "get",
      url: "",
      headers: {
        Authorization: `Bearer ${getCookie("is_login")}`,
      },
    })
      .then((res) => {
        const user_id = res.data.user.email;
        console.log(res);

        dispatch(getUser(user_id));
      })
      .catch((err) => {
        console.log("로그인 실패".err);
      });
  };
};

//Reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.token = action.payload.token;
        console.log(draft.token);
        draft.is_login = true;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user_id = action.payload.user_id;
        draft.is_login = true;
        console.log(draft.data);
      }),
    [CHECK_DUP]: (state, action) =>
      produce(state, (draft) => {
        draft.is_check = action.payload.email;
        console.log(action.payload.id);
      }),
      [LOG_OUT]: (state, action)=>
      produce(state, (draft)=> {
        draft.user = null;
        draft.is_login=false;
      })
  },
  initialState
);

//exprting
const actionCreators = {
  idCheck,
  signupDB,
  loginAction,
  getUserDB,
  getUser,
  setUser,
  logOutAction,
  logOut,
};

export { actionCreators };
