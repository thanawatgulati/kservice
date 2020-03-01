import React, { Component } from 'react';

class Regis extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <div style={{ marginTop: 20 }} className="box box-primary">
            <div className="box-header">
              <h3
                className="box-title"
                style={{ fontFamily: '"Kanit", sans-serif' }}
              >
                ลงทะเบียนสินค้า
              </h3>
            </div>
            <div className="box-body">
              <form
                action="./process/regis.php"
                onsubmit="return checkregis()"
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>ชื่อ : </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        id="fname"
                        aria-describedby="helpId"
                        placeholder="firstname"
                      />
                    </div>
                    <div className="form-group">
                      <label>รหัสประจำตัวประชาชน : </label>
                      <input
                        type="text"
                        className="form-control"
                        name="iden"
                        id="iden"
                        aria-describedby="helpId"
                        placeholder={1102000000000}
                      />
                    </div>
                    <div className="form-group">
                      <label>อีเมล : </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="helpId"
                        placeholder="email@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label>ชื่อสินค้า : </label>
                      <select
                        className="form-control"
                        name="product_name"
                        id="product_name"
                      >
                        <option selected disabled value>
                          กรุณาเลือกรายชื่อสินค้าสินค้า
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>วันที่ลงทะเบียน : </label>
                      <input
                        type="date"
                        defaultValue="<?php echo Date('Y-m-d')?>"
                        className="form-control"
                        name="date_regis"
                        id="date_regis"
                        aria-describedby="helpId"
                        placeholder="email@email.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>นามสกุล : </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lname"
                        id="lname"
                        aria-describedby="helpId"
                        placeholder="lastname"
                      />
                    </div>
                    <div className="form-group">
                      <label>เบอร์โทรศัพท์ : </label>
                      <input
                        type="text"
                        className="form-control"
                        name="telphone"
                        id="telphone"
                        aria-describedby="helpId"
                        placeholder="0900000000"
                      />
                    </div>
                    <label>รหัสประจำเครื่อง ( Serial number )</label>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="fa fa-lock" />
                        </span>
                        <input
                          type="text"
                          name="serial"
                          id="serial"
                          className="form-control"
                          placeholder="xxxxxxxxxx"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>วันที่หมดประกัน : </label>
                      <input
                        type="date"
                        defaultValue="2000-03-22"
                        className="form-control"
                        name="date_end"
                        id="date_end"
                        aria-describedby="helpId"
                      />
                      <small id="helpId" className="form-text text-muted">
                        ระยะประกันเริ่มต้น 1 ปี
                      </small>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>ที่อยู่ผู้ลงทะเบียน : </label>
                  <textarea
                    className="form-control"
                    name="address"
                    id="address"
                    rows={3}
                    placeholder="Address"
                    defaultValue={''}
                  />
                </div>
                <button style={{ width: '100%' }} className="btn btn-primary">
                  ลงทะเบียนสินค้า
                </button>
              </form>
            </div>
          </div>
          {/* /.box-body */}
        </div>
      </div>
    );
  }
}

export default Regis;
