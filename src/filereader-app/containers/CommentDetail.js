import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteComment} from '../actions';
import CommentUpdater from './CommentUpdater';

class CommentDetail extends Component{
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

          on: {submit_date}
          <p>{comment}</p>
          <CommentUpdater
            comment={this.props.comment}
            id={this.props.id}/>
        </div>
      </div>
    );
  }
}

export default connect(null, {deleteComment})(CommentDetail);
