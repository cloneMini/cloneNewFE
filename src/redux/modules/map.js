import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_TITLE = 'GET_TITLE';

const getTitleSend = createAction(GET_TITLE, (title) => ({title}));

const initialState = {
    list: [],
  }

export default handleActions(
    {
      [GET_TITLE] : (state, action) => produce(state, (draft) => {
        draft.list = action.payload.title;
      })
    }, initialState
  );
  
  const actionCreators = {
    getTitleSend,
  }
  
  export {actionCreators};