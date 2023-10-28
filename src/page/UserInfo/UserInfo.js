import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';

export default function UserInfo() {
  let user = useSelector(state => state.userReducer)
  let token = `${user.info.accessToken}`
  const [thongTinVe, setThongTinVe] = useState([]);
  useEffect(() => {
      getUserInfo(token)
      .then((res) => {
              console.log(res.data.content);
              setThongTinVe(res.data.content.thongTinDatVe)
            })
      .catch((err) => {
             console.log(err);
            });
  }, []);
  let handleDanhSachVe = () => { 
    return thongTinVe.map((item,index) => { 
      return <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} className='p-3'>
        <p className='font-medium'>{moment(item.ngayDat).format('DD/MM/YY h:mm')}</p>
        <p className='font-medium'>Tên phim: <span className='text-orange-600'>{item.tenPhim}</span></p>
        <p className='font-medium'>Thời lượng: {item.thoiLuongPhim}</p>
        <p className='font-medium'>Giá vé: {item.giaVe}</p>
        <p>{item.danhSachGhe.map((ghe) => { 
          return <div>
            <span className='text-red-600 font-medium'>{ghe.tenHeThongRap}</span>
            <span className='text-blue-500 font-medium'> {ghe.maCumRap}</span>
            <span className='text-green-500 font-medium'> {ghe.tenGhe}</span>
          </div>
         })}</p>
      </div>
     })
   }
  return (
    <div className='container'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential'>THÔNG TIN VÉ ĐẶT</h1>
    <div className=' grid grid-cols-1 lg:grid-cols-4 gap-10'>
      {handleDanhSachVe()}
    </div>
    </div>

  )
}


