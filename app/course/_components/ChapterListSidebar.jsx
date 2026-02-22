import React, { useContext } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { SelectedChapterIndexContext } from '@/context/SelectedChapterIndexContext';

const ChapterListSidebar = ({ courseInfo }) => {

    const { selectedChapterIndex, setSelectedChapterIndex } = useContext(SelectedChapterIndexContext);
    const courseContent = courseInfo?.courses?.courseContent;
    
    // --- LOADING STATE ---
    if (!courseInfo) {
        return (
            <div className='w-full lg:w-90 p-5 bg-gray-950 lg:h-screen lg:flex-shrink-0'>
                <h2 className='my-3 font-bold text-xl animate-pulse'>Chapters ...</h2>
                {/* Skeleton Loader for Chapters */}
                <div className="flex flex-col gap-4 mt-5">
                    <div className="h-10 bg-gray-800 rounded-md animate-pulse"></div>
                    <div className="h-10 bg-gray-800 rounded-md animate-pulse"></div>
                    <div className="h-10 bg-gray-800 rounded-md animate-pulse"></div>
                    <div className="h-10 bg-gray-800 rounded-md animate-pulse"></div>
                    <div className="h-10 bg-gray-800 rounded-md animate-pulse"></div>
                </div>
            </div>
        )
    }
    // --- END LOADING STATE ---

    // (The rest of your component)
    const course = courseInfo?.courses;
    const enrollCourse = courseInfo?.course;
    
    return (
        <div className='w-full lg:w-90 p-5 bg-gray-950 lg:h-screen lg:flex-shrink-0 overflow-y-auto'>
            <h2 className='my-3 font-bold text-xl'>Chapters {" "} {" "}({courseContent?.length})</h2>
            <Accordion type="single" collapsible>

                {courseContent?.map((chapter, index) => {

                    const chapterData = Array.isArray(chapter?.courseData)
                        ? chapter.courseData[0]
                        : chapter.courseData;

                    if (!chapterData?.chapterName) {
                        return null;
                    }

                    return (
                        <AccordionItem value={chapterData.chapterName} key={index}
                            onClick={() => setSelectedChapterIndex(index)}
                        >
                            <AccordionTrigger className={'text-md font-medium'}>{index + 1}. {" "}{chapterData.chapterName}</AccordionTrigger>
                            <AccordionContent asChild>
                                <div className=''>
                                    {chapterData?.topics?.map((topic, i) => (
                                        <h2 className='p-3 bg-gray-900 my-2 rounded-lg' key={i}>{topic?.topic}</h2>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}

            </Accordion>
        </div>
    )
}

export default ChapterListSidebar