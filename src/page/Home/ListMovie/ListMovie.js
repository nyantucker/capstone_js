import React, { useEffect, useState } from 'react'
import { getListMovie } from '../../../service/api';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { NavLink } from 'react-router-dom';

export default function ListMovie() {
  const [movieArr, setmovieArr] = useState([]); 
  useEffect(() => {
    getListMovie()
    .then((res) => {
            console.log(res);
            setmovieArr(res.data.content)
          })
    .catch((err) => {
           console.log(err);
          });
  }, []);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 container gap-10'>
      {movieArr.slice(0,12).map((item,index) => { 
        return <Card
        className='items-center'
        hoverable
        // style={{
        //   width: 240,
        // }}
        cover={<img className='h-90 w-60 object-fill' alt="example" src={item.hinhAnh} />}
      >
        <Meta className='truncate' title={item.tenPhim} description={item.moTa} />
        <div className='flex justify-center'>
        <NavLink to={`/movie/${item.maPhim}`} className="text-white content-center">
          <button className='mt-3 px-10 py-3 text-white bg-red-500 rounded  hover:text-yellow-200 shadow'>Đặt vé </button>
        </NavLink>
        </div>
      </Card>
       })}
    </div>
  )
}
