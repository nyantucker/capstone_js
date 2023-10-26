import React, { useEffect, useState } from 'react'
import ListMovie from './ListMovie/ListMovie'
import { getListMovie } from '../../service/api';
import TabMovie from './TabMovie/TabMovie';

export default function Home() {
  return (
    <div>
      <ListMovie/>
      <TabMovie/>
    </div>
  )
}
