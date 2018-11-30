import React, { Component } from 'react';
import {table} from "antd"
import PropTypes from "prop-types"
import "../index.css"

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


  render() {
      //  const {record}=this.props
      const {date,title,amount}=this.state;
    return (
     <form className="form-inline">
      <div className="form-group">
        <input type="text" className="form-control"
               placeholder="Date" 
               name="date" value={date}
               onChange={this.handle(e,"date")}/>

      </div>
      <div className="form-group">
        <input type="text" className="form-control" 
               placeholder="Title"
               name="title" value={title}
               onChange={this.handle(e,"title")}/>

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
              disabled={!(date && title && amount)}>
              Create Record
     </button>
      </div>
          
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