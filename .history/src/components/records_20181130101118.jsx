import React, { Component } from 'react';
import { table } from "antd"
import Record from "./record"
import Moment from "moment"

class RecordList extends Component {
  constructor(props)
  {
    super(props)
    this.state={
     records:
     [
        {id:1,date:"2018-11-2",title:"房租",amount:1900},
        {id:2,date:"2018-11-5",title:"工资收入",amount:5000},
        {id:3,date:"2018-11-11",title:"购物",amount:700},
        {id:4,date:"2018-11-16",title:"收入",amount:800},
     ]
    }
  }
  
  componentDidMount(){
    const url=`https://5bfe4524362b930013f651be.mockapi.io/api/v1/records`
     fetch(url).then(res=>{
       return res.json();

     }).then(data=>{  //res.data=data
       this.setState({
         records:data
       })
     }).catch(err=>
       console.log(err)
      )
  }
  render() {
    return (
      <div >
        <h2>Records</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Ttile</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.records.map((item,index)=>{
                 item.date=Moment.unix(Number.parseInt(item.data)).format("YYYY-MM-DD")
                 return <Record  key={item.id} record={item}/>

              })
            }
          </tbody>

        </table>


      </div>
    );
  }
}

export default RecordList;
