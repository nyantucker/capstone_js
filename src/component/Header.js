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
        let classBtn = "success border-2 border-black rounded-xl px-7 py-3"
        if (info) {
            return (
            <>
            <span>{info.hoTen}</span>
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
        <span className='text-3xl font-medium text-red-600 animate-pulse'> CyberFlix</span>
        <div className='space-x-5'>{renderUserNav()}</div>
    </div>
  )
}
