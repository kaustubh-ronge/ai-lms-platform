'use client'

import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseInfo from '../_components/CourseInfo';
import ChapterTopicsList from '../_components/ChapterTopicsList';

const EditCourse = ({ viewCourse = false }) => {

    const { courseId } = useParams();
    const [course, setCourse] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        GetCourseInfo();
    }, [])

    const GetCourseInfo = async () => {
        setLoading(true);
        const result = await axios.get('/api/courses?courseId=' + courseId);
        setLoading(false);
        setCourse(result.data);
    }

    return (
        <div>
            <CourseInfo course={course} viewCourse={viewCourse} />
            <ChapterTopicsList course={course} />
        </div>
    )
}

export default EditCourse
