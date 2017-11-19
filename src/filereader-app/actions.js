import TYPES from './ACTION_TYPES';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3001/api/comments';

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

export function createPost(values, id){
  const request = axios.post(`ROOT_URL/${id}`, values);

  return {
    type: TYPES.CREATE_COMMENT,
    payload: request
  };
}
