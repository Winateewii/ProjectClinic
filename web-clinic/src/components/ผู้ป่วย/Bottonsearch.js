import React, { Component } from 'react';

export class Bottonsearch extends Component{
    render(){
        return( 
<div>
  <meta charSet="UTF-8" />
  <link rel="stylesheet" href="stylesbottonsearch.css" />
  
      <div className="form">
        ข้อมูลผู้ป่วย
        <div> 
          <input type="text" name="search" placeholder="คำค้นหา" />
        </div>
      </div>
      <div className="container">
        <button className="btn ">ย้อนกลับ</button>
      </div>
    </div>
   )
}
}
export default Bottonsearch