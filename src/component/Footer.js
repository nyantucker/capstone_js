import React from 'react'

export default function Footer() {
  return (
    <div className='container grid grid-cols-3'>
        <div>
            <h6>TIX</h6>
            <div className='grid grid-cols-2'>
            <a href="">FAQ</a>
            <a href="">Thỏa thuận sử dụng</a>
            <a href="">Brand Guidelines</a>
            <a href="">Chính sách bảo mật</a>
            </div>
        </div>
        <div>
            <h6>Đối tác</h6>
            <div className='grid grid-cols-4 gap-5'>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/1.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/2.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/3.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/4.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/5.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/6.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/7.jpg" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/8.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/9.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/10.jpg" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/11.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/12.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/13.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/14.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/15.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/16.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/17.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/18.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/19.png" alt /></a>
            <a className='h-10 w-10' href=""><img src="./img_capstone/logo_doitac/20.jpg" alt /></a>
            </div>
        </div>
        <div className='grid grid-cols-2'>
            <div>
                <h6>MOBILE APP</h6>
                <img className='h-10 w-10 mr-2' style={{display:"inline"}} src="./img_capstone/apps/ios.png"/>
                <img className='h-10 w-10 mr-2' style={{display:"inline"}} src="./img_capstone/apps/android.png"/>
            </div>
            <div>
                <h6>SOCAIL</h6>
                <img className='h-10 w-10 mr-2' style={{display:"inline"}} src="./img_capstone/apps/facebook.png"/>
                <img className='h-10 w-10 mr-2' style={{display:"inline"}} src="./img_capstone/apps/zalo.png"/>
            </div>
        </div>
    </div>
  )
}
