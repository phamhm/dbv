//CommentForm.js
import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class CommentForm extends Component {
  renderFields(field){
    const {meta:{touched = null, error=null}} = field;
    const className =
          `form-group ${touched && error ? 'has-danger': ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea className="form-control"
               {...field.input}/>
        <div className="text-help">{touched? error:null}</div>
      </div>
    );
  }

  onSubmit(values){
    this.props.createPost(values, this.props.id);
  }

  render() {
    const {handleSubmit}= this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="Comment"
                 label="Comment"
                 component={this.renderFields}/>
          <button type="submit"
                  className="btn btn-primary">Submit</button>
        </form>
      </div>
    );

  }
}

const connectedCommentForm = connect(null, {createPost})(CommentForm);

function validate(values){
  const errors = {};
  if (!values.Comment)
    errors.title="Comment can't be blank";

  return errors;
}
export default reduxForm({validate, form:"NewCommentForm"})(connectedCommentForm);
