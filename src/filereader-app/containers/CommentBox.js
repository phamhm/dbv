//CommentBox.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.selectLine.line}</h2>
      </div>
    );
  }
}

function mapStateToProps({selectLine}){
  return {selectLine};
}

export default connect(mapStateToProps, null)(CommentBox);
