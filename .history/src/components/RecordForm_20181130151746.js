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
  render() {
      //  const {record}=this.props
      const {date,title,amount}=this.state;
    return (
     <form className="form-inline">
      <div className="form-group">
        <input type="text" className="form-control"
               placeholder="Date" 
               name="date" value={date}
               onChange={(e)=>this.setState({date:e.target.value})}/>

      </div>
      <div className="form-group">
        <input type="text" className="form-control" 
               placeholder="Title"
               name="title" value={title}
               onChange={e=>this.setState({title:e.target.value})}/>

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
              >
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