//CommentList.js
import React, { Component } from 'react';
import {connect} from 'react-redux';
import CommentDetail from './CommentDetail';

class CommentList extends Component {
  showComments(){
    const comments = this.props.comments;
    return comments.reverse().map(
      (comment, index) =>
        <CommentDetail key={'comment-'+index} id={this.props.id} comment={comment}/>
    );
  }

  render() {
    return (
      <div>
        {this.showComments()}
      </div>
    );
  }
}

function mapStateToProps({comments}){
  return {comments};
}

export default connect(mapStateToProps)(CommentList);
