import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar">
          <section className="sidebar">
            <ul className="sidebar-menu" data-widget="tree">
              <li>
                <Link to="/dashboard">
                  <i className="fa fa-home" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className=" treeview">
                <Link>
                  <i className="fa fa-user" /> <span>ลูกค้า</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li>
                    <Link to="/regis">
                      <i className="fa fa-circle-o" />
                      ลงทะเบียนสินค้า
                    </Link>
                  </li>
                  <li>
                    <Link to="/regissuccess">
                      <i className="fa fa-circle-o" />
                      ประวัติการลงทะเบียนสินค้า
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="treeview">
                <Link to="">
                  <i className="fa fa-archive" /> <span>สินค้า</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li>
                    <Link to="product.php?s=col">
                      <i className="fa fa-circle-o" />
                      หมวดหมู่สินค้า
                    </Link>
                  </li>
                  <li>
                    <Link to="product.php?s=all">
                      <i className="fa fa-circle-o" />
                      สินค้าทั้งหมดภายในคลัง
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" treeview">
                <Link to="">
                  <i className="fa fa-hourglass-half" />{' '}
                  <span>สถานะแจ้งซ่อม</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right" />
                  </span>
                </Link>
                <ul className="treeview-menu">
                  <li className="">
                    <Link to="service.php?s=stat">
                      <i className="fa fa-circle-o" />
                      สถิติ
                    </Link>
                  </li>
                  <li>
                    <Link to="service.php?s=edit">
                      <i className="fa fa-circle-o" />
                      แก้ไขสถานะซ่อมสินค้า
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <i className="fa fa-circle-o" />
                      ตรวจสอบสถานะสินค้า
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="admin.php">
                  <i className="fa fa-lock" />
                  <span>ผู้ดูแลระบบ</span>
                </Link>
              </li>
            </ul>
          </section>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}

export default Menu;
