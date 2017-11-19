//CommentBox.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';

class CommentBox extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.selectLine.line}</h2>
        <CommentForm/>
      </div>
    );
  }
}

function mapStateToProps({selectLine}){
  return {selectLine};
}

export default connect(mapStateToProps, null)(CommentBox);
