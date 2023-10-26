import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { getMovieByTheater } from '../../../service/api';
import moment from 'moment/moment';
import { listHeThongRap, userLocalStorage } from '../../../service/localStorage';
import { useDispatch } from 'react-redux';
import { SET_LIST_RAP } from '../../../redux/constant/user';
const onChange = (key) => {
    console.log(key);
  };
export default function TabMovie() {
  const [listHeThong,setListHeThong]  = useState([])
  useEffect(() => {
    getMovieByTheater()
    .then((res) => {
            console.log(res);
            setListHeThong(res.data.content)
          })
    .catch((err) => {
          });
  }, []);
  let renderDsPhim = (dsPhim) => {
    return dsPhim.map((phim) => { 
        return <div className='flex space-x-5 p-3'>
            <img src={phim.hinhAnh} className='w-20 h-32 object-cover'/>
            <div>
                <p>{phim.tenPhim}</p>
                <div className='grid grid-cols-4 gap-4'>
                    {phim.lstLichChieuTheoPhim.map((lichChieu) => { 
                        return <span className='bg-green-500 text-white rounded shadow px-3'>{moment(lichChieu).format("DD/MM/YYYY")}</span>
                     })}
                </div>
            </div>
        </div>
     })
  }
  let handListHeThong = () => { 
    return listHeThong.map((heThongRap,index) => { 
        return {
            key: index,
            label: <img className='w-16' src={heThongRap.logo} alt=""></img>,
            children: <Tabs style={{height:500}} tabPosition='left' items={heThongRap.lstCumRap.map((cumRap) => { 
                return {
                    key: cumRap.tenCumRap,
                    label: <div className='text-left w-96 whitespace-normal'>
                        <p className='text-blue-600 font-medium'>{cumRap.tenCumRap}</p>
                        <p>{cumRap.diaChi}</p>
                    </div>,
                    children: <div style={{height:500, overflow:"scroll"}}>{renderDsPhim(cumRap.danhSachPhim)}</div>,
                }
             })}/>,
        }
     })
   }
  return (
    <div className='container shadow p-3 rounded border-2 border-l-black'>
        <Tabs
        style={{height:500}}
        tabPosition='left'
        defaultActiveKey="1" 
        items={handListHeThong()} 
        onChange={onChange} />
    </div>
    
  )
}


