// 'use client'

// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react'
// import AddNewCourseDialog from './AddNewCourseDialog';
// import axios from 'axios';
// import { useUser } from '@clerk/nextjs';
// import CourseCard from './CourseCard';

// const CourseList = () => {

//     const [courseList, setCourseList] = useState([]);
//     const { user } = useUser();
//     useEffect(() => {
//         user && GetCourseList();
//     }, [user])

//     const GetCourseList = async () => {
//         const result = await axios.get('/api/courses');
//         setCourseList(result.data);
//     }

//     return (
//         <div className='mt-10'>
//             <h2 className='font-bold text-3xl'>Course List</h2>
//             {courseList?.length == 0 ?
//                 (
//                     <div className='flex p-7 items-center justify-center flex-col border rounded-xl mt-5 bg-gray-900'>
//                         <Image src={'/online-education.png'} height={80} width={80} alt='logo' />
//                         <h2 className='my-2 text-xl font-bold'>Looks like you have not created any courses yet</h2>
//                         <AddNewCourseDialog>
//                             <Button className={'bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300'}>+ Create Your First Course</Button>
//                         </AddNewCourseDialog>
//                     </div>
//                 ) : (
//                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
//                         {courseList?.map((course, index) => (
//                             <CourseCard course={course} key={index} />
//                         ))}
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// export default CourseList


'use client'

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import AddNewCourseDialog from './AddNewCourseDialog';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import CourseCard from './CourseCard';
import { HashLoader } from 'react-spinners'; // 

const CourseList = () => {

    // 2. CHANGE INITIAL STATE FROM [] TO NULL
    const [courseList, setCourseList] = useState(null); 
    const { user } = useUser();
    
    useEffect(() => {
        user && GetCourseList();
    }, [user])

    const GetCourseList = async () => {

        const result = await axios.get('/api/courses');
        setCourseList(result.data);
    }

    return (
        <div className='mt-10'>
            <h2 className='font-bold text-xl'>Course List</h2>
            

            {courseList === null ? (
                <div className='flex justify-center items-center mt-20'>
                    <HashLoader color="#3b82f6" />
                </div>
            ) :
            
            courseList.length === 0 ? (
                <div className='flex p-7 items-center justify-center flex-col border rounded-xl mt-5 bg-gray-900'>
                    <Image src={'/online-education.png'} height={80} width={80} alt='logo' />
                    <h2 className='my-2 text-xl font-bold'>Looks like you have not created any courses yet</h2>
                    <AddNewCourseDialog>
                        <Button className={'bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300'}>+ Create Your First Course</Button>
                    </AddNewCourseDialog>
                </div>
            ) : 
            
            (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
                    {courseList.map((course, index) => (
                        <CourseCard course={course} key={index} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default CourseList