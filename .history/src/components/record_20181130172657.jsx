import React, { Component } from 'react';
import {table} from "antd"
import PropTypes from "prop-types"

class Record extends Component {
  //自定义一个state,会覆盖this.state
  state={
    edit:false



  }
  recordRow=(
   
      <tr>
          <td>{this.props.date}</td>
          <td>{this.props.title}</td>
          <td>{this.props.amount}</td>
          <td>
            <button className="btn btn-info mr-1" onClick={this.editRow}>Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
      </tr>
   );
  
  recordEdit=()=>{
    return (
      <tr>
          <td><input type="text" className="form-control"/></td>
          <td><input type="text" className="form-control"/></td>
          <td><input type="text" className="form-control"/></td>
          <td>
            <button className="btn btn-info mr-1"  onClick={this.editRow}>Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
      </tr>
   );

  }
  editRow=()=>{
    debugger
     this.setState({
       edit:!this.state.edit
     })
  }
  render() {
      const {edit}=this.state;
      if(edit)
      {
        return this.recordEdit();
      }else{

        return this.recordRow;
      }
  
  }
}

export default Record;
Record.propTypes={
  id:PropTypes.string,
  date:PropTypes.string,
  title:PropTypes.string,
  amount:PropTypes.number



}