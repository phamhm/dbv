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
    const line = action.payload;
    const lineb64 = btoa(line);
    return {line, lineb64};
  default:
    return state;
  }
}

export default {fileLines, selectLine};
