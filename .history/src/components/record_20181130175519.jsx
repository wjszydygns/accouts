import React, { Component } from 'react';
import {table} from "antd"
import PropTypes from "prop-types"

class Record extends Component {
  //自定义一个state,会覆盖this.state
  state={
    edit:false

  }
  test = (<div>22222</div>)
  recordRow=()=>{
   return (
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
  }
  recordEdit=()=>{
     return (
      <tr>
          <td><input type="text" className="form-control" defaultValue={this.props.date}/></td>
          <td><input type="text" className="form-control" defaultValue={this.props.title}/></td>
          <td><input type="text" className="form-control" defaultValue={this.props.amount}/></td>
          <td>
            <button className="btn btn-info mr-1"  onClick={this.update} >Update</button>
            <button className="btn btn-danger">Cancel</button>
          </td>
      </tr>
     )
  }
  editRow=()=>{
   
     this.setState({
       edit:!this.state.edit
     })
  }
  update=()=>{
   debugger


  }
  render() {
      const {edit}=this.state;
    
      if(edit)
      {
        return (
          <div>
            {this.recordEdit()}
          </div>
        );
      }
      return (
        <div>
          {this.test}
        </div>
      );
  
  }

}
export default Record;
Record.propTypes={
  id:PropTypes.string,
  date:PropTypes.string,
  title:PropTypes.string,
  amount:PropTypes.number



}