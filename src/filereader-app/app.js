import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { connect } from 'react-redux';
import {readFileLine} from './actions';
import LineDisplayer from './containers/LineDisplayer';
import CommentBox from './containers/CommentBox';


class Dbv extends Component {

  readLocalFiles(files){
    const file = files[0];
    const fileReader = new FileReader();

    fileReader.readAsText(file);
    const readFileLine = this.props.readFileLine;

    fileReader.onload = (event) => {
      const res = event.target.result;
      const lines = res.split(/[\n]+/g);
      readFileLine(lines);
    };
  }

  printLines(){
    const lines = this.props.fileLines;
    return lines.map((line, indx) => <LineDisplayer key={indx} line={line}/>);
  }

  render() {
    return (
      <div>
        <ReactFileReader
          fileTypes={['.txt']}
          handleFiles={this.readLocalFiles.bind(this)}>
          <button className='btn'>Upload</button>
        </ReactFileReader>

        {this.printLines()}

        <div style={{position: 'fixed',right:0,  top:0, background:'grey', height:'100%', width:'500px'}}>
          <CommentBox/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({fileLines}){
  return {fileLines};
}

export default connect(mapStateToProps, {readFileLine})(Dbv);
