'use client'

import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Book, Loader, LoaderCircle, PlayCircle, Settings } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { toast } from 'sonner';

const CourseCard = ({ course }) => {

    const courseJson = course?.courseJson?.course;
    const [loading, setLoading] = useState(false);

    const onEnrollCourse = async () => {
        try {
            setLoading(true);
            const result = await axios.post('/api/enroll-course', {
                courseId: course?.cid
            });
            if (result.data.resp) {
                toast.warning("Already Enrolled !")
            }
            else {
                toast.success("Enrolled !")
            }
            setLoading(false);
        } catch (e) {
            toast.success('Server Side error')
            setLoading(false);
        }
    }

    return (
        <div className='border-3 p-4 w-full rounded-lg'>
            <Image src={course?.bannerImageUrl} alt={course?.name} width={400} height={300}
                className='w-full aspect-video rounded-2xl object-cover'
            />

            <div className='p-3 flex flex-col gap-3'>
                <h2 className='font-bold text-lg'>{courseJson?.name}</h2>
                <p className='line-clamp-2 text-gray-300 text-sm'>{courseJson?.description}</p>
                <div className='flex justify-between items-center'>
                    <h2 className='flex items-center gap-2 text-sm'><Book className='text-blue-600 h-5 w-5' />{courseJson?.noOfChapters} Chapters</h2>
                    {course?.courseContent?.length ? (
                        <Button onClick={onEnrollCourse} size={'sm'}
                            disabled={loading}
                            className={
                                'bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300'
                            }>
                            {
                                loading ? <LoaderCircle className='animate-spin' /> : <PlayCircle />
                            }Enroll Course</Button>
                    ) : (
                        <Link href={'/workspace/edit-course/' + course?.cid}><Button size={'sm'} variant={'outline'}><Settings />Generate Course</Button></Link>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseCard
