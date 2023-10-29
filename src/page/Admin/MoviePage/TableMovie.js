import React, { useEffect, useState } from 'react'
import { Button, Table, Tag, message } from 'antd';
import { deletePhim, getDsPhim } from '../../../service/api';


export default function TableMovie() {
    const [listMovie, setListMovie] = useState([]);

    let fectchListMovie = () => { 
        getDsPhim()
        .then((res) => {
                console.log(res);
                setListMovie(res.data.content)
              })
        .catch((err) => {
               console.log(err);
              });
     }

    useEffect(() => {
        fectchListMovie()
    }, []);
    console.log(listMovie);
    let handleDeletePhim = (maPhim) => { 
      deletePhim(maPhim)
      .then((res) => {
              console.log(res);
              fectchListMovie()
              message.success("Xóa thành công")
            })
            .catch((err) => {
             console.log(err);
            });
     }

    let columnsHeader = [
        {
          title: 'Mã phim',
          dataIndex: 'maPhim',
          key: 'maPhim',
        },
        {
          title: 'Tên phim',
          dataIndex: 'tenPhim',
          key: 'tenPhim',
        },
        {
          title: 'Trạng thái',
          dataIndex: 'dangChieu',
          key: 'dangChieu',
          render: (valid) => {
              if (valid==true) {
                  return <Tag color="green" >Đang chiếu</Tag>
              } else {
                  return <Tag color="red" >Không</Tag>
              }
          }
        },
        {
          title: 'Hình ảnh',
          dataIndex: 'hinhAnh',
          key: 'hinhAnh',
          render: (img) => {
            return <img className='h-10 object-cover' src={img}/>
          }
        },
        {
          title: 'Đánh giá',
          dataIndex: 'danhGia',
          key: 'danhGia',
        },
        {
          title: 'Action',
          render: (_,phim) => { 
              console.log(phim);
              return (<>
              <Button className='bg-blue-600 text-white'>Edit</Button>
              <Button onClick={() => {handleDeletePhim(phim.maPhim)}} className='bg-red-600 text-white'>Delete</Button>
              </>
              )
           }
        },
  ]
  return (
    <div>
        <Table dataSource={listMovie} columns={columnsHeader} />;
    </div>
  )
}
