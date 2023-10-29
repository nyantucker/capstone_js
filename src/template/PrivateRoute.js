import React from 'react'
import { userLocalStorage } from '../service/localStorage';

export default function PrivateRoute({children}) {
    console.log(children);
    let user = userLocalStorage.get()
    if (user?.maLoaiNguoiDung == "QuanTri") {
      return children
    }
    window.location.href= "/"
}
