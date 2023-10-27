import React, { useEffect, useState } from 'react'
import ListMovie from './ListMovie/ListMovie'
import { getListMovie } from '../../service/api';
import TabMovie from './TabMovie/TabMovie';
import Slider from './Slider/Slider';

export default function Home() {
  return (
    <div>
      <Slider/>
      <ListMovie/>
      <TabMovie/>
    </div>
  )
}
