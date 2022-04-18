import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, deleteCookie, getCookie } from "../../shared/Cookie";

//ActionTypes
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const CHECK_DUP = "CHECK_DUP";

//Action Creators
const getUser = createAction(GET_USER, (token) =>({token}));
const setUser = createAction(SET_USER, (token) => ({ token }));
const checkDup = createAction(CHECK_DUP, (id) => ({ id }));

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
const idCheck = (id) => {
  return function (dispatch) {
    axios
      .post(
        '',
        JSON.stringify({
          id: id,
        }),
        { header: { "": `` } }
      )
      .then((res) => {
        console.log(res);
        dispatch(checkDup(true));
        window.alert("사용가능한 아이디입니다 !");
      })
      .catch((err) => {
        console.log(err);
        dispatch(checkDup(false));
        window.alert("이미 존재하는 아이디입니다 !");
      });
  };
};

const signupDB = (id, pwd, pwd2) => {
    return function (dispatch, getState, {history}) {
        console.log(id, pwd, pwd2);
        axios
        .post(
            '',
            JSON.stringify({
                id,
                pwd,
                pwd2,
            }),
            {headers:{'':``}}
        )
        .then((res) => {
            console.log(res);
            window.alert(res.data.msg);
        })
        .catch((err)=>{
            const errCode = err.code;
            const errMsg = err;
            console.log(err)
        });
};
};

const getUserDB = () => {
    return function (dispatch)
 {
     axios({
         method:'get',
         url:'',
         headers: {
             Authorization: `Bearer ${getCookie('is_login')}`,
         },
     })
     .then( (res)=> {
        const user_id = res.data.user.id;
        console.log(res)

        dispatch(getUser(user_id));
     })
     .catch((err) => {
         console.log('로그인 실패'. err);
     });
 }};

//Reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.token = action.payload.token;
        console.log(draft.token);
        draft.is_login = true;
      }),
    [GET_USER]:(state, action)=>
    produce(state, (draft)=>{
        draft.user_id = action.payload.user_id;
        draft.is_login = true;
        console.log(draft.data);
    }),
    [CHECK_DUP]: (state, action) =>
      produce(state, (draft) => {
        draft.is_check = action.payload.id;
        console.log(action.payload.id);
      }),
  },
  initialState
);

//exprting
const actionCreators = {
  idCheck,
  signupDB,
};

export { actionCreators };
