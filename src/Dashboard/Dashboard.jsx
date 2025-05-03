import React from 'react'
import Header from '@/components/Header/Header.jsx'
import '../output.css'

export default function Dashboard() {
  return (
    <>
        <Header></Header>
        <div className=' p-10'>
           <h2 className='text-2xl font-bold '>My Resume</h2>
           <p className='text-gray-500'>Start creating your Own Ai Powered Resume For free</p>
        </div>
    </>
    
  )
}
