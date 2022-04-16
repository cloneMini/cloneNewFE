import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DEL_COMMENT = "DEL_COMMENT";

const setComment = createAction(SET_COMMENT, (comment_list) => ({comment_list}));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const deleteComment = createAction(DEL_COMMENT, (comment) => ({ comment }));

const initialState = {
  list: 
    {
      post: {
        postId: "",
        postTitle: "",
        postDesc: "",
        postImg: "이미지",
        postCharge: "요금",
        address: "주소",
        postCommentCnt: "32",
        nickName: "별명",
        userProfile: "유저프로필사진",
        category: {
          room: 1,
          wifi: false,
          laundry: false,
          parkinglot: false,
        },
      },

      comment: {
        postId: "고유id",
        commentId: "댓글 고유 아이디",
        contents: "아 오늘도 역시나 밤을 새는구나 ㅎㅎㅎ 리덕스 연결 완료!",
        nickName: "아이유",
        userProfile: "https://file.mk.co.kr/meet/neds/2022/02/image_readtop_2022_159433_16452258234951534.jpg",
        commentDate: "2022년 4월",
      },
    },
  
};

const getCommentDB = (postId) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: `/api/postDetail/:${postId}`,
        headers: {
          // authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        console.log(response);
        dispatch(setComment(response));
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const addCommentDB = (comments, postId) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "post",
        url: `/api/commentPost/:${postId}`,
        data: comments,
        headers: {
          // authorization: `Bearer ${token}`,
        },
      });
      dispatch(addComment());
    } catch (err) {
      console.log(err);
    }
  };
};

const deleteCommentDB = (commentId) => {
  return async function (dispatch, getState) {
    await axios({
      method: "DELETE",
      url: `/api/commentDelete/:${commentId}`,
      headers: {
        // authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
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
        draft.list.concat(action.payload.comment);
      }),
    [DEL_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter(
          (d) => d.id !== action.payload.commentId
        );
      }),
  },
  initialState
);

const actionCreators = {
  setComment,
  addCommentDB,
  getCommentDB,
};

export { actionCreators };
