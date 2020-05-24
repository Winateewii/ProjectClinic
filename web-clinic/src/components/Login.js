import React, { Component } from 'react';

export class Login extends Component{
    render(){
        return(
            <div>
  <link rel="stylesheet" type="text/css" href="C:\Users\Poom\web-clinic\public\node_modules\bootstrap\dist\css" />
  <link rel="stylesheet" type="text/css" href="C:\Users\Poom\web-clinic\public\node_modules\bootstrap\dist\js" />
  <link rel="stylesheet" type="text/css" href="style login.css" />
  <title>เข้าสู่ระบบ และ ลงทะเบียน</title>
  <div className="container">
    <div className="row">
      <div className="col-md-5">
        <h1 className="text-center">เข้าสู่ระบบ</h1>
        <label className="label control-label">User name หรือ E-mail </label>
        <div className="input-group">
          <span className="input-group-addon"><span className="glyphicon glyphicon-user" /></span>
          <input type="text" className="form-control" name="mail" placeholder="E-mail" />
        </div>
        <label className="label control-label">password </label>
        <div className="input-group">
          <span className="input-group-addon"><span className="glyphicon glyphicon-lock" /></span>
          <input type="password" className="form-control" name="password" placeholder="password" />
        </div>
        {/* make a row for 2 col-md-6 */}
        <div className="row">
          <div className="col-md-6">
            <input type="checkbox" /><small>จำฉันไว้</small>
          </div>
          <div className="col-md-6">
            <a href="#"><p className="text-right">ลืมรหัสผ่าน</p></a>
          </div>
        </div>
        {/* close */}
        <a href="#"><div className="btn btn-default">เข้าสู่ระบบ</div></a>
        <p className="text-center">
          ยังไม่ได้เป็นสมาชิค?<a href="#">ลงทะเบียน</a>
        </p>
      </div>
      <div className="col-md-2" />
      <div className="col-md-5">
        <h2 className="text-center">ลงทะเบียน</h2>
        <label className="label control-label">ชื่อ</label>
        <div className="input-group">
          <span className="input-group-addon"><span className="glyphicon glyphicon-user" /></span>
          <input type="text" className="form-control" name="ชื่อ" placeholder="ชื่อ" />
        </div>
        <label className="label control-label">E-mail</label>
        <div className="input-group">
          <span className="input-group-addon"><span className="glyphicon glyphicon-envelope" /></span>
          <input type="email" className="form-control" name="E-mail" placeholder="E-mail" />
        </div>
        <label className="label control-label">เบอร์โทร</label>
        <div className="input-group">
          <span className="input-group-addon"><span className="glyphicon glyphicon-phone" /></span>
          <input type="number" className="form-control" name="เบอร์โทร" placeholder="เบอร์โทร" />
        </div>
        <label className="label control-label">รหัสผ่าน</label>
        <div className="input-group">
          <span className="input-group-addon"><span className="glyphicon glyphicon-lock" /></span>
          <input type="password" className="form-control" name="รหัสผ่าน" placeholder="รหัสผ่าน" />
        </div>
        <label className="label control-label">ใส่รหัสผ่านอีกครั้ง</label>
        <div className="input-group">
          <span className="input-group-addon"><span className="glyphicon glyphicon-lock" /></span>
          <input type="password" className="form-control" name="ใส่รหัสผ่านอีกครั้ง" placeholder="ใส่รหัสผ่านอีกครั้ง" />
        </div>
        <a href="#"><div className="btn btn-default">ลงทะเบียน</div></a>
      </div>
    </div>
  </div>
</div>

        )
    }
}
export default Login
