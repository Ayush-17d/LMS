'use client'
import React from 'react'
import AdminSidebar from '@/app/components/Admin/sidebar/AdminSidebar'
import Heading from '@/app/utils/Heading'
import CreateCourse from '../../components/Admin/Course/CreateCourse'
import DashboardHeader from '@/app/components/Admin/DashboardHeader'

type Props={}

const page = (props:Props)=>{
return(
  <div className='dark:bg-[#151632]'>
    <Heading
    title='LearnifyHub-Admin'
    description='LearnifyHub is a platform for students to learn and get help from teachers'
    keywords='Programming,MERN,Redux,MachineLearning'
    />
    <div className='flex'>
      <div className='1500px:w-[16%] w-1/5'>
        <AdminSidebar/>
      </div>
      <div className="w-[85%]">
        <DashboardHeader/>
        <CreateCourse/>
      </div>
    </div>
  </div>
)
}

export default page

