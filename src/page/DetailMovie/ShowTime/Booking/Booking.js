import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { bookingTicket, getDsPhongVe } from '../../../../service/api';
import axios from 'axios';

export default function Booking() {
    let params = useParams()
    const [thongTinPhim,setthongTinPhim] = useState([])
    const [danhSachGhe,setDanhSachGhe] = useState([])
    const datVe = {
        maLichChieu: params.maLichChieu,
        danhSachVe: [],
     }
    console.log(params);
    useEffect(() => {
        getDsPhongVe(params.maLichChieu)
        .then((res) => {
                console.log(res.data.content);
                setDanhSachGhe(res.data.content.danhSachGhe)
                setthongTinPhim(res.data.content.thongTinPhim)
              })
        .catch((err) => {
               console.log(err);
              });
    }, []);
    console.log(danhSachGhe,thongTinPhim);
    
    let handleGetGhe = (ghe) => { 
        console.log(datVe);
        console.log(ghe);
        return  datVe.danhSachVe.push({
            "maGhe":ghe.maGhe,
            "giaVe":ghe.giaVe
        })
    }

    let handleBooking = (danhSachVe) => { 
        bookingTicket(danhSachVe)
        .then((res) => {
                console.log(res);
              })
        .catch((err) => {
               console.log(err);
              });
       }
    
    let handleDanhSachGhe = () => { 
        return danhSachGhe.map((ghe) => { 
            if (ghe.loaiGhe == "Thuong") {
                return <button onClick={() => { handleGetGhe(ghe) }} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-4 border border-blue-500 hover:border-transparent rounded' style={{backgroundColor:""}}>{ghe.tenGhe}</button>
            } else if (ghe.loaiGhe == "Vip") {
                return <button onClick={() => { handleGetGhe(ghe) }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 border border-blue-700 rounded">{ghe.tenGhe}</button>
            } else if (ghe.daDat == false) {
                return <button class="bg-gray-300 text-white font-bold py-4 px-4 rounded opacity-50 cursor-not-allowed">X</button>
            }
         })
     }
     let renderBookng = () => { 
        return <div>
            <img src={thongTinPhim.hinhAnh}/>
            <h1 className='text-center'>80000000</h1>
            <div className='flex justify-between'>
                <p>Cụm rạp</p>
                <p>{thongTinPhim.tenCumRap}</p>
            </div>
            <div className='flex justify-between'>
                <p>Địa chỉ</p>
                <p>{thongTinPhim.diaChi}</p>
            </div>
            <div className='flex justify-between'>
                <p>Rạp</p>
                <p>{thongTinPhim.tenRap}</p>
            </div>
            <div className='flex justify-between'>
                <p>Giờ chiếu</p>
                <p>{thongTinPhim.ngayChieu}-{thongTinPhim.gioChieu}</p>
            </div>
            <div className='flex justify-between'>
                <p>Tên phim</p>
                <p>{thongTinPhim.tenPhim}</p>
            </div>
            <div className='flex justify-between'>
                <p>Ghế đã chọn</p>
                <p>{}</p>
            </div>
            <div className='flex justify-center'>
                <button onClick={() => { handleBooking(datVe) }} className='text-center bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded'>Đặt vé</button>
            </div>
        </div>
      }


  return (
    <div className='container flex justify-between'>
            <div className='w-1/2 grid grid-cols-12 gap-1'>{handleDanhSachGhe()}</div>
            <div className='w-1/3'>{renderBookng()}</div>
    </div>
    
  )
}
