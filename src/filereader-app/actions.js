import TYPES from './ACTION_TYPES';

export function readFileLine(lines){
  return {
    type: TYPES.FILE_READ,
    payload: lines
  };
}

export function selectLine(line){
  return {
    type: TYPES.SELECT_LINE,
    payload: line
  };
}
