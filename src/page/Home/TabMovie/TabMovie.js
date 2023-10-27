import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { getMovieByTheater } from '../../../service/api';
import moment from 'moment/moment';
import { listHeThongRap, userLocalStorage } from '../../../service/localStorage';
import { useDispatch } from 'react-redux';
import { SET_LIST_RAP } from '../../../redux/constant/user';
import { NavLink } from 'react-router-dom';
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
                        return <NavLink to={`/movie/lich-chieu/${lichChieu.maLichChieu}`}><span className='bg-green-500 text-white rounded shadow px-3 hover:bg-red-500'>{moment(lichChieu).format("DD/MM/YYYY")}</span></NavLink>
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
            children: <Tabs style={{height:700}} tabPosition='left' items={heThongRap.lstCumRap.map((cumRap) => { 
                return {
                    key: cumRap.tenCumRap,
                    label: <div className='text-left w-1/3 lg:w-96 whitespace-normal'>
                        <p className='text-blue-600 font-medium'>{cumRap.tenCumRap}</p>
                        <p>{cumRap.diaChi}</p>
                    </div>,
                    children: <div className='ant-children-tab' style={{height:700, overflow:"auto"}}>{renderDsPhim(cumRap.danhSachPhim)}</div>,
                }
             })}/>,
        }
     })
   }
  return (
    <div className='container tab-movie'>
        <Tabs
        className='container shadow rounded'
        style={{height:700}}
        tabPosition='left'
        defaultActiveKey="1" 
        items={handListHeThong()} 
        onChange={onChange} />
    </div>
    
  )
}


