import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectLine} from '../actions';

class LineDisplayer extends Component{
  handleClick(){
    return this.props.selectLine(this.props.line);
  }

  render(){
    return (
      <pre onClick={this.handleClick.bind(this)}>{this.props.line}</pre>
    );
  }
}

export default connect(null, {selectLine})(LineDisplayer);
