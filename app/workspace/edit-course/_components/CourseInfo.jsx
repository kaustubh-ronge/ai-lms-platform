'use client'

import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Book, Clock, Loader2, PlayCircle, Settings, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';

const CourseInfo = ({ course, viewCourse }) => {

    const courseLayout = course?.courseJson?.course;
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const GenerateCourseContent = async () => {
        // Call API to generate Content 
        setLoading(true);
        try {
            const result = await axios.post('/api/generate-course-content', {
                courseJson: courseLayout,
                courseTitle: course?.name,
                courseId: course?.cid
            });

            console.log(result.data);
            setLoading(false);
            toast.success("Course Content Generated Successfully !!!")
            router.replace('/workspace')
        } catch (e) {
            console.log(e);
            setLoading(false);
            toast.error("Server Side Error, Please Try Again !")
        }
    }
    return (
        <div className='md:flex gap-5 justify-between p-5 rounded-2xl border-2'>
            <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-3xl'>{courseLayout?.name}</h2>
                <p className='line-clamp-2 text-gray-200'>{courseLayout?.description}</p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    <div className='flex gap-5 p-3 rounded-lg shadow items-center border-3'>
                        <Clock className='text-blue-500' />

                        <section>
                            <h2>Duration</h2>
                            <h2>2 Hours</h2>
                        </section>
                    </div>

                    <div className='flex gap-5 p-3 rounded-lg shadow items-center border-3'>
                        <Book className='text-green-500' />

                        <section>
                            <h2>Chapters</h2>
                            <h2>2 Hours</h2>
                        </section>
                    </div>

                    <div className='flex gap-5 p-3 rounded-lg shadow items-center border-3'>
                        <TrendingUp className='text-red-500' />

                        <section>
                            <h2>Difficulty Level</h2>
                            <h2>{course?.level}</h2>
                        </section>
                    </div>
                </div>

                {!viewCourse ? (
                    <Button
                        onClick={GenerateCourseContent}
                        disabled={loading}
                        className={'bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed'}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating Content...
                            </>
                        ) : (
                            <>
                                <Settings /> Generate Content
                            </>
                        )}
                    </Button>
                ) : (
                   <Link href={'/course/'+course?.cid}> <Button className={'bg-green-600 hover:bg-green-700 duration-300 transition-all w-full text-white font-bold'}><PlayCircle />Continue Learning</Button></Link>
                )}
            </div>

            {course?.bannerImageUrl ? (
                <Image
                    src={course.bannerImageUrl}
                    alt='banner img'
                    width={400}
                    height={400}
                    className='w-full h-[240px] flex-row mt-5 md:mt-0 rounded-2xl object-cover aspect-auto'
                />
            ) : null}

        </div>
    )
}

export default CourseInfo
