import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { getMovieShowTime } from '../../../service/api';
import { NavLink, useParams } from 'react-router-dom';
import moment from 'moment';
const onChange = (key) => {
};
export default function ShowTime() {
    let params = useParams()
    const [heThongRap, setheThongRap] = useState([])
    useEffect(() => {
        getMovieShowTime(params.id)
        .then((res) => {
                setheThongRap(res.data.content.heThongRapChieu)
              })
        .catch((err) => {
               console.log(err);
              });
    }, []);
    let renderLichChieu = (lichChieu) => {
        return lichChieu.map((lichChieu)=> {
            console.log(lichChieu.maLichChieu);
            return (<div>
                <NavLink to={`/movie/lich-chieu/${lichChieu.maLichChieu}`}><button><span className='bg-green-500 text-white rounded shadow px-5 hover:bg-red-500'>{lichChieu.ngayChieuGioChieu}</span></button></NavLink>
                
            </div>)
        })
    }
    
    let handleShowTime = () => { 
        return heThongRap.map((heThongRap,index) => { 
            return {
                key: index,
                label: <div><p>{heThongRap.tenHeThongRap}</p><img className='w-16' src={heThongRap.logo} alt=""/></div>,
                children: <Tabs style={{height:500}} tabPosition='left' items={heThongRap.cumRapChieu.map((cumRap) => { 
                    return {
                        key: cumRap.tenCumRap,
                        label: <div className='text-left w-96 whitespace-normal'>
                            <p className='text-green-600 font-medium'>{cumRap.tenCumRap}</p>
                            <p className='hover:text-green-600'>{cumRap.diaChi}</p>
                        </div>,
                        children: <div style={{height:500, overflow:"scroll"}}>
                                {renderLichChieu(cumRap.lichChieuPhim)}
                                 </div>,
                    }
                 })} />,
            }
         })
     }
  return (
    <Tabs 
    style={{height:500}}
    tabPosition='left'
    defaultActiveKey="1" 
    items={handleShowTime()} 
    onChange={onChange} />
  )
}
