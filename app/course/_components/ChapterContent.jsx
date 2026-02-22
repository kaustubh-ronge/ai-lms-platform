'use client'

import { Button } from '@/components/ui/button';
import { SelectedChapterIndexContext } from '@/context/SelectedChapterIndexContext';
import axios from 'axios';
import { CheckCircle, LoaderCircle, X, Youtube } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useContext, useState } from 'react'
import YouTube from 'react-youtube';
import { toast } from 'sonner';


const ChapterContent = ({ courseInfo, refreshData }) => {

  const [loading, setLoading] = useState(false);
  const { courseId } = useParams();
  const { selectedChapterIndex, setSelectedChapterIndex } = useContext(SelectedChapterIndexContext);

  const enrollCourse = courseInfo?.enrollCourse;


  if (!courseInfo) {
    return (
      <div className='p-10 flex-1 min-w-0 h-screen overflow-y-auto'>
        <div className="flex justify-center items-center h-[70vh]">
          <LoaderCircle className="animate-spin h-12 w-12 text-blue-600" />
        </div>
      </div>
    )
  }

  const courseContent = courseInfo?.courses?.courseContent;
  const currentChapter = courseContent?.[selectedChapterIndex];

  const chapterData = Array.isArray(currentChapter?.courseData)
    ? currentChapter?.courseData[0]
    : currentChapter?.courseData;

  const videoData = courseContent?.[selectedChapterIndex]?.youtubeVideo;
  const topics = chapterData?.topics;
  let completedChapter = enrollCourse?.completedChapters ?? [];

  const markChapterCompleted = async () => {
    setLoading(true);
    completedChapter.push(selectedChapterIndex);
    const result = await axios.put('/api/enroll-course', {
      courseId: courseId,
      completedChapter: completedChapter
    });

    console.log(result);
    refreshData();
    toast.success('Chapter Marked as Completed !');
    setLoading(false);
  }

  const markIncompleteChapter = async () => {
    setLoading(true);
    const completedChap = completedChapter.filter(item => item != selectedChapterIndex);
    const result = await axios.put('/api/enroll-course', {
      courseId: courseId,
      completedChapter: completedChap
    });

    console.log(result);
    refreshData();
    toast.success('Chapter Marked as InCompleted !')
    setLoading(false);
  }

  return (
    <div className='p-10 flex-1 min-w-0 h-screen overflow-y-auto'>
      <div className='flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8 mt-3'>
        <h2 className='text-3xl font-extrabold text-white'>
          {selectedChapterIndex + 1}.{"  "}{chapterData?.chapterName}
        </h2>

        {!completedChapter?.includes(selectedChapterIndex) ? (
          <Button
            onClick={() => markChapterCompleted()}
            disabled={loading}
            className={'bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300 disabled:bg-gray-500 disabled:opacity-70 flex gap-2 items-center'}
          >
            {loading ? (
              <LoaderCircle className='h-5 w-5 animate-spin' />
            ) : (
              <CheckCircle className='h-5 w-5' />
            )}
            Mark as Complete
          </Button>
        ) : (
          <Button
            onClick={markIncompleteChapter}
            disabled={loading}
            className={'bg-green-600 text-white font-bold hover:bg-green-700 transition-all duration-300 disabled:bg-gray-500 disabled:opacity-70 flex gap-2 items-center'}
          >
            {loading ? (
              <LoaderCircle className='h-5 w-5 animate-spin' />
            ) : (
              <X className='h-5 w-5' />
            )}
            Mark Incomplete
          </Button>
        )}
      </div>

      <div className='mb-10'>
        <h2 className='text-2xl font-bold flex gap-2 mb-5'>
          Related Videos <Youtube className='mt-1 text-red-600' />
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {videoData?.map((video, index) => index < 4 && (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg aspect-video bg-gray-900">
              <YouTube
                videoId={video?.videoId}
                opts={{
                  height: '100%',
                  width: '100%'
                }}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-700 mb-10" />

      <div>
        <h2 className='text-2xl font-bold mb-6'>Chapter Topics</h2>
        {topics?.map((topic, index) => (
          <div key={index} className="mb-8 p-6 bg-gray-950 rounded-lg border border-gray-800 shadow-md">
            <h3 className='text-2xl text-purple-600 font-semibold mb-4 border-b-2 border-gray-500'>{index + 1}.{" "}{topic?.topic}</h3>
            <div className="
                                text-gray-300 
                                leading-7
                                [&_p]:mb-5
                                [&_ul]:list-disc [&_ul]:ml-8 [&_ul]:mb-5
                                [&_ol]:list-decimal [&_ol]:ml-8 [&_ol]:mb-5
                                [&_li]:mb-3
                                [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-5 [&_h1]:text-indigo-400
                                [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-5 [&_h2]:text-blue-400
                                [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mb-4 [&_h3]:text-teal-400
                                [&_h4]:text-md [&_h4]:font-semibold [&_h4]:mb-4 [&_h4]:text-yellow-400
                                [&_strong]:font-medium [&_strong]:text-sky-300
                                [&_a]:text-blue-400 [&_a]:underline
                                [&_code]:bg-gray-800 [&_code]:rounded-md [&_code]:px-2 [&_code]:py-1 [&_code]:font-mono [&_code]:text-sm
                                [&_pre]:bg-gray-900 [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:overflow-x-auto
                              ">
              <div dangerouslySetInnerHTML={{ __html: topic?.content }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChapterContent