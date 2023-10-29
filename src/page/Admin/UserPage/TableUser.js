import React, { useEffect, useState } from 'react'
import { Button, Table, Tag, message } from 'antd';
import { deleteUser, getListUser } from '../../../service/api';

export default function TableUser() {
    const [listUser, setListUser] = useState([]);
    let fetchListUser = () => { 
        getListUser()
        .then((res) => {
                console.log(res);
                setListUser(res.data.content)
              })
        .catch((err) => {
               console.log(err);
              });
     }
     useEffect(() => {
        fetchListUser()
     }, []);
     let handleDeleteUser = (taiKhoan) => { 
        deleteUser(taiKhoan)
        .then((res) => {
                fetchListUser()
                console.log(res);
                message.success("Xóa thành công")
              })
        .catch((err) => {
                message.error(err.response.data.content)
               console.log(err);
              });
      }
let columnsHeader = [
        {
          title: 'Họ tên',
          dataIndex: 'hoTen',
          key: 'hoTen',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Type',
          dataIndex: 'maLoaiNguoiDung',
          key: 'maLoaiNguoiDung',
          render: (text) => {
              if (text=="KhachHang") {
                  return <Tag color="green" >Khách Hàng</Tag>
              } else {
                  return <Tag color="red" >Quản trị</Tag>
              }
          }
        },
        {
          title: 'Số ĐT',
          dataIndex: 'soDT',
          key: 'soDT',
        },
        {
          title: 'Tài khoản',
          dataIndex: 'taiKhoan',
          key: 'taiKhoan',
        },
        {
          title: 'Mật khẩu',
          dataIndex: 'matKhau',
          key: 'matKhau',
        },
        {
          title: 'Action',
          render: (_,user) => { 
              // console.log(user);
              return <Button onClick={() => { handleDeleteUser(user.taiKhoan) }} className='bg-red-600 text-white'>Delete</Button>
           }
        },
  ]
  return (
    <div>
        <Table dataSource={listUser} columns={columnsHeader} />;
    </div>
  )
}
