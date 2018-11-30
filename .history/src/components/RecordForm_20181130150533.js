import React, { Component } from 'react';
import {table} from "antd"
import PropTypes from "prop-types"

class RecordForm extends Component {
  render() {
      //  const {record}=this.props
    return (
     <form className="form-inline">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Date" name="date"/>

      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Title" name="title"/>

      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Amount" name="amount"/>

      </div>
      <button className="btn btn-primary">Create Record</button>
          
     </form>
    );
  }
}

export default RecordForm;
 RecordForm.propTypes={
  id:PropTypes.number,
  date:PropTypes.string,
  title:PropTypes.string,
  amount:PropTypes.number



}