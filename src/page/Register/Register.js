import React from 'react'
import FormReg from './FormReg'
import Banner from '../Login/Banner'

export default function Register() {
  return (
    <div className='h-screen lg:flex items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className='container lg:flex bg-white rounded-xl p-10'>
        <FormReg/>
        <Banner/>
    </div>
</div>
  )
}
