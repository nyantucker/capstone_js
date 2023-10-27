import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailMovie, getMovieShowTime } from '../../service/api';
import moment from 'moment';
import { Progress } from 'antd';
import ShowTime from './ShowTime/ShowTime';

export default function DetailMovie() {
    let params = useParams()
    const [detail, setdetail] = useState({}); 
    const [heThongRap, setheThongRap] = useState([])
    useEffect(() => {
        getDetailMovie(params.id)
        .then((res) => {
            console.log(res.data.content);
                setdetail(res.data.content)
              })
        .catch((err) => {
              });
    }, []);
  return (
    <div>
    <div className='container'>
        <div className='flex justify-around items-center'>
        <img className='w-1/3 aspect-auto	' src={detail.hinhAnh}></img>
        <div className='w-1/2'>
        <div className='flex justify-center items-center'>
            <h1 style={{fontSize:50}} className='font-medium text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-extrabold'>{detail.tenPhim}</h1></div>
        <div className='flex'>
            <Progress
            className='m-auto'
            size={150}
            strokeWidth={10}
            format={(percent) => <span className='font-medium'>{percent/10} Điểm</span> }
            type="circle" percent={detail.danhGia*10} />
        </div>
        <div>
            <p className='text-justify'><span className='font-medium underline '>Nội dung:</span> {detail.moTa}</p>
            <p className='text-center text-4xl font-extrabold'>Ngày khởi chiếu: {moment(detail.ngayKhoiChieu).format("DD/MM/YYYY")}</p>
            <p className='text-center text-xl font-bold dark:text-white'>Xem Trailer</p>
            <div className='flex justify-center'>
                <iframe width={600} height={300} src={detail.trailer}></iframe>
            </div>
            
        </div>
        </div>
        </div>
        <ShowTime/>
    </div>
    </div>

    
  )
}
