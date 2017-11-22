import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteComment} from '../actions';
import CommentUpdater from './CommentUpdater';

class CommentDetail extends Component{
  constructor(props){
    super(props);
    this.state={showUpdate:false};
  }

  showUpdateToggle(){
    this.setState({showUpdate: !this.state.showUpdate});
  }

  showUpdater(){
    if (this.state.showUpdate)
      return (
        <CommentUpdater
          toggler={this.showUpdateToggle.bind(this)}
          comment={this.props.comment}
          id={this.props.id}/>
      );
    else return null;
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
                  onClick={this.showUpdateToggle.bind(this)}
            className="btn btn-default">
            <span aria-hidden="true">u</span>
          </button>

          on: {submit_date}
          <p>{comment}</p>
          {this.showUpdater()}
        </div>
      </div>
    );
  }
}

export default connect(null, {deleteComment})(CommentDetail);
