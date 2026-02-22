
'use client'

import AppHeader from '@/app/workspace/_components/AppHeader'
import React, { useEffect, useState } from 'react'
import ChapterListSidebar from '../_components/ChapterListSidebar'
import ChapterContent from '../_components/ChapterContent'
import { useParams } from 'next/navigation'
import axios from 'axios'

const Course = () => {

  const [courseInfo, setCourseInfo] = useState();
  const { courseId } = useParams();

  useEffect(() => {
    GetEnrollCoursesById();
  }, [])

  const GetEnrollCoursesById = async () => {
    const result = await axios.get('/api/enroll-course?courseId=' + courseId);
    console.log(result.data)
    setCourseInfo(result.data)
  }
  return (
    <div>
      <AppHeader hideSidebar={true} />

      {/* This className makes the layout responsive */}
      <div className='flex flex-col lg:flex-row'>
        <ChapterListSidebar courseInfo={courseInfo} />
        <ChapterContent courseInfo={courseInfo} refreshData={() => GetEnrollCoursesById()} />
      </div>

    </div>
  )
}

export default Course