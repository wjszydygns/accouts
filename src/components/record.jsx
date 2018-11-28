import React, { Component } from 'react';
import {table} from "antd"

class Record extends Component {
  render() {
      const {record}=this.props
    return (
       <tr>
           <td>{record.date}</td>
           <td>{record.title}</td>
           <td>{record.amount}</td>
       </tr>
    );
  }
}

export default Record;