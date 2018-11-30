import React, { Component } from 'react';
import {table} from "antd"
import PropTypes from "prop-types"
import "../index.css"
import * as RecordAPI from "../utils/RecordsAPI"

class RecordForm extends Component {

   state={
       date:"",
       title:"",
       amount:"",
   }

    valid=()=>{
        //验证是否有效，三个同时有值的时候才有效，返回true
        return  this.state.date &&this.state.title &&this.state.amount


    }
    handle=(e,key)=>{
       this.setState({
        [key]:e.target.value
       })
    }
    addRecord=(event)=>{
      event.preventDefault();//阻止默认行为，即参数不会出现在ｕｒｌ中
      const record=this.state;
      const {addRecord}=this.props;
    //   addRecord(record);
      RecordAPI.create({...record,amount:Number.parseInt(record.amount,0)});
      addRecord();
    　　
    }


  render() {
      //  const {record}=this.props
      const {date,title,amount}=this.state;
    return (
     <form className="form-inline mb-3">
      <div className="form-group">
        <input type="text" className="form-control"
               placeholder="Date" 
               name="date" value={date}
               onChange={e=>this.handle(e,"date")}/>

      </div>
      <div className="form-group">
        <input type="text" className="form-control" 
               placeholder="Title"
               name="title" value={title}
               onChange={e=>this.handle(e,"title")}/>

      </div>
      <div className="form-group">
        <input type="text" className="form-control"
               placeholder="Amount"
               name="amount" value={amount}
               onChange={e=>this.setState({amount:e.target.value})}/>

      </div>
      <div className="form-group">
      <button className="btn btn-primary"  
              type="submit" 
              disabled={!(date && title && amount)}
              onClick={this.addRecord}>
              Create Record
     </button>
      </div>
          
     </form>
    );
  }
}

export default RecordForm;
 RecordForm.propTypes={
  id:PropTypes.string,
  date:PropTypes.string,
  title:PropTypes.string,
  amount:PropTypes.number,
  addRecord:PropTypes.func.isRequired,



}