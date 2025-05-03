import React from 'react'
import Header from '@/components/Header/Header.jsx'
import '../output.css'
import Resume from '@/components/AddResume/Resume.jsx'

export default function Dashboard() {
  return (
    <>
        <Header></Header>
        <div className=' p-10'>
           <h2 className='text-2xl font-bold '>My Resume</h2>
           <p className='text-gray-500'>Start creating your Own Ai Powered Resume For free</p>

           <div className='grid grid-cols-2 md:grid-cols-3 space-x-4 mt-4'>
            <Resume></Resume>
            <Resume></Resume>
           </div>
        </div>
    </>
    
  )
}
