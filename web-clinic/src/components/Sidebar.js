import React, { Component } from 'react';

export class Sidebar extends Component{
    render(){
        return( 
<div>
  <meta charSet="UTF-8" />
  <title>คลีนิค รังสิต</title>
  <link rel="stylesheet" href="styles.css" />
  <div className="wrapper">
    <div className="sidebar">
      <div className="logo"><a href="#"><img src="logo.png" /></a>  
      </div>
      <ul>
        <li>
          <a href="#"><i className="fas fa-home" />หน้าหลัก</a>
        </li>
        <li>
          <a href="#"><i className="fas fa-user" />ผู้ป่วย</a>
        </li>
        <li>
          <a href="#"><i className="fas fa-address-card" />ออกใบเสร็จ</a>
        </li>
        <li>
          <a href="#"><i className="fas fa-address-book" />การนัดหมาย</a>
        </li>
      </ul>
    </div>
    <div className="main_content">
      <div className="header">
        ยินดีต้อนรับ!! สถาบันคลีนิคกายภาพ มหาวิทยาลับรังสิต .
        <ul>
          <li>
            <a href="#"><i className="fas fa-sign-out-alt" />ออกจากระบบ</a>
          </li>
        </ul>
      </div>
    </div>
  </div></div>
        )
    }
}
export default Sidebar