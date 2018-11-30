import React, { Component } from "react"

export default class AmountBox extends React.Component {



    render() {
        const { text, type } = this.props;
        return (
            <div className="col">
              <div className="card">
               <div className={`card-header bg-${type} text-white`}>
                  {text}
               </div>
               <div className="card-body">
                  78
               </div>
              
              </div>
            </div>


        )
    }







}