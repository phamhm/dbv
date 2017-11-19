import TYPES from './ACTION_TYPES';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3001/dbvapi/comments';

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
  const URL = `${ROOT_URL}/${id}`;
  const request = axios.post(URL, values);

  return {
    type: TYPES.CREATE_COMMENT,
    payload: request
  };
}


export function getComments(id){
  const URL = `${ROOT_URL}/${id}`;
  const request = axios.get(URL);

  return {
    type: TYPES.GET_COMMENTS,
    payload: request
  };
}

export function deleteComment(id, commentId){
  const URL = `${ROOT_URL}/${id}/${commentId}`;
  const request = axios.delete(URL, );
  return {
    type: TYPES.DELETE_COMMENT,
    payload: request
  };
}

export function updateComment(id, commentId, values){
  const URL = `${ROOT_URL}/${id}/${commentId}`;
  const request = axios.put(URL, values );

  return {
    type: TYPES.UPDATE_COMMENT,
    payload: request
  };
}
