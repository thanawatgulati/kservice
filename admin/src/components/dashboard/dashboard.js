import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container">
          <center>
            <div
              className="row"
              style={{
                marginTop: 20,
                padding: 20,
                border: 'solid black 2px',
                width: '50%'
              }}
            >
              <i style={{ fontSize: 60 }} className="ion ion-clock" />
              <br />
              <span style={{ fontSize: 20 }}>{Date()}</span>
            </div>
          </center>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-lg-6 col-xs-6">
              <div className="small-box bg-aqua">
                <div className="inner">
                  <h3>8</h3>
                  <p>จำนวนแจ้งซ่อมทั้งหมด</p>
                </div>
                <div className="icon">
                  <i className="ion ion-hammer" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-6">
              <div className="small-box bg-green">
                <div className="inner">
                  <h3>3</h3>
                  <p>รายการที่ซ่อมเสร็จแล้ว</p>
                </div>
                <div className="icon">
                  <i className="ion ion-checkmark" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-6">
              <div className="small-box bg-yellow">
                <div className="inner">
                  <h3>12</h3>
                  <p>รายการที่ซ่อมยังไม่เสร็จ</p>
                </div>
                <div className="icon">
                  <i className="ion ion-alert" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-6">
              <div className="small-box bg-red">
                <div className="inner">
                  <h3>23</h3>
                  <p>หมวดหมู่สินค้าในคลัง</p>
                </div>
                <div className="icon">
                  <i className="ion ion-cube" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
