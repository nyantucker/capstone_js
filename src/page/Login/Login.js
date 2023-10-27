import React from 'react'
import Form from './Form'
import Banner from './Banner'

export default function Login() {
  return (
    <div className='h-screen flex items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className='container flex bg-white rounded-xl p-10'>
        <Form/>
        <Banner/>
    </div>
</div>
  )
}
