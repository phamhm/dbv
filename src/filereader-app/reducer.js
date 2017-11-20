import TYPES from './ACTION_TYPES';

function fileLines(state = [], action){
  switch(action.type){
  case TYPES.FILE_READ:
    return [...action.payload];
  default:
    return state;
  }
}

function selectLine(state = {}, action){
  switch(action.type){
  case TYPES.SELECT_LINE:
    return {line:action.payload,
            line64: btoa(action.payload)};
  default:
    return state;
  }
}

function comments(state = [], action){
  switch(action.type){
  case TYPES.GET_COMMENTS:
    return action.payload.data? [...action.payload.data.comments] : [];
  case TYPES.CREATE_COMMENT:
    return action.payload.data? [...action.payload.data._doc.comments]:[];
  case TYPES.DELETE_COMMENT:
    return action.payload.data? [...action.payload.data._doc.comments]:[];
  case TYPES.UPDATE_COMMENT:
    return action.payload.data? [...action.payload.data._doc.comments]:[];
  default:
    return state;
  }
}

export default {fileLines, selectLine, comments};
