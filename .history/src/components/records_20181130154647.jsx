import React, { Component } from 'react';
import { table } from "antd"
import Record from "./record"
import * as moment from "moment"
import axios from "axios"
import PropTypes from "prop-types"
import * as RecordsAPI from "../utils/RecordsAPI"
import RecordForm from "./RecordForm"

class RecordList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      records:
        [
          // {id:1,date:"2018-11-2",title:"房租",amount:1900},
          // {id:2,date:"2018-11-5",title:"工资收入",amount:5000},
          // {id:3,date:"2018-11-11",title:"购物",amount:700},
          // {id:4,date:"2018-11-16",title:"收入",amount:800},
        ],
      isloaded: false,
      error: null
    }
  }

  componentDidMount() {
    const { records, isloaded } = this.state;
    // const url=`https://5bfe4524362b930013f651be.mockapi.io/api/v1/records`
    //  fetch(url).then(res=>{
    //    return res.json();

    //  }).then(data=>{  //res.data=data
    //    this.setState({
    //      records:data
    //    })
    //  }).catch(err=>
    //    console.log(err)
    //   )

    RecordsAPI.getAll().then(res => {
      this.setState({
        records: res.data,
        isloaded: true
      })

    }).catch(error => {
      this.setState({
        isloaded: true,
      })
    })

  }

   add=(record)=>{
     const {records}=this.state;
     records.unshift(record);
     this.setState({
        records
     })
   }
  render() {
    const { error, isloaded, records } = this.state;
    let recordsComponent;
    {
      if (error) {
        recordsComponent = <div>{error}</div>
      } else if (!isloaded) {
        recordsComponent = <div>Loading...</div>

      }
      else {
        recordsComponent = (
          <div >
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
                  this.state.records.map((item, index) => {
                    item.date = moment(item.date).format("YYYY-MM-DD:HH:ss:mm")
                    return <Record key={item.id} {...item} />

                  })
                }
              </tbody>
            </table>
          </div>
        );
      }
    }

    return (
      <div>
        <h2>Records</h2>
        <RecordForm  {...this.state} addRecord={this.add}/>
        {recordsComponent}
      </div>

    )


  }
}

export default RecordList;


