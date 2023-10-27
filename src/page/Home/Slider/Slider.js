import React, { useEffect, useState } from 'react'
import { Carousel, ConfigProvider, message } from 'antd';
import { getDataSlider } from '../../../service/api';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Slider() {
    const [banner, setBanner] = useState([]);
    let fetchData = async () => { 
      try {
          let response = await getDataSlider();
          setBanner(response.data.content)
      } catch {
          message.error("Đã có lỗi xảy ra")
      }
   };
    useEffect(() => {
      fetchData()
    }, []);
    const onChange = (currentSlide) => {
      };
      return (
          <ConfigProvider
            theme={{
              components: {
              Carousel: {
                dotHeight:10,
                dotWidth:10,
                dotActiveWidth: 20,
                    },
                  },
                }}
              >
        <Carousel autoplay effect='fade' afterChange={onChange}>
          {banner.map((item,index) => { 
            return <img src={item.hinhAnh} key={index} className='h-[1000px] w-full object-cover'/>
           })}
        </Carousel>
        </ConfigProvider>
      );
}
