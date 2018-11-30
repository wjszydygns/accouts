import React, { Component } from 'react';
import {table} from "antd"

class Record extends Component {
  render() {
      //  const {record}=this.props
    return (
       <tr>
           <td>{this.props.date}</td>
           <td>{this.props.title}</td>
           <td>{this.props.amount}</td>
       </tr>
    );
  }
}

export default Record;