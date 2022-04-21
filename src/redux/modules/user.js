import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, deleteCookie, getCookie } from "../../shared/Cookie";
import jwt from "jwt-decode";

//ActionTypes
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const CHECK_DUP = "CHECK_DUP";
const LOG_OUT = "LOG_OUT";

//Action Creators
const getUser = createAction(GET_USER, (userInfo) => ({ userInfo }));
const setUser = createAction(SET_USER, (token) => ({ token }));
const checkDup = createAction(CHECK_DUP, (email) => ({ email }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

//initialState
const initialState = {
  nickName: "",
  userProfile: "",
  is_login: false,
};

//Middleware Action
const loginAction = (email, password) => {
  return async function (dispatch, getState, { history }) {
    try {
      await axios({
        method: "post",
        url: "http://52.78.211.107/user/login",
        data: {
          email: email,
          password: password,
        },
      }).then((res) => {
        const accessToken = res.data.token;
        //쿠키에 토큰 저장
        setCookie("ok", `${accessToken}`);
        console.log(res.data);
        dispatch(setUser(res.data.token)); //여기수정 키밸류맞춰서
        document.location.href = "/";
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const logOutAction = () => {
  return function (dispatch, { history }) {
    dispatch(logOut());
    document.location.href = "/";
  };
};

const idCheck = (email) => {
  return function (dispatch) {
    axios
      .post(
        "http://52.78.211.107/user/signUp",
        JSON.stringify({
          email: email,
          // password: password,
          // nickName: nickName,
          // userProfile: userProfile,
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

const signupDB = (email, password, nickName, userProfile) => {
<<<<<<< HEAD
  console.log(email, nickName, password, userProfile);
=======

>>>>>>> 977db0c03f6154142e79cb77a7fcdbec3fec7928
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "post",
        url: "http://52.78.211.107/user/signUp",
        data: {
          email: email,
          nickName: nickName,
          userProfile:userProfile,
<<<<<<< HEAD
          password: password,
          userProfile : userProfile,
=======
          password: password,    
>>>>>>> 977db0c03f6154142e79cb77a7fcdbec3fec7928
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
      url: "http://52.78.211.107/user/users/me",
      headers: {
        Authorization: `Bearer ${getCookie("ok")}`,
      },
    })
      .then((res) => {
        const accessToken = res.data.token;
        const userInfo = jwt(accessToken);
        const tokenCheck = document.cookie;
        if (tokenCheck) {
          dispatch(setUser(accessToken, userInfo));
        }
      })
      .catch((err) => {
        console.log(err, "에러남");
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
    [GET_USER]: (state, action) =>//여기서, aPp,js에서 실행
      produce(state, (draft) => {
        draft.userInfo = action.payload.userInfo;
        draft.ok = true;
        console.log(draft.data);
      }),
    [CHECK_DUP]: (state, action) =>
      produce(state, (draft) => {
        draft.is_check = action.payload.email;
        console.log(action.payload.id);
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie('ok');
        draft.ok = false;
      }),
  },
  initialState
);

//exprting
const actionCreators = {
  idCheck,
  signupDB,
  loginAction,
  getUser,
  getUserDB,
  setUser,
  logOutAction,
  logOut,
};

export { actionCreators };
