import React from 'react'
import { useSelector } from 'react-redux';
import { userLocalStorage } from '../service/localStorage';

export default function Header() {
    let {info} = useSelector((state) => { 
        return state.userReducer;
     })
    console.log(info);
    let handleLogout = () => { 
        userLocalStorage.remove();
        window.location.reload()
     }
    let handleLogin = () => { 
        window.location.href="/login"
     }
    let renderUserNav = () => {
        let classBtn = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        if (info) {
            return (
            <>
            <span className='text-xl font-bold dark:text-white text-slate-500 hover:text-blue-600'>{info.hoTen}</span>
            <button onClick={handleLogout} className={classBtn}>Đăng xuất</button>
            </> 
            )
        } else {
            return (
            <>
            <button onClick={handleLogin} className={classBtn}>Đăng nhập</button>
            <button className={classBtn}>Đăng ký</button>
            </>
            )
        }
     }
  return (
    <div className='h-20 flex items-center justify-between shadow-lg px-20'>
        <span className='text-3xl font-medium text-red-600'> <a href='/'>
            <img style={{width:200}} src="./img_capstone/logo.png" alt /> </a> </span>
        <div className='space-x-5'>{renderUserNav()}</div>
    </div>
  )
}
