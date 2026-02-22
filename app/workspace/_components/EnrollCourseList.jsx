// 'use client'

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import EnrollCourseCard from './EnrollCourseCard';

// const EnrollCourseList = () => {

//     const [enrolledCourseList, setEnrolledCourseList] = useState([]);
//     useEffect(() => {
//         GetEnrollCourses();
//     }, [])

//     const GetEnrollCourses = async () => {
//         const result = await axios.get('/api/enroll-course');
//         setEnrolledCourseList(result.data)
//     }

//     return enrolledCourseList?.length > 0 && (
//         <div className='mt-3'>
//             <h2 className='font-bold text-xl'>Continue Learning your courses</h2>

//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
//                 {enrolledCourseList?.map((course, index) => (
//                     <EnrollCourseCard course={course?.courses} key={index} enrollCourse={course?.enrollCourse} />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default EnrollCourseList


'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EnrollCourseCard from './EnrollCourseCard';
import { ClipLoader } from 'react-spinners'; // 1. Import the spinner

const EnrollCourseList = () => {

    const [enrolledCourseList, setEnrolledCourseList] = useState([]);
    // 2. Add a loading state, default to true
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        GetEnrollCourses();
    }, [])

    const GetEnrollCourses = async () => {
        try {
            const result = await axios.get('/api/enroll-course');
            setEnrolledCourseList(result.data)
        } catch (error) {
            console.error("Failed to fetch courses:", error);
        } finally {
            // 3. Set loading to false after the API call finishes (success or fail)
            setIsLoading(false); 
        }
    }

    // 4. Show the loader while isLoading is true
    if (isLoading) {
        return (
            <div className='flex justify-center items-center mt-10'>
                <ClipLoader
                    color={"#3b82f6"} 
                    size={50}
                    aria-label="Loading Spinner"
                />
            </div>
        )
    }

    // 5. After loading, check if the list is empty and show a message
    if (enrolledCourseList.length === 0) {
        return (
             <div className='mt-3'>
                <h2 className='font-bold text-xl'>My Learning</h2>
                <p className='text-gray-500 mt-3'>You haven't enrolled in any courses yet.</p>
            </div>
        )
    }

    // 6. If not loading AND not empty, show the courses
    // (Removed the conditional '&&' from the return statement)
    return (
        <div className='mt-3'>
            <h2 className='font-bold text-xl'>Continue Learning your courses</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
                {enrolledCourseList?.map((course, index) => (
                    <EnrollCourseCard course={course?.courses} key={index} enrollCourse={course?.enrollCourse} />
                ))}
            </div>
        </div>
    )
}

export default EnrollCourseList