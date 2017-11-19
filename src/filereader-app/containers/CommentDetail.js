import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteComment, updateComment} from '../actions';

class CommentDetail extends Component{
  unhideEditArea(){

  }

  render(){
    const {comment, _id: commentId, submit_date} = this.props.comment;
    return (
      <div>
        <div className="comment-text">
          <button type="button"
                  onClick={() => this.props.deleteComment(this.props.id, commentId)}
            className="btn btn-default">
            <span aria-hidden="true">×</span>
          </button>

          <button type="button"
                  onClick={this.unhideEditArea.bind(this)}
            className="btn btn-default">
            <span aria-hidden="true">U</span>
          </button>

          on: {submit_date}
          <p>{comment}</p>
        </div>
      </div>
    );
  }
}

export default connect(null, {deleteComment, updateComment})(CommentDetail);
