import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DEL_COMMENT = "DEL_COMMENT";

const setComment = createAction(SET_COMMENT, (comment_list) => ({
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const deleteComment = createAction(DEL_COMMENT, (comment) => ({ comment }));

let token = getCookie("ok");
const initialState = {
  list: {
    post: [
      {
        postId: "",
        postTitle: "아이유가 운영하는 풀하우스",
        postDesc: "",
        postImg: "이미지",
        postCharge: "요금",
        address: "송파구, 서울, 한국",
        postCommentCnt: "32",
        nickName: "아이유",
        // lat:'',
        // lng: '',
        userProfile:
          "https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2020/10/PS20100800026.jpg",
        room: 1,
        wifi: false,
        laundry: false,
        parkinglot: false,
      },
    ],

    comment: [
      {
        postId: "고유id",
        commentId: "댓글 고유 아이디",
        contents: "아 오늘도 역시나 밤을 새는구나 ㅎㅎㅎ 리덕스 연결 완료!",
        nickName: "아니유",
        userProfile:
          "https://file.mk.co.kr/meet/neds/2022/02/image_readtop_2022_159433_16452258234951534.jpg",
        date: "",
      },
    ],
  },
};

const getCommentDB = (postId) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: `http://52.78.211.107/api/postDetail/${postId}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        
        dispatch(setComment(response.data));
        
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const addCommentDB = (contents, postId) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "post",
        url: `http://52.78.211.107/api/commentPost/${postId}`,
        data: { contents },
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((res)=> {
        dispatch(addComment(res.data.comment));
      })
     
    } catch (err) {
      console.log(err);
    }
  };
};

const deleteCommentDB = (commentId) => {
  return async function (dispatch, getState) {
    await axios({
      method: "DELETE",
      url: `http://52.78.211.107/api/commentDelete/${commentId}`,
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch(deleteComment(commentId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comment_list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.comment.unshift(action.payload.comment);
      }),
    [DEL_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.comment = draft.list.comment.filter(
          (item) => item.commentId !== action.payload.comment
        );
      }),
  },
  initialState
);

const actionCreators = {
  setComment,
  addCommentDB,
  getCommentDB,
  deleteCommentDB,
};

export { actionCreators };
