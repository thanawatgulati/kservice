import React, { Component } from 'react';

class Regissuccess extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="col-xs-12" style={{ marginTop: 20 }}>
          <div className="box">
            <div className="box-header">
              <h3
                className="box-title"
                style={{ fontFamily: '"Kanit", sans-serif' }}
              >
                ประวัติการลงทะเบียนสินค้า
              </h3>
              <div className="box-tools">
                <div
                  className="input-group input-group-sm hidden-xs"
                  style={{ width: 150 }}
                >
                  <input
                    type="text"
                    name="table_search"
                    id="gfg"
                    className="form-control pull-right"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            {/* /.box-header */}
            <div className="box-body table-responsive no-padding">
              query($sql_table); while($row_table =
              mysqli_fetch_assoc($result_table)){'{'}
              ?&gt;
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Identify</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>SerialNumber</th>
                    <th>Catagories</th>
                    <th>Product Name</th>
                    <th>Date Regis</th>
                    <th>Date End</th>
                    <th>Address</th>
                  </tr>
                </tbody>
                <tbody id="geeks">
                  {/*?php
                      $sql_table = "SELECT * FROM registration";
                      $result_table = $conn-*/}
                  <tr>
                    <td>{/*?php echo $row_table['fname']?*/}</td>
                    <td>{/*?php echo $row_table['lname']?*/}</td>
                    <td>{/*?php echo $row_table['iden']?*/}</td>
                    <td>{/*?php echo $row_table['phone']?*/}</td>
                    <td>{/*?php echo $row_table['email']?*/}</td>
                    <td>{/*?php echo $row_table['serialnumber']?*/}</td>
                    <td>{/*?php echo $row_table['categories']?*/}</td>
                    <td>{/*?php echo $row_table['product_name']?*/}</td>
                    <td>{/*?php echo $row_table['date_regis']?*/}</td>
                    <td>{/*?php echo $row_table['date_end']?*/}</td>
                    <td>{/*?php echo $row_table['myaddress']?*/}</td>
                  </tr>
                  {/*?php } ?*/}
                </tbody>
              </table>
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}
        </div>
      </div>
    );
  }
}

export default Regissuccess;
