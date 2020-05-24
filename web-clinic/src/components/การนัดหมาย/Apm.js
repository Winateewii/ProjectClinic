import React, { Component } from 'react';

export class Appointment extends Component{
    render(){
        return(  
            <div>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  {/* <link rel="stylesheet" href="C:\Users\Poom\web-clinic\public\node_modules\bootstrap" /> */}
  <link rel="stylesheet" href="datepicker.css" />
  <link rel="stylesheet" href="styleApm.css" />
  <div className="inner-layer">
    <div className="container">
      <div className="row no-margin">
        <div className="col-sm-7">
          <div className="content">
            <h1>ระบบการนัดหมาย</h1>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-data">
            <div className="form-head">
              <h2>การนัดหมาย</h2>
            </div>
            <div className="form-body">
              <div className="row form-row">
                <input type="text" placeholder="ชื่อ-นามสกุล" className="form-control" />
              </div>
              <div className="row form-row">
                <input type="text" placeholder="เบอร์โทร" className="form-control" />
              </div>
              <div className="row form-row">
                <input type="text" placeholder="อีเมล์" className="form-control" />
              </div>
              <div className="row form-row">
                <input id="dat" type="text" placeholder="วันนัดหมาย" className="form-control" />
              </div>
              <h6>รายละเอียดที่อยู่</h6>
              <div className="row form-row">
                <div className="col-sm-6">
                  <input type="text" placeholder="อำเภอ" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <input type="text" placeholder="จังหวัด" className="form-control" />
                </div>
              </div>
              <div className="row form-row">
                <div className="col-sm-6">
                  <input type="text" placeholder="ประเทศ" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <input type="text" placeholder="รหัสไปรษณีย์" className="form-control" />
                </div>
              </div>
              <div className="row form-row">
                <button className="btn btn-success btn-appointment">
                  บันทึกการนัดหมาย
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* Optional JavaScript */}
  {/* jQuery first, then Popper.js, then Bootstrap JS */}
</div>

            </div>
          )
    }
}
export default Appointment