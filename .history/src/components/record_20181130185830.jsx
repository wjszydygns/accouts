import React, { Component } from 'react';
import { table } from "antd"
import PropTypes from "prop-types"
import * as RecordAPI from "../utils/RecordsAPI"

class Record extends Component {
  //自定义一个state,会覆盖this.state
  state = {
    edit: false

  }
  recordRow = () => {
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

    )
  }
  recordEdit = () => {
    return (
      <tr>
        <td><input type="text" className="form-control" defaultValue={this.props.date} ref="date" /></td>
        <td><input type="text" className="form-control" defaultValue={this.props.title} ref="title" /></td>
        <td><input type="text" className="form-control" defaultValue={this.props.amount} ref="amount" /></td>
        <td>
          <button className="btn btn-info mr-1" onClick={this.update} >Update</button>
          <button className="btn btn-danger" onClick={() => this.setState({ edit: false })}>Cancel</button>
        </td>
      </tr>
    )
  }
  editRow = () => {

    this.setState({
      edit: !this.state.edit
    })
  }
  update = () => {
    let updateRecord = {
      date: this.refs.date.value,
      title: this.refs.title.value,
      amount: Number.parseInt(this.refs.amount.value)
    }
    console.log(updateRecord);
    RecordAPI.update(this.props.id, updateRecord)
      .then(res => {
        this.props.update(this.props.id, updateRecord);
      });
    this.setState({
      edit: false
    })
  }
  render() {
    const { edit } = this.state;

    if (edit) {
      return this.recordEdit();
    } else {
      return this.recordRow();
    }

  }

}
export default Record;
Record.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number



}