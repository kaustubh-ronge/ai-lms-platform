import React, { Suspense } from 'react'
import WelcomeBanner from '../_components/WelcomeBanner'
import EnrollCourseList from '../_components/EnrollCourseList'
import { ClipLoader } from 'react-spinners' // 1. Import the spinner

const MyLearning = () => {
    return (
        <div className='p-6'>
            <WelcomeBanner />
            <h2 className='font-bold text-2xl mt-5'>My Learning</h2>

            <Suspense fallback={
                // 2. Use the ClipLoader as the fallback
                <div className='flex justify-center items-center mt-10'>
                    <ClipLoader
                        color={"#3b82f6"} // This is a nice blue (tailwind's blue-500)
                        size={50}
                        aria-label="Loading Spinner"
                    />
                </div>
            }>
                <EnrollCourseList />
            </Suspense>
        </div>
    )
}

export default MyLearning