'use client'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Book, PlayCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EnrollCourseCard = ({ course, enrollCourse }) => {
    const courseJson = course?.courseJson?.course;
    const CalculatePerProgress = () => {
        return (enrollCourse?.completedChapters?.length ?? 0 / course?.courseContent?.length) * 100
    }

    return (
        <div className='border-3 p-4 w-full rounded-lg'>
            <Image src={course?.bannerImageUrl} alt={course?.name} width={400} height={300}
                className='w-full aspect-video rounded-2xl object-cover'
            />

            <div className='p-3 flex flex-col gap-3'>
                <h2 className='font-bold text-lg'>{courseJson?.name}</h2>
                <p className='line-clamp-2 text-gray-300 text-sm'>{courseJson?.description}</p>
                <div className=''>
                    {/* <h2 className='flex justify-between items-center text-sm text-blue-600'>Progress <span>{CalculatePerProgress()}%</span></h2> */}
                    {/* <Progress value={CalculatePerProgress()} /> */}

                    <Link href={'/workspace/view-course/' + course?.cid}>
                        <Button className={'w-full mt-4 bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300'}><PlayCircle /> Continue Learning</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EnrollCourseCard
