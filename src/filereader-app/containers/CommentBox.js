//CommentBox.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function CommentBox({selectLine:{line}}) {
  const b64= btoa(line);

  return (
    <div>
      <h2>{line}</h2>
      <CommentForm id={b64}/>
      <CommentList id={b64}/>
    </div>
  );
}

function mapStateToProps({selectLine}){
  return {selectLine};
}

export default connect(mapStateToProps, null)(CommentBox);
