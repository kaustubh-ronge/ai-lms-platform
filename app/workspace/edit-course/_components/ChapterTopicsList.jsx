import { Gift } from 'lucide-react';
import React, { useState } from 'react';

const ChapterTopicsList = ({ course }) => {
    const courseLayout = course?.courseJson?.course;
    const [showCompletion, setShowCompletion] = useState(false);

    const handleFinish = () => {
        setShowCompletion(true);
    };

    const handleViewRoadmap = () => {
        setShowCompletion(false);
    };

    // Show loading state if course data is not available yet
    if (!courseLayout) {
        return (
            <div>
                <h2 className='font-bold text-3xl mt-10 text-white'>Chapters & Topics</h2>
                <div className='flex flex-col items-center justify-center mt-10'>
                    <div className='p-6 border border-gray-700 rounded-2xl bg-gray-800 text-white'>
                        <p className='text-gray-300'>Loading course content...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (showCompletion) {
        return (
            <div>
                <h2 className='font-bold text-3xl mt-10 text-white text-center'>Course Completed! 🎉</h2>
                <div className='flex flex-col items-center justify-center mt-10'>
                    <div className='p-8 border border-green-700 shadow-2xl rounded-2xl bg-gradient-to-br from-green-900 to-emerald-900 text-white text-center max-w-md'>
                        <div className='text-6xl mb-4'>🎓</div>
                        <h2 className='text-2xl font-bold mb-3'>Congratulations!</h2>
                        <p className='text-green-300 mb-6'>You've successfully completed the course</p>
                        <button
                            onClick={handleViewRoadmap}
                            className='px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300'
                        >
                            View Roadmap Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 className='font-bold text-3xl mt-10 text-white'>Chapters & Topics</h2>
            <div className='flex flex-col items-center justify-center mt-10'>

                {courseLayout.chapters?.map((chapter, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <div className='p-6 border border-gray-700 shadow-2xl rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-white transform hover:scale-105 transition-transform duration-300'>
                            <h2 className='text-center text-blue-300'>Chapter {index + 1}</h2>
                            <h2 className='font-bold text-xl text-center mt-2'>{chapter.chapterName}</h2>
                            <h2 className='text-sm flex justify-between gap-16 mt-3 text-gray-300'>
                                <span className='flex items-center'>
                                    <span className='w-2 h-2 bg-green-400 rounded-full mr-2'></span>
                                    Duration: {chapter?.duration}
                                </span>
                                <span className='flex items-center'>
                                    <span className='w-2 h-2 bg-purple-400 rounded-full mr-2'></span>
                                    Topics: {chapter?.topics?.length}
                                </span>
                            </h2>
                        </div>

                        <div>
                            {chapter?.topics?.map((topic, topicIndex) => (
                                <div className='flex flex-col items-center' key={topicIndex}>
                                    <div className='h-10 bg-gradient-to-b from-blue-500 to-purple-600 w-1 rounded-full'></div>
                                    <div className='flex items-center gap-5'>
                                        <span className={`${topicIndex % 2 == 0 && 'text-transparent'} max-w-xs text-gray-300 font-medium`}>{topic}</span>
                                        <div className='relative'>
                                            <h2 className='text-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 px-6 text-white p-4 border border-blue-400 shadow-lg'>{topicIndex + 1}</h2>
                                            <div className='absolute inset-0 rounded-full bg-blue-400 blur-sm opacity-30 animate-pulse'></div>
                                        </div>
                                        <span className={`${topicIndex % 2 != 0 && 'text-transparent'} max-w-xs text-gray-300 font-medium`}>{topic}</span>
                                    </div>

                                    {topicIndex == chapter?.topics?.length - 1 && <div className='h-10 bg-gradient-to-b from-purple-600 to-pink-600 w-1 rounded-full'></div>}
                                    {topicIndex == chapter?.topics?.length - 1 && (
                                        <div className='flex items-center gap-5'>
                                            <Gift className='text-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 h-14 w-14 text-white p-4 shadow-lg transform hover:rotate-12 transition-transform' />
                                        </div>
                                    )}
                                    {topicIndex == chapter?.topics?.length - 1 && <div className='h-10 bg-gradient-to-b from-pink-600 to-red-600 w-1 rounded-full'></div>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <button
                    onClick={handleFinish}
                    className='p-6 border border-green-800 shadow-2xl rounded-2xl bg-gradient-to-br from-green-900 to-emerald-900 text-white transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:from-green-800 hover:to-emerald-800'
                >
                    <h2 className='text-xl font-bold text-center'>Finish Course</h2>
                    <p className='text-green-300 text-sm text-center mt-1'>Click to complete your journey</p>
                </button>
            </div>
        </div>
    );
};

export default ChapterTopicsList;