//CommentBox.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.selectLine.line}</h2>
        <CommentForm id={btoa(this.props.selectLine.line)}/>
        <CommentList id={btoa(this.props.selectLine.line)}/>
      </div>
    );
  }
}

function mapStateToProps({selectLine}){
  return {selectLine};
}

export default connect(mapStateToProps, null)(CommentBox);
