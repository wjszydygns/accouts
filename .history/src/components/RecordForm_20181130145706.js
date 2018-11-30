import React, { Component } from 'react';
import {table} from "antd"
import PropTypes from "prop-types"

class Record extends Component {
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
     
     
     </form>
    );
  }
}

export default Record;
Record.propTypes={
  id:PropTypes.number,
  date:PropTypes.string,
  title:PropTypes.string,
  amount:PropTypes.number



}